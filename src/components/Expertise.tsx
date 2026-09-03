import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faFlask } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Java",
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
    "Flask",
    "MongoDB",
    "SQL",
    "MySQL",
    "REST APIs",
    "Git",
    "GitHub"
];

const labelsSecond = [
    "MySQL",
    "MongoDB",
    "SQL",
    "PyMongo",
    "Python",
    "Flask",
    "CRUD",
    "Database Design",
    "Client-Server Architecture",
    "Data Validation"
];

const labelsThird = [
    "OpenAI",
    "Python",
    "TensorFlow",
    "Keras",
    "Q-Learning",
    "Reinforcement Learning",
    "Neural Networks",
    "Pandas",
    "NumPy"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built full-stack applications through my Computer Science coursework and personal projects, working across frontend interfaces, backend logic, databases, and APIs. I’m comfortable working through the software development lifecycle, from planning and development to testing and troubleshooting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFlask} size="3x"/>
                    <h3>Database & Backend Development</h3>
                    <p>I have experience designing and working with databases, building CRUD functionality, connecting applications to database systems, and developing backend components that manage and process data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>I have hands-on experience implementing AI and machine learning concepts through academic projects, including reinforcement learning and neural-network-based agents. I’ve worked with models that learn from environments and make decisions based on rewards and experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;