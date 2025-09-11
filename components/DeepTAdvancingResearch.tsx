"use client";
import React from "react";
import Image from "next/image";

function DeepTAdvancingResearch() {
  return (
    <section className={"blue-white-gradient"}>
      <div className={`text-img-display container`}>
        <div>
          <h2>Simplifying Research, Amplifying Results</h2>
          <h1 className="text-dark-blue-gradient big-title">
            Advancing Research
          </h1>
          <p>
            We offer tailored services designed to empower your research
            journey. Whether you are conducting preclinical studies or managing
            complex clinical trials, our services ensure your work is reliable,
            efficient, and impactful.
          </p>
          <p>
            By combining cutting-edge technology with expert guidance, we help
            researchers overcome challenges, optimize processes, and achieve
            breakthrough results.
          </p>
        </div>

        <Image
          src="/imgs/vaccin.png"
          alt="empowering-research"
          width={750}
          height={500}
        />
      </div>
    </section>
  );
}

export default DeepTAdvancingResearch;
