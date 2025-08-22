import LinkedinIcon from "@/public/icons/linkedinIcon";
import TwitterIcon from "@/public/icons/twitterIcon";
import styles from "@/src/assets/styles/Footer.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <Image
            src={"/icons/svgs/block-t-logo.svg"}
            alt="logo-block-t"
            width={160}
            height={55}
          />
          <p>{t("Accelerating_scientific_discoveries")}</p>
          <div className="flex flex-justify-center gap-3">
            <LinkedinIcon />
            <TwitterIcon />
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h4>{t("Solutions")}</h4>
            <ul>
              <li>
                <a href="#deep-t">{t("DEEP_T")}</a>
              </li>
              <li>
                <a href="#clin-t">{t("CLIN_T")}</a>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4>{t("Services")}</h4>
            <ul>
              <li>
                <a href="#pre-clinical">{t("Pre_Critical_Trials")}</a>
              </li>
              <li>
                <a href="#clinical">{t("Clinical_Trials")}</a>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4>{t("About")}</h4>
            <ul>
              <li>
                <a href="#contact">{t("Contact_Us")}</a>
              </li>
              <li>
                <a href="#privacy">{t("Privacy_Leadership")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>{t("Copyright")}</p>
        <div className={styles.footerLegal}>
          <a href="#support">{t("Support")}</a>
          <a href="#privacy">{t("Privacy_Policy")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
