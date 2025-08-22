import React from "react";
import styles from "@/src/assets/styles/CtaSection.module.scss";
import ArrowRightIcon from "@/public/icons/arrowRightIcon";
import { useTranslations } from "next-intl";

const CtaSection = () => {
  const t = useTranslations();
  return (
    <section className={styles.cta}>
      <div className={`container ${styles["cta-card"]}`}>
        <h2>{t("Ready_to_Transform_Your_Research_Process")}</h2>
        <p>{t("Join_the_growing_community")}</p>
        <div className={styles.ctaButtons}>
          <button
            className={
              "btn btn-dark-blue-gradient flex flex-align-center gap-2"
            }
          >
            {t("RequestADemo")} <ArrowRightIcon width={10} height={11} />
          </button>
          <button className={"btn btn-orange-gradient"}>
            {t("Contact_Us")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
