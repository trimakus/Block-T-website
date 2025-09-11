"use client";
import React from "react";
import Image from "next/image";

function EmpoweringResearch() {
  return (
    <section className={`blue-white-gradient `}>
        <div className={`text-img-display container`}>

     
      <Image
        src="/imgs/vaccin.png"
        alt="empowering-research"
        width={500}
        height={300}
      />
      <div>
        <h3>Transforming Research with Innovative Solutions</h3>
        <h1> <span className="text-dark-blue-gradient">Empowering</span> Research</h1>
        <p>
          In the ever-evolving field of biomedical research, having reliable,
          scalable, and secure solutions is essential to driving progress.
        </p>
        <p>
          we offer state-of-the-art platforms that integrate AI and blockchain
          technology to enhance data integrity, streamline workflows, and
          promote reproducibility.
        </p>
        <p>
          Whether you're in preclinical or clinical research, our solutions are
          tailored to meet your specific needs and ensure trustworthy, impactful
          results.
        </p>
      </div>
      </div>
    </section>
  );
}

export default EmpoweringResearch;
