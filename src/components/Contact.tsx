import React, { FormEvent, useState } from 'react';

import '../assets/styles/Contact.scss';

import emailjs from '@emailjs/browser';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | ''>('');

  const validateEmail = (emailAddress: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const hasNameError = trimmedName === '';
    const hasEmailError =
      trimmedEmail === '' || !validateEmail(trimmedEmail);
    const hasMessageError = trimmedMessage === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) {
      return;
    }

    setIsSending(true);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not configured correctly.');
      }

      const templateParams = {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus('success');

      setName('');
      setEmail('');
      setMessage('');

      setNameError(false);
      setEmailError(false);
      setMessageError(false);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let's Connect</h1>

          <p>
            Have a question, want to discuss one of my projects, or interested
            in working together? Send me a message and I'll get back to you.
          </p>

          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              {/* Name */}
              <TextField
                required
                id="contact-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);

                  if (e.target.value.trim() !== '') {
                    setNameError(false);
                  }
                }}
                error={nameError}
                helperText={
                  nameError ? 'Please enter your name.' : ''
                }
                disabled={isSending}
                fullWidth
                autoComplete="name"
                sx={{
                  '& .MuiInputBase-input': {
                    color: '#ffffff',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#ffffff',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#ffffff',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: '#ffffff',
                    opacity: 0.6,
                  },
                }}
              />

              {/* Email */}
              <TextField
                required
                id="contact-email"
                label="Email"
                type="email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);

                  if (
                    e.target.value.trim() !== '' &&
                    validateEmail(e.target.value.trim())
                  ) {
                    setEmailError(false);
                  }
                }}
                error={emailError}
                helperText={
                  emailError
                    ? 'Please enter a valid email address.'
                    : ''
                }
                disabled={isSending}
                fullWidth
                autoComplete="email"
                sx={{
                  '& .MuiInputBase-input': {
                    color: '#ffffff',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#ffffff',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#ffffff',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: '#ffffff',
                    opacity: 0.6,
                  },
                }}
              />
            </div>

            {/* Message */}
            <TextField
              required
              id="contact-message"
              label="Message"
              placeholder="What would you like to talk about?"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);

                if (e.target.value.trim() !== '') {
                  setMessageError(false);
                }
              }}
              error={messageError}
              helperText={
                messageError ? 'Please enter a message.' : ''
              }
              disabled={isSending}
              fullWidth
              sx={{
                '& .MuiInputBase-input': {
                  color: '#ffffff',
                },
                '& .MuiInputLabel-root': {
                  color: '#ffffff',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#ffffff',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#ffffff',
                  opacity: 0.6,
                },
              }}
            />

            {/* Success message */}
            {status === 'success' && (
              <Alert severity="success">
                Thanks for reaching out! Your message has been sent
                successfully.
              </Alert>
            )}

            {/* Error message */}
            {status === 'error' && (
              <Alert severity="error">
                Something went wrong while sending your message.
                Please try again or contact me directly.
              </Alert>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </div>
      </div>
    </section>
  );
}

export default Contact;