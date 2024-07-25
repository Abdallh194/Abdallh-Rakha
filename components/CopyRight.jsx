import React from "react";
import { Container } from "react-bootstrap";

const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <div className="CopyRight">
      <Container className="">
        <div className="">
          <b>Front End Developer</b> {year} ©, all rights reserved .
        </div>
        <div className="">
          It was designed and implemented by <b>Abdullah Sabry</b>
        </div>
      </Container>
    </div>
  );
};

export default CopyRight;
