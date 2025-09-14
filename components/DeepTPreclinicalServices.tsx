"use client";
import React, { useState } from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";
import LeftYellowArrow from "@/public/icons/leftYellowArrow";
import RightYellowArrow from "@/public/icons/rightYellowArrow";
import Image from "next/image";
import { useTranslations } from "next-intl";


function DeepTPreclinicalServices() {
  const t = useTranslations()

  const [selectedCategory, setSelectedCategory] = useState(
    "Security & Compliance"
  );

  const categories = [
    "Data management and integrity",
    "Workflow Automation",
    "Collaboration & Oversight",
    "Study Monitoring & Project Management",
    "Integration & Interoperability",
    "Resource & Inventory Management",
    "Security & Compliance",
    "Environmental Monitoring",
    "Knowledge Management",
    "Productivity & Scheduling",
  ];
  const handleClickCategory = (category: string) => {
    setSelectedCategory(category);
  };


  return (
    <div className="container text-center">
      <h1 className="text-gold-dark-gradient">{t('Preclinical_Services')} ({t('DEEP_T')})</h1>
      <h1 className="text-dark-blue-gradient">
        {t('Laying_the_Foundation_for_Preclinical_Success')}
      </h1>
      <p>
        {t('Our_preclinical_services_are_designed')}
      </p>

      {/* Category Buttons */}
      <div className={styles.deepTPreclinicalServices}>
        {categories.map((category, index) => (
          <div
            onClick={() => handleClickCategory(category)}
            className={`${
              selectedCategory === category ? "btn-orange-gradient" : ""
            } ${styles.benefitCard} p-1 cursor-pointer`}
            key={index}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={`flex flex-between p-2 ${styles.sliderArrowsMobile}`}>
          <LeftYellowArrow />
          <RightYellowArrow />
        </div>
      {/* Service Card with Background */}
      <div className="flex-between gap-1 py-2">
        <div className={`flex flex-align-center ${styles.sliderArrows}`}>
          <LeftYellowArrow />
        </div>

        <div className={styles.serviceDetailsSection}>
          {/* Background */}
          <div className={styles.serviceDetailsImg}></div>
            <div className={styles.serviceDetailsTitle}>
            <h2 className="fw-400"> Security & Compliance</h2>
            <hr className={styles["gold-line"]} />
            <h2 className=" fw-400 text-gold">
              Blockchain-Backed Audit Trail
            </h2>

            </div>
          {/* White Card */}
          <div className={styles.serviceDetailCard}>
          
            <div
              className={styles.serviceDetailCardContent + " text-start"}
            >
              <div>
                <div>
                  <strong>Service Overview</strong>
                </div>
                <p>
                  Tamper-proof log of all data entries, changes, and
                  approvals across the platform.
                </p>

                <div>
                  <strong>Benefits</strong>
                </div>
                <p>
                  Guarantees data integrity; ensures compliance with data
                  protection norms (e.g., ALCOA+, ISO).
                </p>
              </div>

              <Image
                src="/imgs/vaccin.png"
                alt="service-img"
                width="400"
                height="300"
              />
            </div>
          </div>
        </div>

        <div className={`flex flex-align-center ${styles.sliderArrows}`}>
          <RightYellowArrow />
        </div>
      </div>
    </div>
  );
}

export default DeepTPreclinicalServices;
