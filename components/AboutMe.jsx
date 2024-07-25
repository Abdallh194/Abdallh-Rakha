import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { motion } from "framer-motion";

const AboutMe = () => {
  const Cards = [
    {
      Icon: <PsychologyIcon className="icon" />,
      head: "BrainStorming",
      info: "When I design your page, I come up with wonderful design ideas that may be better than the design chosen by you.",
      className: "Info-Card",
    },
    {
      Icon: <EnergySavingsLeafIcon className="icon" />,
      head: "Personal Energy",
      info: "Where I design the front end of the site with all my effort to bring out the best always I give all my energy to work",
      className: "Info-Card custom-Magin",
    },
    {
      Icon: <ChecklistIcon className="icon" />,
      head: "Design Test",
      info: "We plan the front end and install the content to meet the customers' wishes, as this helps to remove the complexity of the design",
      className: "Info-Card",
    },
    {
      Icon: <HourglassBottomIcon className="icon" />,
      head: "Delivered on The Date",
      info: "The product is delivered on the date agreed upon between us and the customer where we also communicate together",
      className: "Info-Card custom-Magin",
    },
  ];
  return (
    <div className="AboutMe">
      <Container>
        <Row>
          <Col md={12} lg={6} className="About-Card">
            <div className="top">ABOUT ME</div>
            <div className="head">
              Hello There Iam <span>Creative</span> Frontend Developer
            </div>
          </Col>
          <Col
            md={12}
            lg={6}
            className="About-Card loremCard d-flex align-items-center"
            style={{ fontSize: "18px", color: "#d8d8d8" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            consequuntur possimus, minima eum minus
          </Col>
          {Cards.map((e) => {
            return (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                key={e.head}
                className={e.className}
              >
                {e.Icon}
                <div className="header">{e.head}</div>
                <div className="info">{e.info}</div>
              </motion.div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
