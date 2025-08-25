"use client";

import Image from "next/image";
import styles from "@/src/assets/styles/Navbar.module.scss";
import ArrowRightIcon from "@/public/icons/arrowRightIcon";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ArrowDownIcon from "@/public/icons/arrowDownIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <nav className={styles.navbar}>
      <div className="container flex-between">
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src={"/icons/svgs/block-t-logo.svg"}
            alt="logo-block-t"
            width={160}
            height={55}
          />
        </div>

        {/* Desktop menu */}
        <ul className={`${styles.menu} ${styles.desktopOnly}`}>
          <Link href={"/"}>{t("Solutions")} <ArrowDownIcon width={10} height={10} /> </Link>
          <Link href={"/"}>{t("Services")} <ArrowDownIcon width={10} height={10} /> </Link>
          <Link href={"/"}>{t("About")} <ArrowDownIcon width={10} height={10} /> </Link>
        </ul>

        {/* Desktop actions */}
        <div
          className={`${styles["navbar-container-btn-switcher"]} flex-align-center ${styles.desktopOnly}`}
        >
          <div className={styles.actions}>
            <button className="btn btn-orange-gradient">
              {t("RequestADemo")} <ArrowRightIcon width={10} height={11} />
            </button>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger button */}
        <button
          className={`${styles.hamburger} ${styles.mobileOnly}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div className={styles.drawer}>
          <ul>
            <Link href={"/"}>{t("Solutions")}</Link>
            <Link href={"/"}>{t("Services")}</Link>
            <Link href={"/"}>{t("About")}</Link>
          </ul>

          <div className="flex flex-justify-end gap-3">
            <button className="btn btn-orange-gradient">
              {t("RequestADemo")} <ArrowRightIcon width={10} height={11} />
            </button>

            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
