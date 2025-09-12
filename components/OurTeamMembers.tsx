import Image from "next/image";
import React from "react";
import styles from "@/src/assets/styles/DeepT.module.scss";
import LinkedinCircleIcon from "@/public/icons/linkedinCircleIcon";

function OurTeamMembers() {
  const team = [
    {
      img: "/imgs/humain-chip.png",
      fullname: " Khalil Miloudi",
      role:'Co-Founder & CEO',
      Description:'Entrepreneur, neurovascular expert with extensive preclinical development expertise. Innovator and team builder.'
    },
    {
        img: "/imgs/humain-chip.png",
        fullname: "Samir Yalaoui",
        role:'Co-Founder & CTO',
        Description:'Experienced engineering consultant with project management, business analysis and technical leader competencies and skills, with 25+ years’ experience in  positions and roles across the globe.'
      },
      {
        img: "/imgs/humain-chip.png",
        fullname: "Aymen Trimech",
        role:'Development Lead',
        Description:'Experienced blockchain and SaaS/Software architect. Tech-entrepreneur with 10+ years’ experience.'
      },
      {
        img: "/imgs/humain-chip.png",
        fullname: "Samy Omri",
        role:'Co-Founder & Lead scientist',
        Description:'Academic entrepreneur, project manager and consultant. Extensive preclinical development, biotech and C.R.O. expertise.'
      }
  ];
  return (
    <div className="container text-center">
        <h1 className="text-dark-blue-gradient">Our Team</h1>
      <h2>
      BLOCK-T Management
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
