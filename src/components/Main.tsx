import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQHLZruLd5iF2w/profile-displayphoto-scale_200_200/B4EaBlyQsoJwAc-/0/1788414070154?e=1790208000&v=beta&t=VnT3-Ev4aWuEhP8sQveoyHeuMHaX8-QNdbTAL0CXSvM" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/aerubi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aerokit/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Austin Berry</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/aerubi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aerokit/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;