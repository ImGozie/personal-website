import React from "react";

const Hero = () => {
  return (
    <section className="flex h-screen boxWidth sm:px-16 px-6 py-5 items-center justify-center">
      <h3 className="paragraph">
        Experienced
        <span className="text-[#0B60B0]"> full-stack <span className="!font-['Inter']">developer </span></span>
        with a focus on
        <span className="span-decoration"> front-end <span className="!font-['Inter'] text-[#0B60B0] after:content-['.'] after:text-[#F0EDCF]">development</span> </span>
      </h3>
    </section>
  );
};

export default Hero;
