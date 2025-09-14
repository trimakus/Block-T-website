"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function EmpoweringResearch() {
  const t = useTranslations()
  return (
    <section className={`blue-white-gradient`}>
        <div className={`text-img-display container`}>
      <Image
        src="/imgs/vaccin.png"
        alt="empowering-research"
        width={600}
        height={450}
      />
      <div>
        <h3>{t('Transforming_Research_with_Innovative_Solutions')}</h3>
        <h1> <span className="text-dark-blue-gradient">{t('Empowering')}</span> {t('Research')}</h1>
        <p>
          {t('In_the_ever_evolving_field_of_biomedical_research')}
        </p>
        <p>
          {t('we_offer_state_of_the_art_platforms')}
        </p>
        <p>
          {t('Whether_youre_in_preclinical')}
        </p>
      </div>
      </div>
    </section>
  );
}

export default EmpoweringResearch;
