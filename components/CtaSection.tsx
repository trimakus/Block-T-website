'use client'
import React from "react";
import styles from "@/src/assets/styles/CtaSection.module.scss";
import ArrowRightIcon from "@/public/icons/arrowRightIcon";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CtaSection = () => {
  const t = useTranslations();
  return (
    <section className={styles.cta}>
      <div className={`container ${styles["cta-card"]}`}>
        <h2>{t("Ready_to_Transform_Your_Research_Process")}</h2>
        <p>{t("Join_the_growing_community")}</p>
        <div className={styles.ctaButtons}>
          
          <Link href={'/request-demo'} className={"btn btn-dark-blue-gradient text-decoration-none"}>
          {t("Request_A_Demo")} <ArrowRightIcon width={10} height={11} />
          </Link>
          <Link href={'/contact-us'} className={"btn btn-orange-gradient text-decoration-none"}>
            {t("Contact_Us")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
