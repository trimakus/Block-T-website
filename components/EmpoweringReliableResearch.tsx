"use client";
import React from "react";
import Image from "next/image";

function EmpoweringReliableResearch() {
  return (
    <section className={'white-blue-gradient'}>
        <div className={`text-img-display container`}>
      <div>
        <h1 className="text-dark-blue-gradient big-title">Empowering Reliable Research</h1>
        <p>
        At Block-T, we are at the forefront of revolutionizing biomedical research by integrating cutting-edge blockchain and AI technologies.
        </p>
        <p>
        Our mission is to drive trust, transparency, and efficiency across the research lifecycle, helping to solve the critical challenges faced by scientists, researchers, and institutions globally.        </p>
       <p>We are passionate about improving data integrity, ensuring reproducibility, and enhancing the scalability of research. Block-T is committed to empowering the next generation of scientific discoveries with secure, innovative solutions that address the unique needs of preclinical and clinical trials.</p>
      </div>

      <Image
        src="/imgs/deept-banner.png"
        alt="empowering-research"
        width={750}
        height={500}
      />
      </div>
    </section>
  );
}

export default EmpoweringReliableResearch;