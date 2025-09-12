"use client";
import React from "react";
import Image from "next/image";

function FutureVision() {
  return (
    <section className={"blue-white-gradient"}>
      <div className={`text-img-display container`}>
        <Image
          src="/imgs/microscope.png"
          alt="empowering-research"
          width={750}
          height={500}
        />
        <div>
          <h2>Shaping the Future of Biomedical Research</h2>
          <h1 className="text-dark-blue-gradient big-title">
            Our Vision for the Future
          </h1>
          <p>
            At Block-T, our vision extends beyond just solving today&apos;s
            challenges. We aim to create a future where biomedical research is
            faster, more reliable, and fully traceable. By advancing the use of
            AI and blockchain, we strive to set new standards in data security,
            protocol reproducibility, and research transparency.
          </p>
          <p>
            We envision a world where every step of the research process, from
            study design to final results, is fully auditable and reproducible,
            ensuring the integrity of data that shapes scientific progress. 
          </p>
          <p>
            Our solutions will empower researchers worldwide to work more
            efficiently, reduce resource waste, and accelerate breakthroughs for
            the betterment of global health.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FutureVision;
