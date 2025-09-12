"use client";

import ArrowDownIcon from "@/public/icons/arrowDownIcon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/src/assets/styles/LanguageSwitcher.module.scss";
import Image from "next/image";

const pages = [
  {
    name: "Contact Us",
    path: "/contact-us",
    blackIcon: "/icons/svgs/contact-us-black.svg",
    whiteIcon: "/icons/svgs/contact-us-blanc.svg",
  },
  {
    name: "Leadership Team",
    path: "/leadership",
    blackIcon: "/icons/svgs/leadership-black.svg",
    whiteIcon: "/icons/svgs/leadership-blanc.svg",
  },
];

export default function AboutMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const selected = pages.find((page) => page.path === pathname);
    console.log('first',selected,pathname)
  return (
    <Menu as="div" className={styles.container}>
      {/* Trigger */}
      <MenuButton className={styles.trigger} style={{ fontSize: "large" }}>
        About <ArrowDownIcon width={10} height={10} />
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
                alt={selected?.name??'icon'}
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
