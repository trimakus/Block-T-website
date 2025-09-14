"use client";

import ArrowDownIcon from "@/public/icons/arrowDownIcon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/src/assets/styles/LanguageSwitcher.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";



export default function SolutionMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations()

  const pages = [
    {
      name: t('CLIN_T'),
      path: "/",
      blackIcon: "/icons/svgs/microscope-black.svg",
      whiteIcon: "/icons/svgs/microscope-blanc.svg",
    },
    {
      name: t('DEEP_T'),
      path: "/deep-t",
      blackIcon: "/icons/svgs/patient-black.svg",
      whiteIcon: "/icons/svgs/patient-blanc.svg",
    },
  ];

  const selected = pages.find((page) => page.path === pathname);

  return (
    <Menu as="div" className={styles.container}>
      {/* Trigger */}
      <MenuButton className={styles.trigger} style={{ fontSize: "large" }}>
        {t('Solutions')} <ArrowDownIcon width={10} height={10} />
      </MenuButton>

      {/* Dropdown */}
      <MenuItems className={"menuItems"}>
        {pages.map((page) => (
          <MenuItem key={page.path}>
            <button
              className={`${selected?.path === page.path ? "active" : ""} text-menu-item`}
              onClick={() => router.push(page.path)}
            >
              <Image
                src={`${selected?.path === page.path ? page.whiteIcon :page.blackIcon }`}
                alt={selected?.name ??'icon'}
                width={30}
                height={30}
              />

              {page.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
