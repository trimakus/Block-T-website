'use client';
import React, { useState } from 'react'
import styles from '@/src/assets/styles/ChooseOurSolutions.module.scss'
import Image from 'next/image';
function ChooseOurSolutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const cards = [
        {
          blackIcon: "/icons/svgs/data-integrity-black.svg",
          blancIcon: "/icons/svgs/data-integrity-black.svg",
          title: "Data Integrity",
          desc: "Secure, tamper-proof systems for uncompromised data.",
        },
        {
          blackIcon: "/icons/svgs/reproducibility-black.svg",
          blancIcon: "/icons/svgs/reproducibility-black.svg",
          title: "Reproducibility",
          desc: "Transparent, step-by-step workflows for trustworthy results.",
        },
        {
          blackIcon: "/icons/svgs/scalability-black.svg",
          blancIcon: "/icons/svgs/scalability-black.svg",
          title: "Scalability",
          desc: "Our flexible, future-ready solutions grow with your research, adapting to your evolving needs.",
        },
      ];
  return (
    <section className={`${styles.chooseOurSolutions} blue-white-blue-gradient`}>
        <div className='container text-center'>
        <h2>The trusted partner transforming biomedical research.</h2>
        <h1 className="text-dark-blue-gradient">Why CHOOSE OUR SOLUTIONS?</h1>
        <p className={styles.subtitle}>Modern scientific research is at a crossroads, grappling with foundational issues that hinder progress and trust. Block-T addresses these challenges with innovative solutions, ensuring data integrity, reproducibility, and scalability in every step of your research journey.        </p>
       

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
              <hr />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        </div>
        </div>
    </section>
  )
}

export default ChooseOurSolutions