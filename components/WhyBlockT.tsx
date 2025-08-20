'use client'
import Image from "next/image";
import styles from "./WhyBlockT.module.scss";
import { useState } from "react";

const cards = [
  {
    blackIcon: "/icons/svgs/dna-black.svg",
    blancIcon: "/icons/svgs/dna-blanc.svg",
    title: "Traceability Gaps",
    desc: "Gain Full Visibility Into Your Research With Detailed, Step-By-Step Records That Ensure Accountability And Streamline Audits.",
    color: "blue",
  },
  {
    blackIcon: "/icons/svgs/shield-black.svg",
    blancIcon: "/icons/svgs/shield-blanc.svg",
    title: "Reliability",
    desc: "Trust In Our Secure, Robust Platforms To Deliver Consistent, High-Quality Data For Every Stage Of Your Research.",
    color: "white",
  },
  {
    blackIcon: "/icons/svgs/collab-setting-black.svg",
    blancIcon: "/icons/svgs/collab-setting-blanc.svg",
    title: "Transparency Deficit",
    desc: "Promote Trust And Collaboration With Systems Designed For Open, Tamper-Proof Data Sharing And Clear Workflows.",
    color: "white",
  },
];

export default function WhyBlockT() {
  const [hoveredCard, setHoveredCard] = useState<number|null>(null);

  return (
    <section className={styles.why}>
      <div className="container text-center">
        <h2>
          Why Block-T?<br/>
          <span className={'text-dark-blue-gradient'}>
            Rebuilding Trust
          </span>
          in Modern Research
        </h2>
        <p className={styles.subtitle}>
          Modern scientific research is at a crossroads, grappling with foundational issues
          that hinder progress and trust. Block-T addresses these challenges with innovative
          solutions, ensuring data integrity, reproducibility, and scalability in every step
          of your research journey.
        </p>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${hoveredCard === i ? styles.hovered : ''}`}
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
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}