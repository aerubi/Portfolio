import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock06 from '../assets/images/mock06.png';
import mock02 from '../assets/images/mock02.png';
import mock04 from '../assets/images/mock04.png';
import mock09 from '../assets/images/mock09.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/aerubi/Mobile-Inventory-Management-Application" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/aerubi/Mobile-Inventory-Management-Application" target="_blank" rel="noreferrer"><h2>Mobile Inventory Management Application </h2></a>
                <p>Enhanced an Android inventory application for a Computer Science capstone, adding authentication, inventory search and sorting, input validation, and database functionality.</p>
            </div>
            <div className="project">
                <a href="https://github.com/aerubi/cs465-fullstack" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/aerubi/cs465-fullstack" target="_blank" rel="noreferrer"><h2>Full-Stack Web Application — Travlr</h2></a>
                <p>Built a full-stack web application with customer-facing and administrative functionality, including a single-page administrative interface backed by REST APIs and MongoDB.</p>
            </div>
            <div className="project">
                <a href="https://github.com/aerubi/CS370-TreasureAIAgent" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/aerubi/CS370-TreasureAIAgent" target="_blank" rel="noreferrer"><h2>Pirate Intelligent Agent</h2></a>
                <p>Developed a reinforcement-learning agent that learned to navigate a simulated environment and locate treasure using a neural network to estimate Q-values.</p>
            </div>
            <div className="project">
                <a href="https://github.com/aerubi/CS-340-Client-Server_Development" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/aerubi/CS-340-Client-Server_Development" target="_blank" rel="noreferrer"><h2>Client-Server Database Application</h2></a>
                <p>Built a Python client application for managing and querying MongoDB records with CRUD operations, filtering, validation, and structured database queries.</p>
            </div>
            <div className="project">
                <a href="https://github.com/aerubi" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/aerubi" target="_blank" rel="noreferrer"><h2>Aero Pop</h2></a>
                <p>Aero Pop, is a match-3 puzzle game that I am developing in Godot, implementing the core gameplay systems, board mechanics, scoring, combos, level progression, UI animations, and dynamic difficulty.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;