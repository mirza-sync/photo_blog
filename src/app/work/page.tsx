import React from "react";
import Hero from "../components/Hero";
import { Portfolio } from "../components/Portfolio";

export default function Work() {
  return (
    <div>
      <Hero
        heading={"My Work"}
        message={
          "These are some of the scenes I captured when travelling around the world"
        }
      />
      <Portfolio />
    </div>
  );
}
