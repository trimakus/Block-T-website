import Image from "next/image";
import React from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";

function DeepTBenefits() {
  const benefitsData = [
    {
      img: "/imgs/humain-chip.png",
      title: "Your pains",
      benefits: [
        "Disorganized processes and untraceable data hinder progress and compromise research integrity.",
        "Unreliable outcomes stem from inconsistent methodologies, eroding trust in findings.",
        "High costs arise from failed or delayed studies, straining resources and timelines.",
      ],
    },
    {
      img: "/imgs/computer-chip.png",
      title: "Our solution",
      benefits: [
        "Streamlined workflows and blockchain-powered traceability for ultimate transparency.",
        "AI-driven standardization ensures reproducible and reliable results every time.",
        "AI-driven standardization ensures reproducible and reliable results every time.",
      ],
    },
  ];
  return (
    <div className="container text-center">
      
      <h2>Benefit</h2>
      <h1 className="text-dark-blue-gradient">
        Unlock the Full Potential of Your <br /> Preclinical Research
      </h1>
      <div className={styles.cardsBenefits + ' p-1'}>
        {benefitsData.map((item, index) => (
          <div className={styles.benefitCard} key={index}>
            <Image src={item.img} alt={item.title} width={450} height={250} />
            <div className="p-1">
            <h3>{item.title}</h3>
            <ul className={'custom-list '}>
              {item.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

export default DeepTBenefits;
