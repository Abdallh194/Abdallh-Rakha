"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Col, Container, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
export function ThreeDCardDemo() {
  const images = [
    {
      url: "https://asr-travel.vercel.app/",
      desc: "You can book a flight ticket, and many other things, and you can also book hotels.",
      src: "/work1.jpg",
      alt: "Travel Website",
      width: 650,
      height: 200,
      md: 12,
      lg: 4,
      className: "Image-Card",
    },
    {
      url: "https://astteethy.netlify.app",
      desc: "You can book an appointment with the dentist you specify at the time you specify",
      src: "/work2.jpg",
      alt: "Thetthy Clink Website",
      width: 600,
      height: 200,
      md: 12,
      lg: 4,
      className: "Image-Card",
    },
    {
      url: "https://asr-gym.vercel.app/",
      desc: "You can book a gym, and many other things, and you can also book a private trainer.",
      src: "/work3.jpg",
      alt: "Gym Website",
      width: 600,
      height: 200,
      md: 12,
      lg: 4,
      className: "Image-Card",
    },
    {
      url: "https://asr-book.vercel.app/",
      desc: "You can reserve the book you want or search for it, and many other things,",
      src: "/work4.jpg",
      alt: "Book Website",
      width: 600,
      height: 200,
      md: 12,
      lg: 4,
      className: "Image-Card mt-4",
    },
    {
      url: "https://asrmedia.netlify.app/",
      desc: "You can browse recent videos, search for the video you want, or search for your favorite channel",
      src: "/work5.jpg",
      alt: "  Media Website",
      width: 600,
      height: 200,
      md: 12,
      lg: 4,
      className: "Image-Card mt-4",
    },
    {
      url: "https://happy-ramadan.vercel.app/",
      desc: "You can see the times for breaking the fast and fasting in Ramadan, and Islamic tests",
      src: "/work6.jpg",
      alt: "ramadan Website",
      width: 600,
      height: 200,
      md: 12,
      lg: 4,
      className: "Image-Card mt-4",
    },
    // Add more image data as needed
  ];
  return (
    <div className="RecentWork" id="RecentWork">
      <Container>
        <div className="top">RECENT WORK</div>
        <div className="head">
          Take A Look At My{" "}
          <div>
            Recent <span>REACTJS , NEXTJS Project</span>
          </div>
        </div>
        <Row>
          {images.map((e) => {
            return (
              <Col md={e.md} lg={e.lg} key={e.alt} className="WorkCard">
                <CardContainer className="inter-var">
                  <CardBody className=" custom_Card_Width bg-gray-50 relative   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-current  border-black/[0.1] w-3/6 sm:w-[30rem] h-auto rounded-xl p-6   ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {e.alt}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {e.desc}
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={e.src}
                        height="1100"
                        width="1200"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl img-fluid"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-decoration-none"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        as="a"
                        href={e.url}
                        translateZ={20}
                        translateX={40}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Live Demo{" "}
                        <FaEye
                          style={{ display: "inline-block", marginLeft: "5px" }}
                        />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
