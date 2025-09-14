'use client';
import React, { useState } from 'react'
import styles from '@/src/assets/styles/ChooseOurSolutions.module.scss'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
function ChooseOurSolutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const t = useTranslations()
    const cards = [
        {
          blackIcon: "/icons/svgs/data-integrity-black.svg",
          blancIcon: "/icons/svgs/data-integrity-black.svg",
          title: t("Data_Integrity"),
          desc: t('Secure_tamper_proof_systems_for_uncompromised_data'),
        },
        {
          blackIcon: "/icons/svgs/reproducibility-black.svg",
          blancIcon: "/icons/svgs/reproducibility-black.svg",
          title: t("Reproducibility"),
          desc: t('Transparent_step_by_step_workflows_for_trustworthy_results'),
        },
        {
          blackIcon: "/icons/svgs/scalability-black.svg",
          blancIcon: "/icons/svgs/scalability-black.svg",
          title: t("Scalability"),
          desc: t("Our_flexible_future-ready"),
        },
      ];
  return (
    <section className={`${styles.chooseOurSolutions} blue-white-blue-gradient`}>
        <div className='container text-center'>
        <h2>{t('The_trusted_partner_transforming_biomedical_research')}</h2>
        <h1 className="text-light-blue-gradient">{t('Why_CHOOSE_OUR_SOLUTIONS')}</h1>
        <p className={styles.subtitle}>{t('Modern_scientific_research')}</p>
       

        <div>
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${
                hoveredCard === i ? styles.hovered : ""
              }`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.iconContainer}>
                <Image
                  src={hoveredCard === i ? card.blancIcon : card.blackIcon}
                  alt={`icon-${i}`}
                  height={80}
                  width={80}
                  className={styles.icon}
                />
              </div>
              <hr className='horizontal-orange-line'/>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        </div>
        </div>
    </section>
  )
}

export default ChooseOurSolutions