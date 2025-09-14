"use client";
import Image from "next/image";
import styles from "@/src/assets/styles/TrustedBy.module.scss";
import { useTranslations } from "next-intl";

const logos = [
  "/imgs/partner-bcrf.png",
  "/imgs/partner-hospital.png",
  "/imgs/partner-labcorp.png",
  "/imgs/partner-royal.png",
  "/imgs/partner-york.png",
];

export default function TrustedBy() {
  const t = useTranslations();
  return (
    <section className={styles.trusted}>
      <div className="container text-center">
        <h2 className="text-dark-blue-gradient">{t("Trusted_by")}</h2>
        <p>{t("partner_transforming_biomedical_research")}</p>

        <div className={styles.logos}>
          {logos.map((logo, i) => (
            <div key={i} className={styles.logoCard}>
              <Image src={logo} alt={`partner-${i}`} width={100} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
