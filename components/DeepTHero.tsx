"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function DeepTHero() {
  const t = useTranslations()
  return (
    <section className={'white-blue-gradient'}>
        <div className={`text-img-display container`}>
      <div>
        <h1 className="text-dark-blue-gradient big-title w-fc">{t('DEEP_T')}</h1>
        <p>
        <strong>{t('Deep-T')}</strong>{t('is_designed_to_provide_researchers')}
        </p>
        <p>
        {t('From_study_design_to_data_validation')}
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
