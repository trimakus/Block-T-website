import React from 'react';
import styles from './CtaSection.module.scss';
import ArrowRightIcon from '@/public/icons/arrowRightIcon';

const CtaSection = () => {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles['cta-card']}`}>
      <h2>Ready to Transform Your Research Process?</h2>
      <p>Join the growing community of researchers using BLOCK-T to ensure data integrity and reproducibility.</p>
      <div className={styles.ctaButtons}>
        <button className={'btn btn-dark-blue-gradient flex flex-align-center gap-2'}>Request a Demo <ArrowRightIcon width={10} height={11}/></button>
        <button className={'btn btn-orange-gradient'}>Connect Us</button>
      </div>
      </div>
    </section>
  );
};

export default CtaSection;