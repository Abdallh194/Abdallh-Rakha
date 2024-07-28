import Lottie from "lottie-react";
import ani from "../lib/ani.json";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithubSquare,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
const Skills = () => {
  const skills = [
    {
      Name: "HTML5 ",
      Degree: "100%",
      Icon: <FaHtml5 style={{ display: "inline" }} />,
      color: "#FF5733",
    },
    {
      Name: "CSS",
      Degree: "95%",
      Icon: <FaCss3Alt style={{ display: "inline" }} />,
      color: "#1572b6",
    },
    {
      Name: " JAVASCRIPT",
      Degree: "80%",
      Icon: <IoLogoJavascript style={{ display: "inline" }} />,
      color: "#f7df1e",
    },
    {
      Name: " SASS",
      Degree: "98%",
      Icon: <FaSass style={{ display: "inline" }} />,
      color: "#cf649a",
    },
    {
      Name: " REACTJS",
      Degree: "80%",
      Icon: <FaReact style={{ display: "inline" }} />,
      color: "#61dafb",
    },
    {
      Name: " NEXTJS",
      Degree: "80%",
      Icon: <RiNextjsFill style={{ display: "inline" }} />,
      color: "white",
    },
    {
      Name: " GITHUB",
      Degree: "90%",
      Icon: <FaGithubSquare style={{ display: "inline" }} />,
      color: "white",
    },
    {
      Name: " REDUX",
      Degree: "95%",
      Icon: <SiRedux style={{ display: "inline" }} />,
      color: "#764abc",
    },
    {
      Name: " BOOTSTRAP",
      Degree: "90%",
      Icon: <FaBootstrap style={{ display: "inline" }} />,
      color: "#8307fa",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="Skills"
      id="Skills"
    >
      <Container>
        <Row>
          <Col md={12} lg={6} className="Skills-Card">
            <div className="head">MY SKILLS</div>
            {skills.map((skills) => (
              <div className="skills-Details" key={skills.Name}>
                <div className="lable">
                  {skills.Name}
                  <span style={{ color: skills.color }}> {skills.Icon}</span>
                </div>
                <div className="progress-container">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skills.Degree }}
                    transition={{ duration: 1.3 }}
                    className="progress-width"
                    data-degree={skills.Degree}
                  ></motion.div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={12} lg={6} className="Image-Card">
            <div>
              <Lottie
                className="animationlaptop"
                animationData={ani}
                loop={true}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Skills;
