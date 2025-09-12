"use client";
import React, { useState } from "react";
import styles from "@/src/assets/styles/ChooseOurSolutions.module.scss";
import Image from "next/image";
function ChooseDeepT() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      blackIcon: "/icons/svgs/puzzle.svg",
      blancIcon: "/icons/svgs/puzzle.svg",
      title: "Protocol Reproducibility Gaps",
      desc: "Deep-T ensures consistent execution, reducing variability and improving study replication for reliable results.",
    },
    {
      blackIcon: "/icons/svgs/setting.svg",
      blancIcon: "/icons/svgs/setting.svg",
      title: "Data Reliability",
      desc: "With AI and blockchain, Deep-T guarantees accurate, transparent, and verifiable data throughout the research process.",
    },
    {
      blackIcon: "/icons/svgs/security.svg",
      blancIcon: "/icons/svgs/security.svg",
      title: "Security",
      desc: "Deep-T uses blockchain to protect data from tampering, ensuring confidentiality and compliance throughout your research.",
    },
  ];
  return (
    <section
      className={`${styles.chooseOurSolutions} blue-white-blue-gradient`}
    >
      <div className="container text-center">
        <div className="flex flex-justify-center">
        <h1 className="text-light-blue-gradient w-fc">Why CHOOSE DEEP-T?</h1>
        </div>
        <p className={styles.subtitle}>
          Deep-T ensures reliable, reproducible, and secure preclinical research
          with advanced AI and blockchain technology, streamlining every step of
          your study for optimal results.
        </p>

        <div>
          <div className={styles.cards}>
            {cards.map((card, i) => (
              <div
                key={i}
                className={`${styles.card} ${
                  hoveredCard === i ? styles.hovered : ""
                }`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={styles.iconContainer}>
                  <Image
                    src={hoveredCard === i ? card.blancIcon : card.blackIcon}
                    alt={`icon-${i}`}
                    height={80}
                    width={80}
                    className={styles.icon}
                  />
                </div>
                <hr className='horizontal-orange-line'/>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseDeepT;
