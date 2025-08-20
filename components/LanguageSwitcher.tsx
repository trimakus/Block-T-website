"use client";

import ArrowDownIcon from "@/public/icons/arrowDownIcon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import enFlag from "@/public/icons/flags/en.svg";
import styles from '@/src/assets/styles/LanguageSwitcher.module.scss'
import { switcherLanguagesInterface } from "@/types/types";

const languages:[switcherLanguagesInterface] = [
  { code: "en", name: "English", flag: enFlag },
//   { code: "fr", name: "Français", flag: frFlag },
];

export default function LanguageSwitcher() {
  const [selected, setSelected] = useState<switcherLanguagesInterface>(languages[0]);

  return (
    <Menu as="div" className={styles.container}>
    <MenuButton className={styles.trigger}>
      <Image src={selected.flag} alt={selected.name} width={20} height={20} />
      <ArrowDownIcon width={10} height={10} />
    </MenuButton>
  
    <MenuItems className={styles.menuItems}>
      {languages.map((lang) => (
        <MenuItem key={lang.code}>
          {({ active }) => (
            <button
              className={`${active ? styles.active : ""}`}
              onClick={() => setSelected(lang)}
            >
              <Image src={lang.flag} alt={lang.name} width={20} height={20} />
              {lang.name}
            </button>
          )}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
  
  );
}
