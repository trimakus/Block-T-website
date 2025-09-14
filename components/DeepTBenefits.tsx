'use client'
import Image from "next/image";
import React from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";
import { useTranslations } from "next-intl";

function DeepTBenefits() {
  const t= useTranslations()
  const benefitsData = [
    {
      img: "/imgs/humain-chip.png",
      title: t('Your_pains'),
      benefits: [
        t("Disorganized_processes_and_untraceable"),
        t('Unreliable_outcomes_stem'),
        t("High_costs_arise_from_failed"),
      ],
    },
    {
      img: "/imgs/computer-chip.png",
      title: t('Our_solution'),
      benefits: [
        t('Streamlined workflows and blockchain'),
        t('AI_driven_standardization_ensures'),
      ],
    },
  ];
  return (
    <div className="container text-center">
      
      <h2>{t('Benefit')}</h2>
      <h1 className="text-dark-blue-gradient">
        {t('Unlock_the_Full_Potential_of_Your')} <br /> {t('Preclinical_Research')}
      </h1>
      <div className={styles.cardsBenefits + ' p-1'}>
        {benefitsData.map((item, index) => (
          <div className={`${styles.benefitCardMW} ${styles.benefitCard}`} key={index}>
            <Image src={item.img} alt={item.title} width={450} height={250} />
            <div className="p-1">
            <h3>{item.title}</h3>
            <ul className={'custom-list '}>
              {item.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default DeepTBenefits;
