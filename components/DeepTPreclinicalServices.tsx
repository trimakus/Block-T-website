"use client";
import React, { useState } from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";
import LeftYellowArrow from "@/public/icons/leftYellowArrow";
import RightYellowArrow from "@/public/icons/rightYellowArrow";
import Image from "next/image";

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

function DeepTPreclinicalServices() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Security & Compliance"
  );

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container text-center">
      <h1>Preclinical Services (DEEP-T)</h1>
      <h1 className="text-dark-blue-gradiant">
        Laying the Foundation for Preclinical Success
      </h1>
      <p>
        Our preclinical services are designed to support the earliest stages of
        research, ensuring robust methodologies and data reliability.
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

      {/* Service Card with Background */}
      <div className="flex gap-1 p-2">
        <div className="flex flex-align-center">
          <LeftYellowArrow />
        </div>

        <div className={styles.serviceDetailsSection}>
          {/* Background */}
          <div className={styles.serviceBackground}></div>

          {/* White Card */}
          <div className={styles.serviceDetailCard}>
            <h2 className="fw-400"> Security & Compliance</h2>
            <hr className={styles["gold-line"]} />
            <h2 className=" fw-400 text-gold">
              Blockchain-Backed Audit Trail
            </h2>

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

        <div className="flex flex-align-center">
          <RightYellowArrow />
        </div>
      </div>
    </div>
  );
}

export default DeepTPreclinicalServices;
