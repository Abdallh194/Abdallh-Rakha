"use client";
import React from "react";
import HomePage from "./HomePage";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ClientSays from "./ClientSays";
import { GridBackgroundDemo } from "./GridBackgroundDemo";

const Index = () => {
  return (
    <>
      <HomePage />
      <ThreeDCardDemo />
      <AboutMe />
      <Skills />
      <ClientSays />
      <GridBackgroundDemo />
    </>
  );
};

export default Index;
