"use client";

import Image from "next/image";
import styles from "@/src/assets/styles/Navbar.module.scss";
import ArrowRightIcon from "@/public/icons/arrowRightIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { useTranslations } from "next-intl";
import SolutionMenu from "./SolutionMenu";
import ServicesMenu from "./ServicesMenu";
import AboutMenu from "./AboutMenu";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <nav className={styles.navbar}>
      <div className="container flex-between">
        {/* Logo */}
        <Link href='/' className={styles.logo}>
          <Image
            src={"/icons/svgs/block-t-logo.svg"}
            alt="logo-block-t"
            width={160}
            height={55}
          />
        </Link>

        {/* Desktop menu */}
        <ul className={`${styles.menu} ${styles.desktopOnly}`}>
          <li><SolutionMenu/></li>
          <li><ServicesMenu/></li>
          <li><AboutMenu/> </li>
        </ul>

        {/* Desktop actions */}
        <div
          className={`${styles["navbar-container-btn-switcher"]} flex-align-center ${styles.desktopOnly}`}
        >
          <div className={styles.actions}>
            
            <Link href={'/request-demo'} className={"btn btn-orange-gradient text-decoration-none"}>
          {t("Request_A_Demo")} <ArrowRightIcon width={10} height={11} />
          </Link>
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
            <li ><SolutionMenu/></li>
            <li ><ServicesMenu/></li>
            <li ><AboutMenu/></li>
          </ul>

          <div className="flex flex-justify-end gap-3">
          <Link href={'/request-demo'} className={"btn btn-orange-gradient text-decoration-none"}>
          {t("Request_A_Demo")} <ArrowRightIcon width={10} height={11} />
          </Link>

            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
