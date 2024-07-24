import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Creative ", "FrontEnd", "Developer"];

  return (
    <div style={{ display: "inline-block" }}>
      <FlipWords words={words} />
    </div>
  );
}
