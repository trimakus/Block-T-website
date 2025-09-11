"use client";

import ArrowDownIcon from "@/public/icons/arrowDownIcon";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/src/assets/styles/LanguageSwitcher.module.scss";

export const servicesMenu = [
    {
      category: "Pre-Clinical Trial",
      items: [
        {
          title: "Data Management and Integrity",
        //   path: "/pre-clinical/data-management",
          blackIcon: "/icons/svgs/data-management-black.svg",
          whiteIcon: "/icons/svgs/data-management-blanc.svg",
        },
        {
          title: "Resource & Inventory Management",
        //   path: "/pre-clinical/resource-management",
          blackIcon: "/icons/svgs/resource-inventory-management-black.svg",
          whiteIcon: "/icons/svgs/resource-inventory-management-blanc.svg",
        },
        {
          title: "Workflow Automation",
        //   path: "/pre-clinical/workflow-automation",
        blackIcon: "/icons/svgs/workflow-automation-black.svg",
        whiteIcon: "/icons/svgs/workflow-automation-blanc.svg",
        },
        {
          title: "Security & Compliance",
        //   path: "/pre-clinical/security-compliance",
          blackIcon: "/icons/svgs/security-compliance-black.svg",
          whiteIcon: "/icons/svgs/security-compliance-blanc.svg",
        },
        {
          title: "Collaboration & Oversight",
        //   path: "/pre-clinical/collaboration",
          blackIcon: "/icons/svgs/collaboration-oversight-black.svg",
          whiteIcon: "/icons/svgs/collaboration-oversight-blanc.svg",
        },
        {
          title: "Environmental Monitoring",
        //   path: "/pre-clinical/environment",
          blackIcon: "/icons/svgs/environmental-monitoring-black.svg",
          whiteIcon: "/icons/svgs/environmental-monitoring-blanc.svg",
        },
        {
          title: "Study Monitoring & Project Management",
        //   path: "/pre-clinical/study-monitoring",
          blackIcon: "/icons/svgs/study-monitoring-black.svg",
          whiteIcon: "/icons/svgs/study-monitoring-blanc.svg",
        },
        {
          title: "Knowledge Management",
        //   path: "/pre-clinical/knowledge",
          blackIcon: "/icons/svgs/knowledge-management-black.svg",
          whiteIcon: "/icons/svgs/knowledge-management-blanc.svg",
        },
        {
          title: "Integration & Interoperability",
        //   path: "/pre-clinical/integration",
          blackIcon: "/icons/svgs/integration-interoperability-black.svg",
          whiteIcon: "/icons/svgs/integration-interoperability-blanc.svg",
        },
        {
          title: "Productivity & Scheduling",
        //   path: "/pre-clinical/productivity",
          blackIcon: "/icons/svgs/productivity-scheduling-black.svg",
          whiteIcon: "/icons/svgs/productivity-scheduling-blanc.svg",
        },
      ],
    },
    {
      category: "Clinical Trial",
      items: [
        {
          title: "Trial Planning and Design",
        //   path: "/clinical/trial-planning",
          blackIcon: "/icons/svgs/trial-planning-black.svg",
          whiteIcon: "/icons/svgs/trial-planning-blanc.svg",
        },
        {
          title: "Quality Assurance and Compliance",
        //   path: "/clinical/quality-assurance",
          blackIcon: "/icons/svgs/quality-assurance-black.svg",
          whiteIcon: "/icons/svgs/quality-assurance-blanc.svg",
        },
        {
          title: "Participant Recruitment",
        //   path: "/clinical/recruitment",
          blackIcon: "/icons/svgs/participant-recruitment-black.svg",
          whiteIcon: "/icons/svgs/participant-recruitment-blanc.svg",
        },
        {
          title: "Data Analysis and Reporting",
        //   path: "/clinical/data-analysis",
          blackIcon: "/icons/svgs/data-analysis-black.svg",
          whiteIcon: "/icons/svgs/data-analysis-blanc.svg",
        },
        {
          title: "Trial Operations Management",
        //   path: "/clinical/operations",
          blackIcon: "/icons/svgs/trial-operations-black.svg",
          whiteIcon: "/icons/svgs/trial-operations-blanc.svg",
        },
        {
          title: "Post-Trial Services",
        //   path: "/clinical/post-trial",
          blackIcon: "/icons/svgs/post-trial-black.svg",
          whiteIcon: "/icons/svgs/post-trial-blanc.svg",
        },
        {
          title: "Data Capture and Management",
        //   path: "/clinical/data-capture",
          blackIcon: "/icons/svgs/data-capture-black.svg",
          whiteIcon: "/icons/svgs/data-capture-blanc.svg",
        },
        {
          title: "Holistic Management",
        //   path: "/clinical/holistic",
          blackIcon: "/icons/svgs/holistic-management-black.svg",
          whiteIcon: "/icons/svgs/holistic-management-blanc.svg",
        },
        {
          title: "Patient Monitoring",
        //   path: "/clinical/patient-monitoring",
          blackIcon: "/icons/svgs/patient-monitoring-black.svg",
          whiteIcon: "/icons/svgs/patient-monitoring-blanc.svg",
        },
      ],
    },
  ];
  
export default function ServicesMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Menu as="div" className={styles.container}>
      <MenuButton className={styles.trigger} style={{ fontSize: "large" }}>
        Services <ArrowDownIcon width={10} height={10} />
      </MenuButton>

      <MenuItems className={'menuItems'} style={{padding:"1rem" , left:'-20rem'}}>
        <div className={styles.menuGrid}>
          {servicesMenu.map((section) => (
            <div key={section.category} className={styles.category}>
              <div className={styles.sectionTitle}>{section.category}</div>
              <div className={styles.gridList}>
                {section.items.map((item,index) => (
                  <button
                    key={index}
                    onClick={() => router.push('')}
                    className={`${pathname === '' ? "active" : ""} text-menu-item`}
                    style={{boxShadow:'none' , backgroundColor:'transparent' , padding:'0'}}
                  >
                    <Image
                      src={pathname === '' ? item.whiteIcon : item.blackIcon}
                      alt={item.title}
                      width={25}
                      height={25}
                    />
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
