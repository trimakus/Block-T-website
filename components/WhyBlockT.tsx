"use client";
import Image from "next/image";
import styles from "@/src/assets/styles/WhyBlockT.module.scss";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function WhyBlockT() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const t = useTranslations();
  const cards = [
    {
      blackIcon: "/icons/svgs/dna-black.svg",
      blancIcon: "/icons/svgs/dna-blanc.svg",
      title: t("Traceability_Gaps"),
      desc: t("Gain_Full_Visibility_Into"),
      color: "blue",
    },
    {
      blackIcon: "/icons/svgs/shield-black.svg",
      blancIcon: "/icons/svgs/shield-blanc.svg",
      title: t("Reliability"),
      desc: t("Trust_In_Our_Secure"),
      color: "white",
    },
    {
      blackIcon: "/icons/svgs/collab-setting-black.svg",
      blancIcon: "/icons/svgs/collab-setting-blanc.svg",
      title: t("Transparency_Deficit"),
      desc: t("Promote_Trust_And_Collaboration"),
      color: "white",
    },
  ];

  return (
    <section className={styles.why}>
      <div className="container text-center">
        <h2>
          {t("Why_Block_T")}
          <br />
          <span className={"text-dark-blue-gradient"}>
            {t("Rebuilding_Trust")}{" "}
          </span>
          {t("in_Modern_Research")}
        </h2>
        <p className={styles.subtitle}>{t("Modern_scientific_research")}</p>

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
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
