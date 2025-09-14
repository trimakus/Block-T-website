"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function DeepTPreclinicalResearch() {
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
          <h2>{t('The_Reproducibility_Crisis_in_Preclinical_Research')}</h2>
          <h1 className="text-dark-blue-gradient big-title">
            {t('Preclinical_Research')}
          </h1>
          <p>
            {t('The_lack_of_reproducibility_in_preclinical')}
          </p>
          <p>
            <strong>{t('Deep-T')}</strong> {t('addresses_these_issues_by_introducing')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DeepTPreclinicalResearch;
