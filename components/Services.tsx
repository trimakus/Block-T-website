'use client'
import React, { useState } from 'react';
import styles from './Services.module.scss';
import Image from 'next/image';
const servicesPreClincal = [
  {
    title: "Data management and integrity",
    blackIcon: "/icons/svgs/data-management-black.svg",
    blancIcon: "/icons/svgs/data-management-blanc.svg",
  },
  {
    title: "Workflow Automation",
    blackIcon: "/icons/svgs/workflow-automation-black.svg",
    blancIcon: "/icons/svgs/workflow-automation-blanc.svg",
  },
  {
    title: "Collaboration & Oversight",
    blackIcon: "/icons/svgs/collaboration-oversight-black.svg",
    blancIcon: "/icons/svgs/collaboration-oversight-blanc.svg",
  },
  {
    title: "Study Monitoring & Project Management",
    blackIcon: "/icons/svgs/study-monitoring-black.svg",
    blancIcon: "/icons/svgs/study-monitoring-blanc.svg",
  },
  {
    title: "Integration & Interoperability",
    blackIcon: "/icons/svgs/integration-interoperability-black.svg",
    blancIcon: "/icons/svgs/integration-interoperability-blanc.svg",
  },
  {
    title: "Resource & Inventory Management",
    blackIcon: "/icons/svgs/resource-inventory-management-black.svg",
    blancIcon: "/icons/svgs/resource-inventory-management-blanc.svg",
  },
  {
    title: "Security & Compliance",
    blackIcon: "/icons/svgs/security-compliance-black.svg",
    blancIcon: "/icons/svgs/security-compliance-blanc.svg",
  },
  {
    title: "Environmental Monitoring",
    blackIcon: "/icons/svgs/environmental-monitoring-black.svg",
    blancIcon: "/icons/svgs/environmental-monitoring-blanc.svg",
  },
  {
    title: "Knowledge Management",
    blackIcon: "/icons/svgs/knowledge-management-black.svg",
    blancIcon: "/icons/svgs/knowledge-management-blanc.svg",
  },
  {
    title: "Productivity & Scheduling",
    blackIcon: "/icons/svgs/productivity-scheduling-black.svg",
    blancIcon: "/icons/svgs/productivity-scheduling-blanc.svg",
  },
];
const servicesClincal = [
  {
    title: "Trial Planning and Design",
    blackIcon: "/icons/svgs/trial-planning-black.svg",
    blancIcon: "/icons/svgs/trial-planning-blanc.svg",
  },
  {
    title: "Participant Recruitment",
    blackIcon: "/icons/svgs/participant-recruitment-black.svg",
    blancIcon: "/icons/svgs/participant-recruitment-blanc.svg",
  },
  {
    title: "Trial Operations Management",
    blackIcon: "/icons/svgs/trial-operations-black.svg",
    blancIcon: "/icons/svgs/trial-operations-blanc.svg",
  },
  {
    title: "Data Capture and Management",
    blackIcon: "/icons/svgs/data-capture-black.svg",
    blancIcon: "/icons/svgs/data-capture-blanc.svg",
  },
  {
    title: "Patient Monitoring",
    blackIcon: "/icons/svgs/patient-monitoring-black.svg",
    blancIcon: "/icons/svgs/patient-monitoring-blanc.svg",
  },
  {
    title: "Quality Assurance and Compliance",
    blackIcon: "/icons/svgs/quality-assurance-black.svg",
    blancIcon: "/icons/svgs/quality-assurance-blanc.svg",
  },
  {
    title: "Data Analysis and Reporting",
    blackIcon: "/icons/svgs/data-analysis-black.svg",
    blancIcon: "/icons/svgs/data-analysis-blanc.svg",
  },
  {
    title: "Post-Trial Services",
    blackIcon: "/icons/svgs/post-trial-black.svg",
    blancIcon: "/icons/svgs/post-trial-blanc.svg",
  },
  {
    title: "Holistic Management",
    blackIcon: "/icons/svgs/holistic-management-black.svg",
    blancIcon: "/icons/svgs/holistic-management-blanc.svg",
  },
];


const Services = () => {
  const [selectedServiceType,setSelectedServiceType] = useState('Pre-Clinical Trial')
  const [hoveredCard, setHoveredCard] = useState<number|null>(null);

  const handleClickServiceType = (type:string)=>{
    setSelectedServiceType(type)
  }

  const servicesList = selectedServiceType==="Pre-Clinical Trial"?servicesPreClincal:servicesClincal
  return (
    <section className={styles.services} id="services">
      <div className='container flex flex-col flex-align-center'>
      <h2> <span className='text-dark-blue-gradient'>Multiple Services for a Seamless</span> <br /> Research Experience</h2>
      <p>
        Block-T's platforms are designed to simplify and strengthen your research process. Whether for preclinical or clinical studies, 
        our technology adapts to meet your needs.
      </p>
      <div className={styles['service-container']}>
        <div className={styles['toggle-services']}>
        <button onClick={()=>handleClickServiceType('Pre-Clinical Trial')} className={selectedServiceType==="Pre-Clinical Trial"?'btn-dark-blue-gradient':''}>Pre-Clinical Trial</button>
        <button onClick={()=>handleClickServiceType('Clinical Trial')} className={selectedServiceType==="Clinical Trial"?'btn-dark-blue-gradient':''}>Clinical Trial</button>
        </div>
        
      
      <div className={styles.serviceList}>
        <ul>
        {servicesList.map((service,i)=>
          <li key={i} onMouseEnter={() => setHoveredCard(i)}
          onMouseLeave={() => setHoveredCard(null)}>
            <Image src={hoveredCard === i ?service.blancIcon:service.blackIcon} alt={`icon-${i}`} width={70} height={70} />
            <h5>{service.title}</h5>
          </li>
        )}
</ul>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Services;