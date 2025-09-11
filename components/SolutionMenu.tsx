"use client";

import ArrowDownIcon from "@/public/icons/arrowDownIcon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/src/assets/styles/LanguageSwitcher.module.scss";
import Image from "next/image";

const pages = [
  {
    name: "CLINT-T",
    path: "/",
    blackIcon: "/icons/svgs/microscope-black.svg",
    whiteIcon: "/icons/svgs/microscope-blanc.svg",
  },
  {
    name: "DEEP-T",
    path: "/deep-t",
    blackIcon: "/icons/svgs/patient-black.svg",
    whiteIcon: "/icons/svgs/patient-blanc.svg",
  },
];

export default function SolutionMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const selected = pages.find((page) => page.path === pathname) ?? pages[0];

  return (
    <Menu as="div" className={styles.container}>
      {/* Trigger */}
      <MenuButton className={styles.trigger} style={{ fontSize: "large" }}>
        Solutions <ArrowDownIcon width={10} height={10} />
      </MenuButton>

      {/* Dropdown */}
      <MenuItems className={"menuItems"}>
        {pages.map((page) => (
          <MenuItem key={page.path}>
            <button
              className={`${selected.path === page.path ? "active" : ""} text-menu-item`}
              onClick={() => router.push(page.path)}
            >
              <Image
                src={`${selected.path === page.path ? page.whiteIcon :page.blackIcon }`}
                alt={selected.name}
                width={25}
                height={25}
              />

              {page.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
