import styles from "@/src/assets/styles/Hero.module.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ArrowRightIcon from "@/public/icons/arrowRightIcon";

export default function Hero() {
  const t = useTranslations();
  return (<div className={styles.backgroundImg}>
    <section className={`${styles.hero} container`}>
      <div className={`${styles.content} ${styles.card}`}>
        <h1>
          {t("Accelerate")}{" "}
          {t("Scientific")}{" "}
          {t("Discoveries")}
        </h1>
        <p>{t("Solidify_trust_and_integrity")}</p>
        <div className={styles.buttons}>
        <Link href={'/request-demo'} className={"btn btn-dark-blue-gradient text-decoration-none"}>
          {t("RequestADemo")} <ArrowRightIcon width={10} height={11} />
          </Link>
 <Link href={'/contact-us'} className={"btn btn-orange-gradient text-decoration-none"}>
            {t("Contact_Us")}
          </Link>        </div>
      </div>

      {/* <div className={styles.illustration}>
        <Image src="/imgs/banner.png" alt="banner" width={700} height={600} />
      </div> */}
    </section>
    </div>
  );
}
