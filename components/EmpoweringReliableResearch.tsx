"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function EmpoweringReliableResearch() {
  const t = useTranslations()
  return (
    <section className={'white-blue-gradient'}>
        <div className={`text-img-display container`}>
      <div>
        <h1 className="text-dark-blue-gradient big-title">{t('Empowering_Reliable_Research')}</h1>
        <p>
        {t('At_Block-T_we_are_at_the_forefront')}
        </p>
        <p>
        {t('Our_mission_is_to_drive_trust')}</p>
       <p>{t('We_are_passionate_about_improving')}</p>
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