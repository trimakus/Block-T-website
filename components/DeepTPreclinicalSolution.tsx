"use client";
import React from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";
import { useTranslations } from "next-intl";

function DeepTPreclinicalSolution() {
  const t = useTranslations()
  const benefitsData = [
    {
      img: "/imgs/humain-chip.png",
      title: t("DEEP-NOTE"),
      benefits: [
       t('Documents_research_in_one_place'),
       t('Capture_and_import_data_from_complex')
      ],
    },
    {
      img: "/imgs/computer-chip.png",
      title: t("DEEP-TRACE"),
      benefits: [
        t('Data_integrity_enhanced_by_verifying')
      ],
    },
    {
        img: "/imgs/computer-chip.png",
        title: t("DEEP-WORKFLOW"),
        benefits: [
          t('Design_your_protocols'),
          t('Frame_your_data_flow'),
          t('Connect_your_instrumentation')
        ],
      },
      {
        img: "/imgs/computer-chip.png",
        title: t("DEEP-TRACE"),
        benefits: [
          t('Manage_product_inventory'),
          t('Oversight_of_a_labs_entire_inventory')
        ],
      },
  ];
  return (
    <div className="container text-center">
        <h1 className="text-gold-dark-gradient">{t('Preclinical_Solution')}<br /> {t('DEEP_T')}</h1>
      <h1 className="text-dark-blue-gradient">
      {t('Built_for_the_Future')} <br /> {t('of_Preclinical_Research')}
      </h1>
      <p> <strong>{t('Deep-T')}</strong>  {t('is_designed_to_transform_preclinical_research')}</p>
      <div className={styles.deepTPreclilnicalSolution + ' p-1'}>
        {benefitsData.map((item, index) => (
          <div className={styles.benefitCard} key={index}>
           
            <h3>{item.title}</h3>
            <hr className='horizontal-orange-line'/>
            <div className="p-1">

        
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

export default DeepTPreclinicalSolution;
