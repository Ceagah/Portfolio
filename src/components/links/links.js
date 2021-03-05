import React from "react";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { Row, Col, Card } from "react-materialize";

import UserProfile from "../user_profile/userProfile";

const Links = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5>Da uma olhada nos meus links ai, vai que você acha algo legal ?</h5>
      <Card>
        <Row>
          <a
            href="https://linkedin.com/in/carlosceagah"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <strong>
              <FiLinkedin
                style={{ marginRight: "1rem", textDecoration: "none" }}
              />
              Meu Linkedin
            </strong>
          </a>
        </Row>
        <Row>
          <a
            href="https://github.com/Ceagah/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <strong>
              <FiGithub
                style={{ marginRight: "1rem", textDecoration: "none" }}
              />
              GitHub
            </strong>
          </a>
        </Row>
        <Row>
          <a
            href="https://www.instagram.com/ceagah.dev/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <strong>
              <FiInstagram
                style={{ marginRight: "1rem", textDecoration: "none" }}
              />
              Instagram
            </strong>
          </a>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default Links;
