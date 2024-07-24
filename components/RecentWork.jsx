import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RecentWork = () => {
  const images = [
    {
      url: "https://asr-travel.vercel.app/",
      src: "/work1.jpg",
      alt: "Travel Website",
      width: 650,
      height: 200,
      md: 12,
      lg: 6,
      className: "Image-Card",
    },
    {
      url: "https://astteethy.netlify.app",
      src: "/work2.jpg",
      alt: "Thetthy Clink Website",
      width: 600,
      height: 200,
      md: 12,
      lg: 3,
      className: "Image-Card",
    },
    {
      url: "https://asr-gym.vercel.app/",
      src: "/work3.jpg",
      alt: "Gym Website",
      width: 600,
      height: 200,
      md: 12,
      lg: 3,
      className: "Image-Card",
    },
    {
      url: "https://asr-book.vercel.app/",
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
          {images.map((el) => {
            return (
              <Col md={el.md} lg={el.lg} className={el.className} key={el.alt}>
                <a href={el.url} target="_blank">
                  <Image
                    src={el.src}
                    alt={el.alt}
                    width={el.width}
                    height={el.height}
                    className="img-fluid"
                  />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default RecentWork;
