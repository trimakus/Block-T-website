import React from 'react'
import styles from '@/src/assets/styles/DeepT.module.scss'
function CostOfIrreproducibility() {
  return (
    <div className={styles.CostOfIrreproducibility}>
        <div className='container text-center'>
            <h2>The Cost of Irreproducibility</h2>
            <h1 className='text-dark-blue-gradient'>Billions Lost to Inefficiencies and <br /> Failures</h1>
            <p>Irreproducibility in preclinical research costs the biomedical industry billions annually. These losses impact everything from delayed drug development to increased costs for trial sponsors.</p>
      

        <div className={styles.CostOfIrreproducibilityList}>
            <div className={styles.CostOfIrreproducibilityCard}>
                <h2>$28 billions</h2>
                <span>wasted each year</span>
            </div>
            <div className={styles.CostOfIrreproducibilityCard}>
                <h2>70%</h2>
                <span>of the studies can’t be replicate</span>
            </div>
            <div className={styles.CostOfIrreproducibilityCard}>
                <h2>50% </h2>
                <span>of studies fail due to flawed methods or data.</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CostOfIrreproducibility