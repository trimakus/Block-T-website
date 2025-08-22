"use client";

import ArrowDownIcon from "@/public/icons/arrowDownIcon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import enFlag from "@/public/icons/flags/en.svg";
import styles from "@/src/assets/styles/LanguageSwitcher.module.scss";
import { switcherLanguagesInterface } from "@/types/types";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages: switcherLanguagesInterface[] = [
  { code: "en", name: "English", flag: enFlag },
  { code: "fr", name: "Français", flag: enFlag },
];

export default function LanguageSwitcher() {
  const local = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== local) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  const selected =
    languages.find((lang) => lang.code === local) ?? languages[0];
  return (
    <Menu as="div" className={styles.container}>
      <MenuButton className={styles.trigger}>
        <Image src={selected.flag} alt={selected.name} width={20} height={20} />
        <ArrowDownIcon width={10} height={10} />
      </MenuButton>

      <MenuItems className={"menuItems"}>
        {languages.map((lang) => (
          <MenuItem key={lang.code}>
            <button
              className={`${selected.code === lang.code ? 'active' : ""}`}
              onClick={() => switchLocale(lang.code)}
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={20} />
              {lang.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
