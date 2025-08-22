import Image from "next/image";
import styles from "@/src/assets/styles/Hero.module.scss";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.content}>
        <h1>
          {t("Accelerate")}{" "}
          <span className="text-dark-blue-gradient">{t("Scientific")}</span>{" "}
          {t("Discoveries")}
        </h1>
        <p>{t("Solidify_trust_and_integrity")}</p>
        <div className={styles.buttons}>
          <button className="btn btn-dark-blue-gradient">
            {t("RequestADemo")}
          </button>
          <button className="btn btn-orange-gradient">{t("Contact_Us")}</button>
        </div>
      </div>

      <div className={styles.illustration}>
        <Image src="/imgs/banner.png" alt="banner" width={700} height={600} />
      </div>
    </section>
  );
}
