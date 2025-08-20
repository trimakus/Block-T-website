import React from 'react';
import styles from '@/src/assets/styles/Footer.module.scss';
import Image from 'next/image';
import LinkedinIcon from '@/public/icons/linkedinIcon';
import TwitterIcon from '@/public/icons/twitterIcon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
        <Image src={'/icons/svgs/block-t-logo.svg'} alt="logo-block-t" width={160} height={55}/>
          <p>Accelerating scientific discoveries through blockchain and AI technologies.</p>
          <div className='flex flex-justify-center gap-3'>
            <LinkedinIcon/>
            <TwitterIcon/>
          </div>
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h4>Solution</h4>
            <ul>
              <li><a href="#deep-t">DEEP-T</a></li>
              <li><a href="#clin-t">CLIN-T</a></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h4>Services</h4>
            <ul>
              <li><a href="#pre-clinical">Pre-Critical Trials</a></li>
              <li><a href="#clinical">Clinical Trials</a></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h4>About</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Leadership</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2025 Block-T. All rights reserved.</p>
        <div className={styles.footerLegal}>
          <a href="#support">Support</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;