"use client";
import React, { useState } from "react";
import styles from "@/src/assets/styles/ChooseOurSolutions.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
function ChooseDeepT() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const t = useTranslations()
  const cards = [
    {
      blackIcon: "/icons/svgs/puzzle.svg",
      blancIcon: "/icons/svgs/puzzle.svg",
      title: t('Protocol_Reproducibility_Gaps'),
      desc: t("Deep-T_ensures_consistent_execution"),
    },
    {
      blackIcon: "/icons/svgs/setting.svg",
      blancIcon: "/icons/svgs/setting.svg",
      title: t("Data_Reliability"),
      desc: t("With_AI_and_blockchain"),
    },
    {
      blackIcon: "/icons/svgs/security.svg",
      blancIcon: "/icons/svgs/security.svg",
      title: t("Security"),
      desc: t("Deep_T_uses_blockchain_to_protect_data_from_tampering"),
    },
  ];
  return (
    <section
      className={`${styles.chooseOurSolutions} blue-white-blue-gradient`}
    >
      <div className="container text-center">
        <div className="flex flex-justify-center">
        <h1 className="text-light-blue-gradient w-fc">{t('Why_CHOOSE_DEEP_T')}</h1>
        </div>
        <p className={styles.subtitle}>
          {t('Deep_T_ensures_reliable')}
        </p>

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
  );
}

export default ChooseDeepT;
