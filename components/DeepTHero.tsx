"use client";
import React from "react";
import Image from "next/image";

function DeepTHero() {
  return (
    <section className={'white-blue-gradient'}>
        <div className={`text-img-display container`}>
      <div>
        <h1 className="text-dark-blue-gradient big-title">DEEP-T</h1>
        <p>
        <strong>Deep-T </strong>is designed to provide researchers with a reliable, secure, and scalable platform for preclinical studies.
        Leveraging the power of blockchain and AI, Deep-T ensures that every step of your research is traceable, reproducible, and aligned with the highest standards of scientific integrity.
        </p>
        <p>
        From study design to data validation, Deep-T streamlines your preclinical process, empowering you to make data-driven decisions with confidence.
        </p>
       
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

export default DeepTHero;
