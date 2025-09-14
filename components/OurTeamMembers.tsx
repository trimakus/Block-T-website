"use client";
import Image from "next/image";
import React from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";
import LinkedinCircleIcon from "@/public/icons/linkedinCircleIcon";
import { useTranslations } from "next-intl";

function OurTeamMembers() {
  const t = useTranslations()
  const team = [
    {
      img: "/imgs/humain-chip.png",
      fullname: " Khalil Miloudi",
      role:t('Co_Founder_CEO'),
      Description:t('Entrepreneur_neurovascular_expert')
    },
    {
        img: "/imgs/humain-chip.png",
        fullname: "Samir Yalaoui",
        role:t('Co_Founder_CTO'),
        Description:t('Experienced_engineering_consultant_with_project_management')
      },
      {
        img: "/imgs/humain-chip.png",
        fullname: "Aymen Trimech",
        role:t('Development_Lead'),
        Description:t('Experienced_blockchain_and_SaaS_Software')
      },
      {
        img: "/imgs/humain-chip.png",
        fullname: "Samy Omri",
        role:t('Co_Founder_Lead_scientist'),
        Description:t('Academic_entrepreneur_project_manager')
      }
  ];
  return (
    <div className="container text-center">
        <h1 className="text-dark-blue-gradient">{t('Our_Team')}</h1>
      <h2>
      {t('BLOCK_T_Management')}
      </h2>
      <div className={styles.deepTPreclilnicalSolution + ' p-1'}>
        {team.map((item, index) => (
          <div className={styles.teamMemberCard} key={index}>
           <Image src={item.img} alt={item.fullname} width={150} height={150} />
            <h4>{item.fullname}</h4>
            <span>{item.role}</span>
            
            <p>{item.Description}</p>
            
            <div className={styles.iconBottomRight}><LinkedinCircleIcon/></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeamMembers;
