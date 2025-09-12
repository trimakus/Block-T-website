import React from 'react'
import styles from '@/src/assets/styles/ContactUs.module.scss'
import ContactForm from '@/components/ContactForm'
import PhoneIcon from '@/public/icons/phoneIcon'
import MessageIcon from '@/public/icons/messageIcon'
import LocationIcon from '@/public/icons/locationIcon'
import LocationOutlineIcon from '@/public/icons/locationOutlineIcon'
function page() {
  return (
    <>
    <div className='background-top-blue-gradient'>
    <div className='container text-center pb-2'>
        <h1 className='big-title text-dark-blue-gradient p-2 m-0'>Contact-US</h1>
    

    <div className={styles.contactFormWrapper}>
      {/* Left Section */}
      <div className={styles.leftSection + ' ps-2'}>
        <h2>
          See what&apos;s possible <br /> with <span>Block-T</span>.
        </h2>
        <p>
          Interested in a demo? Or do you <br /> have any questions for our
          team?
        </p>
        <p>Let&apos;s connect!</p>
      </div>

      {/* Middle Section (Form) */}
      <div className={styles.middleSection}>
        <h3>Ask your questions</h3>
        <ContactForm/>
      </div>

      {/* Right Section (Support Info) */}
      <div className={styles.rightSection}>
        <h3>Support related questions</h3>
        <p>Do you have (technical) questions or need help?</p>

        <div className={styles.supportItem}>
          <div className={styles.iconCircle}>
            <PhoneIcon/>
          </div>
          <span>(438) 000-0000</span>
        </div>

        <div className={styles.supportItem}>
          <div className={styles.iconCircle}>
            <MessageIcon/>
          </div>
          <span>contact@blck-t.com</span>
        </div>

        <div className={styles.supportItem}>
          <div className={styles.iconCircle}>
            <LocationIcon/>
          </div>
          <span>
            3737 Cremazie Est, <br />
            Montreal, QC, Canada, H1Z2E9
          </span>
        </div>
        <hr className='horizontal-orange-line'/>
        <div className={styles.supportItem}>
          <span>
            70 rue du Dr Yersin, 59120 Loos, France
          </span>
        </div>
<div className='flex flex-justify-center'>
        <button className={'btn btn-orange-gradient flex flex-align-center gap-2 flex-justify-center'}><LocationOutlineIcon/> View on Map</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default page