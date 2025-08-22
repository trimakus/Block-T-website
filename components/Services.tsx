"use client";
import React, { useState } from "react";
import styles from "@/src/assets/styles/Services.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Services = () => {
  const [selectedServiceType, setSelectedServiceType] =
    useState("Pre-Clinical Trial");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const t = useTranslations();
  const servicesPreClincal = [
    {
      title: t("Data_management_and_integrity"),
      blackIcon: "/icons/svgs/data-management-black.svg",
      blancIcon: "/icons/svgs/data-management-blanc.svg",
    },
    {
      title: t("Workflow_Automation"),
      blackIcon: "/icons/svgs/workflow-automation-black.svg",
      blancIcon: "/icons/svgs/workflow-automation-blanc.svg",
    },
    {
      title: t("Collaboration_Oversight"),
      blackIcon: "/icons/svgs/collaboration-oversight-black.svg",
      blancIcon: "/icons/svgs/collaboration-oversight-blanc.svg",
    },
    {
      title: t("Study_Monitoring_Project_Management"),
      blackIcon: "/icons/svgs/study-monitoring-black.svg",
      blancIcon: "/icons/svgs/study-monitoring-blanc.svg",
    },
    {
      title: t("Integration_Interoperability"),
      blackIcon: "/icons/svgs/integration-interoperability-black.svg",
      blancIcon: "/icons/svgs/integration-interoperability-blanc.svg",
    },
    {
      title: t("Resource_Inventory_Management"),
      blackIcon: "/icons/svgs/resource-inventory-management-black.svg",
      blancIcon: "/icons/svgs/resource-inventory-management-blanc.svg",
    },
    {
      title: t("Security_Compliance"),
      blackIcon: "/icons/svgs/security-compliance-black.svg",
      blancIcon: "/icons/svgs/security-compliance-blanc.svg",
    },
    {
      title: t("Environmental_Monitoring"),
      blackIcon: "/icons/svgs/environmental-monitoring-black.svg",
      blancIcon: "/icons/svgs/environmental-monitoring-blanc.svg",
    },
    {
      title: t("Knowledge_Management"),
      blackIcon: "/icons/svgs/knowledge-management-black.svg",
      blancIcon: "/icons/svgs/knowledge-management-blanc.svg",
    },
    {
      title: t("Productivity_Scheduling"),
      blackIcon: "/icons/svgs/productivity-scheduling-black.svg",
      blancIcon: "/icons/svgs/productivity-scheduling-blanc.svg",
    },
  ];

  const servicesClincal = [
    {
      title: t("Trial_Planning_and_Design"),
      blackIcon: "/icons/svgs/trial-planning-black.svg",
      blancIcon: "/icons/svgs/trial-planning-blanc.svg",
    },
    {
      title: t("Participant_Recruitment"),
      blackIcon: "/icons/svgs/participant-recruitment-black.svg",
      blancIcon: "/icons/svgs/participant-recruitment-blanc.svg",
    },
    {
      title: t("Trial_Operations_Management"),
      blackIcon: "/icons/svgs/trial-operations-black.svg",
      blancIcon: "/icons/svgs/trial-operations-blanc.svg",
    },
    {
      title: t("Data_Capture_and_Management"),
      blackIcon: "/icons/svgs/data-capture-black.svg",
      blancIcon: "/icons/svgs/data-capture-blanc.svg",
    },
    {
      title: t("Patient_Monitoring"),
      blackIcon: "/icons/svgs/patient-monitoring-black.svg",
      blancIcon: "/icons/svgs/patient-monitoring-blanc.svg",
    },
    {
      title: t("Quality_Assurance_and_Compliance"),
      blackIcon: "/icons/svgs/quality-assurance-black.svg",
      blancIcon: "/icons/svgs/quality-assurance-blanc.svg",
    },
    {
      title: t("Data_Analysis_and_Reporting"),
      blackIcon: "/icons/svgs/data-analysis-black.svg",
      blancIcon: "/icons/svgs/data-analysis-blanc.svg",
    },
    {
      title: t("Post_Trial_Services"),
      blackIcon: "/icons/svgs/post-trial-black.svg",
      blancIcon: "/icons/svgs/post-trial-blanc.svg",
    },
    {
      title: t("Holistic_Management"),
      blackIcon: "/icons/svgs/holistic-management-black.svg",
      blancIcon: "/icons/svgs/holistic-management-blanc.svg",
    },
  ];

  const handleClickServiceType = (type: string) => {
    setSelectedServiceType(type);
  };

  const servicesList =
    selectedServiceType === t("Pre_Clinical_Trial")
      ? servicesPreClincal
      : servicesClincal;

  return (
    <section className={styles.services} id="services">
      <div className="container flex flex-col flex-align-center">
        <h2>
          <span className="text-dark-blue-gradient">
            {t("Multiple_Services_for_a_Seamless")}
          </span>
          <br />
          {t("Research_Experience")}
        </h2>
        <p>{t("Platforms_Description")}</p>
        <div className={styles["service-container"]}>
          <div className={styles["toggle-services"]}>
            <button
              onClick={() => handleClickServiceType(t("Pre_Clinical_Trial"))}
              className={
                selectedServiceType === t("Pre_Clinical_Trial")
                  ? "btn-dark-blue-gradient"
                  : ""
              }
            >
              {t("Pre_Clinical_Trial")}
            </button>
            <button
              onClick={() => handleClickServiceType(t("Clinical_Trial"))}
              className={
                selectedServiceType === t("Clinical_Trial")
                  ? "btn-dark-blue-gradient"
                  : ""
              }
            >
              {t("Clinical_Trial")}
            </button>
          </div>

          <div className={styles.serviceList}>
            <ul>
              {servicesList.map((service, i) => (
                <li
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Image
                    src={
                      hoveredCard === i ? service.blancIcon : service.blackIcon
                    }
                    alt={`icon-${i}`}
                    width={70}
                    height={70}
                  />
                  <h5>{service.title}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
