"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function FutureVision() {
  const t = useTranslations()
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
          <h2>{t('Shaping_the_Future_of_Biomedical_Research')}</h2>
          <h1 className="text-dark-blue-gradient big-title">
            {t('Our_Vision_for_the_Future')}
          </h1>
          <p>
           {t('At_Block_T_our_vision_extends_beyond')}
          </p>
          <p>
            {t('We_envision_a_world_where_every_step')}
          </p>
          <p>
            {t('Our_solutions_will_empower_researchers')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FutureVision;
