import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <Image src="/hero.png" width={600} height={600} />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">
            Unleash the Power of Custom PC Builds!
          </h1>
          <p className="py-6">
            SparkTech: Where Gaming Dreams Come Alive! Unleash unrivaled
            performance with custom PC builds designed for you. Join the
            revolution now!
          </p>
          <button className="btn ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
