"use client";
import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TotalAvatars from "./TotalAvatars";
import { motion } from "framer-motion";
import { FlipWordsDemo } from "./FlipWordsDemo";
import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="HomePage">
        <motion.div className="helloWprd">HELLO</motion.div>
        <Container>
          <Row>
            <Col md={12} lg={6} className="Info-Card">
              <div className="top-head">Hello There Iam</div>
              <div className="name">Abdallh Rakha</div>
              <div className="job">
                <span className="span">Creative</span>
                <span className="flip">
                  <FlipWordsDemo />
                </span>
              </div>
              <div className="exp">
                With 2+ Years Of Experience skilled Front-End Developer
              </div>
              <div className="buttons d-flex  ">
                <div className="cv">Show Resume</div>

                <Link
                  href="#RecentWork"
                  className="work relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="span1 absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="span2 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Show Work
                  </span>
                </Link>
              </div>
              <div className="Avatars">
                <TotalAvatars />
                <div className="recent">
                  <div className="">24+</div>
                  Recent Clients
                </div>
              </div>
              <div className="squar"></div>
            </Col>
            <Col md={12} lg={6} className="Image-Card">
              <Image
                src="/human.png"
                alt="personal-img"
                width={500}
                height={300}
                className="img-fluid"
              />
              <div className="socials">
                <a
                  href="https://twitter.com/AbdallhSabry9"
                  className="icon"
                  target="_blanck"
                >
                  <TwitterIcon />
                </a>
                <a href="#s" className="icon">
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100007172563893"
                  target="_blanck"
                  className="icon"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://wa.me/+201091415560"
                  className="icon"
                  target="_blanck"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="www.linkedin.com/in/abdallh-sabry-a654341a5"
                  className="icon"
                  target="_blanck"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/Abdallh194"
                  className="icon"
                  target="_blanck"
                >
                  <GitHubIcon />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
