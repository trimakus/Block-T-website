"use client";

import ArrowDownIcon from "@/public/icons/arrowDownIcon";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/src/assets/styles/LanguageSwitcher.module.scss";
import { useTranslations } from "next-intl";


  
export default function ServicesMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const servicesMenuItems = [
    {
      category: t('Pre_Clinical_Trial'),
      items: [
        {
          title: t("Data_management_and_integrity"),
        //   path: "/pre-clinical/data-management",
          blackIcon: "/icons/svgs/data-management-black.svg",
          whiteIcon: "/icons/svgs/data-management-blanc.svg",
        },
        {
          title: t('Resource_Inventory_Management'),
        //   path: "/pre-clinical/resource-management",
          blackIcon: "/icons/svgs/resource-inventory-management-black.svg",
          whiteIcon: "/icons/svgs/resource-inventory-management-blanc.svg",
        },
        {
          title: t('Workflow_Automation'),
        //   path: "/pre-clinical/workflow-automation",
        blackIcon: "/icons/svgs/workflow-automation-black.svg",
        whiteIcon: "/icons/svgs/workflow-automation-blanc.svg",
        },
        {
          title: t('Security_Compliance'),
        //   path: "/pre-clinical/security-compliance",
          blackIcon: "/icons/svgs/security-compliance-black.svg",
          whiteIcon: "/icons/svgs/security-compliance-blanc.svg",
        },
        {
          title: t('Collaboration_Oversight'),
        //   path: "/pre-clinical/collaboration",
          blackIcon: "/icons/svgs/collaboration-oversight-black.svg",
          whiteIcon: "/icons/svgs/collaboration-oversight-blanc.svg",
        },
        {
          title: t('Environmental_Monitoring'),
        //   path: "/pre-clinical/environment",
          blackIcon: "/icons/svgs/environmental-monitoring-black.svg",
          whiteIcon: "/icons/svgs/environmental-monitoring-blanc.svg",
        },
        {
          title: t('Study_Monitoring_Project_Management'),
        //   path: "/pre-clinical/study-monitoring",
          blackIcon: "/icons/svgs/study-monitoring-black.svg",
          whiteIcon: "/icons/svgs/study-monitoring-blanc.svg",
        },
        {
          title: t('Knowledge_Management'),
        //   path: "/pre-clinical/knowledge",
          blackIcon: "/icons/svgs/knowledge-management-black.svg",
          whiteIcon: "/icons/svgs/knowledge-management-blanc.svg",
        },
        {
          title: t('Integration_Interoperability'),
        //   path: "/pre-clinical/integration",
          blackIcon: "/icons/svgs/integration-interoperability-black.svg",
          whiteIcon: "/icons/svgs/integration-interoperability-blanc.svg",
        },
        {
          title: t('Productivity_Scheduling'),
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
          title: t('Trial_Planning_and_Design'),
        //   path: "/clinical/trial-planning",
          blackIcon: "/icons/svgs/trial-planning-black.svg",
          whiteIcon: "/icons/svgs/trial-planning-blanc.svg",
        },
        {
          title: t('Quality_Assurance_and_Compliance'),
        //   path: "/clinical/quality-assurance",
          blackIcon: "/icons/svgs/quality-assurance-black.svg",
          whiteIcon: "/icons/svgs/quality-assurance-blanc.svg",
        },
        {
          title: t('Participant_Recruitment'),
        //   path: "/clinical/recruitment",
          blackIcon: "/icons/svgs/participant-recruitment-black.svg",
          whiteIcon: "/icons/svgs/participant-recruitment-blanc.svg",
        },
        {
          title: t('Data_Analysis_and_Reporting'),
        //   path: "/clinical/data-analysis",
          blackIcon: "/icons/svgs/data-analysis-black.svg",
          whiteIcon: "/icons/svgs/data-analysis-blanc.svg",
        },
        {
          title: t('Trial_Operations_Management'),
        //   path: "/clinical/operations",
          blackIcon: "/icons/svgs/trial-operations-black.svg",
          whiteIcon: "/icons/svgs/trial-operations-blanc.svg",
        },
        {
          title: t('Post_Trial_Services'),
        //   path: "/clinical/post-trial",
          blackIcon: "/icons/svgs/post-trial-black.svg",
          whiteIcon: "/icons/svgs/post-trial-blanc.svg",
        },
        {
          title: t('Data_Capture_and_Management'),
        //   path: "/clinical/data-capture",
          blackIcon: "/icons/svgs/data-capture-black.svg",
          whiteIcon: "/icons/svgs/data-capture-blanc.svg",
        },
        {
          title: t('Holistic_Management'),
        //   path: "/clinical/holistic",
          blackIcon: "/icons/svgs/holistic-management-black.svg",
          whiteIcon: "/icons/svgs/holistic-management-blanc.svg",
        },
        {
          title: t('Patient_Monitoring'),
        //   path: "/clinical/patient-monitoring",
          blackIcon: "/icons/svgs/patient-monitoring-black.svg",
          whiteIcon: "/icons/svgs/patient-monitoring-blanc.svg",
        },
      ],
    },
  ];

  return (
    <Menu as="div" className={styles.container}>
      <MenuButton className={styles.trigger} style={{ fontSize: "large" }}>
        {t('Services')} <ArrowDownIcon width={10} height={10} />
      </MenuButton>

      <MenuItems className={'menuItems service-menu'}>
        <div className={styles.menuGrid}>
          {servicesMenuItems.map((section) => (
            <div key={section.category} className={styles.category}>
              <div className={styles.sectionTitle}>{section.category}</div>
              <div className={styles.gridList}>
                {section.items.map((item,index) => (
                  <button
                    key={index}
                    onClick={() => router.push('')}
                    className={`${pathname === '' ? "active" : ""} text-menu-item `}
                    style={{boxShadow:'none' , padding:'0.2rem'  }}
                  >
                    <Image
                      src={pathname === '' ? item.whiteIcon : item.blackIcon}
                      alt={item.title}
                      width={30}
                      height={30}
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
