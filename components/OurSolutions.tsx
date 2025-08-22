import Image from "next/image";
import styles from "@/src/assets/styles/OurSolutions.module.scss";
import { useTranslations } from "next-intl";

export default function OurSolutions() {
  const t = useTranslations();
  const solutions = [
    {
      icon: "/icons/svgs/microscope-blanc.svg",
      title: t("DEEP_T"),
      desc: t("Comprehensive_platform_for_preclinical"),
      color: "blue",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      icon: "/icons/svgs/patient-black.svg",
      title: t("CLIN_T"),
      desc: t("End_to_end_platform"),
      color: "white",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  ];

  return (
    <section className={styles.solutions}>
      <div />

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
              className={`${styles.card} ${
                sol.color === "blue" ? styles.blue : ""
              }`}
            >
              <div>
                <Image
                  src={sol.icon}
                  alt={`icon-${i}`}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{sol.title}</h3>
              <p>{sol.desc}</p>
              <ul>
                {sol.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>
              <button className="btn btn-secondary">{t("Learn_More")}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
