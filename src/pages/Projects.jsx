import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import smartBrain from "../assets/projects/smart-brain.png"
import RoboFriends from "../assets/projects/RoboFriends.png"
import chuckChuckles from "../assets/projects/chuckles-with-chuck.png"

const Projects = () => {
  return (
    <Container fluid className="project-section" padding="50px">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent top <strong className="yellow">works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartBrain}
              isBlog={false}
              title="smart-brain"
              description="Smart-Brain is a face recognition web application that leverages the Clarifai API to detect faces in images. Built with a Node.js and Express backend, it uses PostgreSQL for user authentication and profile management. The frontend is developed with React, providing a sleek and responsive user interface. Users can register, sign in, and submit image URLs to detect faces, making Smart-Brain an engaging and practical application of AI technology."
              ghLink="https://github.com/cam1608/smart-brain"
              demoLink="https://smart-brain-production-26d0.up.railway.app/"
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoboFriends}
              isBlog={false}
              title="RoboFriends"
              description="RoboFriends is a React-based application that displays a list of robot friends fetched from an external API. Users can search for specific robots using the search bar, which dynamically filters the displayed robots as they type. The app showcases the power of React for creating interactive user interfaces with real-time search capabilities. It is styled using Tachyons for a clean and responsive design, providing a delightful user experience."
              ghLink="https://github.com/cam1608/robofriends"
              demoLink="https://cam1608.github.io/robofriends/"
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chuckChuckles}
              isBlog={false}
              title="Chuckles with Chuck"
              description="Chuckles with Chuck is a fun and simple web application that fetches and displays random jokes from the Chuck Norris Jokes API. Built with React, this app provides users with endless laughter by fetching a new joke every time they click a button. The app showcases the ease of integrating third-party APIs with React to create engaging and interactive user experiences. It's a perfect demonstration of how a straightforward idea can be turned into an enjoyable and user-friendly application."
              ghLink="https://github.com/cam1608/chuckles-with-chuck"
              demoLink="https://cam1608.github.io/chuckles-with-chuck/"
            />
            </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
