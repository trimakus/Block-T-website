"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function DeepTAdvancingResearch() {
  const t = useTranslations()
  return (
    <section className={"blue-white-gradient"}>
      <div className={`text-img-display container`}>
        <div>
          <h2>{t('Simplifying_Research_Amplifying_Results')}</h2>
          <h1 className="text-dark-blue-gradient big-title">
            {t('Advancing_Research')}
          </h1>
          <p>
           {t('We_offer_tailored_services')}
          </p>
          <p>
            {t('By_combining_cutting_edge')}
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
