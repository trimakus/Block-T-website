import Image from "next/image";
import React from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";

function DeepTPreclinicalSolution() {
  const benefitsData = [
    {
      img: "/imgs/humain-chip.png",
      title: "DEEP-NOTE",
      benefits: [
       'Documents research in one place.',
       'Capture and import data from complex and simple analytical instruments.'
      ],
    },
    {
      img: "/imgs/computer-chip.png",
      title: "DEEP-TRACE",
      benefits: [
        'Data integrity enhanced by verifying equipment, lab personnel and materials / products / samples. '
      ],
    },
    {
        img: "/imgs/computer-chip.png",
        title: "DEEP-WORKFLOW",
        benefits: [
         'Design your protocols.',
         'Frame your data flow.',
         'Connect your instrumentation.'
        ],
      },
      {
        img: "/imgs/computer-chip.png",
        title: "DEEP-TRACE",
        benefits: [
          'Manage product inventory, storage capacity. ',
          'Oversight of a lab’s entire inventory.'
        ],
      },
  ];
  return (
    <div className="container text-center">
        <h1 className="text-gold-dark-gradient">Preclinical Solution<br /> DEEP-T</h1>
      <h1 className="text-dark-blue-gradient">
      Built for the Future <br /> of Preclinical Research
      </h1>
      <p> <strong>Deep-T</strong>  is designed to transform preclinical research with cutting-edge technology. By combining AI and blockchain, it enhances data integrity, accelerates workflows, and ensures compliance, enabling researchers to focus on breakthroughs without worrying about reliability or scalability.</p>
      <div className={styles.deepTPreclilnicalSolution + ' p-1'}>
        {benefitsData.map((item, index) => (
          <div className={styles.benefitCard} key={index}>
           
            <h3>{item.title}</h3>
            <hr />
            <div className="p-1">

        
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

export default DeepTPreclinicalSolution;
