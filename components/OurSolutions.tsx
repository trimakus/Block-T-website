"use client";
import styles from "@/src/assets/styles/OurSolutions.module.scss";
import { useTranslations } from "next-intl";

export default function OurSolutions() {
  const t = useTranslations();
  const solutions = [
    {
      img: "/imgs/preclinical.png",
      title:t("Preclinical"),
      desc: t('Empowering_preclinical_research'),

    },
    {
      img: "/imgs/clinical.png",
      title: t("Clinical"),
      desc:t('Revolutionizing_clinical_trials_through_transparency'),

    },
  ];

  return (
    <section className={styles.solutions}>
      <div
        className="container text-center"
        style={{ position: "relative", zIndex: "2" }}
      >
        <h2>{t("Our_Solutions")}</h2>
        <p className={styles.subtitle}>{t("BLOCK_T_offers_integrated")}</p>

        <div className={styles.cards}>
          {solutions.map((sol, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${sol.img})`,
              }}
              className={styles.cardWarpper}
            >
              <div className={`${styles.card}`}>
               
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
