'use client';
import React from 'react'
import styles from '@/src/assets/styles/DeepT.module.scss'
import { useTranslations } from 'next-intl';
function CostOfIrreproducibility() {
    const t = useTranslations()
  return (
    <div className={styles.CostOfIrreproducibility}>
        <div className='container text-center'>
            <h2>{t('The_Cost_of_Irreproducibility')}</h2>
            <h1 className='text-dark-blue-gradient'>{t('Billions_Lost_to_Inefficiencies_and')} <br /> {t('Failures')}</h1>
            <p>{t('Irreproducibility_in_preclinical_research_costs')}</p>
      

        <div className={styles.CostOfIrreproducibilityList}>
            <div className={styles.CostOfIrreproducibilityCard}>
                <h2>$28 {t('billions')}</h2>
                <span>{t('wasted_each_year')}</span>
            </div>
            <div className={styles.CostOfIrreproducibilityCard}>
                <h2>70%</h2>
                <span>{t('of_the_studies_cant_be_replicate')}</span>
            </div>
            <div className={styles.CostOfIrreproducibilityCard}>
                <h2>50% </h2>
                <span>{t('of_studies_fail_due_to_flawed_methods_or_data')}</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CostOfIrreproducibility