'use client'
import React from 'react'
import styles from '@/src/assets/styles/RequestDemo.module.scss'
import { InlineWidget } from 'react-calendly'

function page() {
  return (
    <>
    <div className='background-top-blue-gradient'>
    <div className='container text-center pb-2'>
        <h1 className='big-title text-dark-blue-gradient p-2 m-0'>Request a Demo</h1>
    

    <div className={styles.requestDemoFormWrapper }>
      {/* Left Section */}
      <div className={styles.leftSection}>
       <h1> What can I expect during the demo?</h1>

       <div className={styles.expectationList}>
            <div className={styles.expectationCard}>
             
                <span>Take a look at the modules that are relevant to your needs</span>
            </div>
            <div className={styles.expectationCard}>
                <span>Gain a brief introduction to the platform</span>
            </div>
            <div className={styles.expectationCard}>
                <span>Get expert advice that is tailored to your study setup</span>
            </div>
        </div>

        <InlineWidget url="https://calendly.com/saifadem30/30min" styles={{
  height: '100%'
}} />

      </div>

      <div className={styles.rightSection}>
        <h3>Book a free demonstration</h3>
        <p>Take a 30-minute online and free demo to explore the Clinical Research Suite.</p>
        <hr className='horizontal-orange-line'/>
        <p>Select a time and date that is convenient for you from the options below, and we will send you an invitation to join the demonstration.</p>
        <hr className='horizontal-orange-line'/>

        <p>One of our specialists will be leading the demo.</p>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default page