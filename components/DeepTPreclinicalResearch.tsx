"use client";
import React from "react";
import Image from "next/image";

function DeepTPreclinicalResearch() {
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
          <h2>The Reproducibility Crisis in Preclinical Research</h2>
          <h1 className="text-dark-blue-gradient big-title">
            Preclinical Research
          </h1>
          <p>
            The lack of reproducibility in preclinical studies has become a
            significant barrier to scientific progress. Is. Inconsistent
            methodologies, inadequate data tracking, and fragmented processes
            have resulted in unreliable results that slow down innovation and
            waste valuable resource.
          </p>
          <p>
            <strong>Deep-T</strong> addresses these issues by introducing robust
            systems that ensure research outcomes can be replicated with
            confidence, paving the way for clinical success.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DeepTPreclinicalResearch;
