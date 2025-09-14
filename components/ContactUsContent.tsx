"use client";
import React from 'react'
import styles from "@/src/assets/styles/ContactUs.module.scss";
import ContactForm from "@/components/ContactForm";
import PhoneIcon from "@/public/icons/phoneIcon";
import MessageIcon from "@/public/icons/messageIcon";
import LocationIcon from "@/public/icons/locationIcon";
import LocationOutlineIcon from "@/public/icons/locationOutlineIcon";
import { useTranslations } from "next-intl";

function ContactUsContent() {
    const t = useTranslations()

  return (
    <>
    <h1 className="big-title text-dark-blue-gradient p-2 m-0">
            {t('Contact-US')}
          </h1>

          <div className={styles.contactFormWrapper}>
            {/* Left Section */}
            <div className={styles.leftSection}>
              <h2>
                {t('See_whats_possible')} <br /> {t('with')} <span>{t('Block-T')}</span>.
              </h2>
              <p>
                {t('Interested_in_a_demo_Or_do_you')} <br /> {t('have_any_questions_for_our_team')}
              </p>
              <p>{t('Lets_connect')}</p>
            </div>

            {/* Middle Section (Form) */}
            <div className={styles.middleSection}>
              <h3>{t('Ask_your_questions')}</h3>
              <ContactForm />
            </div>

            {/* Right Section (Support Info) */}
            <div className={styles.rightSection}>
              <h3>{t('Support_related_questions')}</h3>
              <p>{t('Do_you_have_technical_questions_or_need_help')}</p>

              <div className={styles.supportItem}>
                <div className={styles.iconCircle}>
                  <PhoneIcon />
                </div>
                <span>(438) 000-0000</span>
              </div>

              <div className={styles.supportItem}>
                <div className={styles.iconCircle}>
                  <MessageIcon />
                </div>
                <span>contact@blck-t.com</span>
              </div>

              <div className={styles.supportItem}>
                <div className={styles.iconCircle}>
                  <LocationIcon />
                </div>
                <span>
                  3737 Cremazie Est, <br />
                  Montreal, QC, Canada, H1Z2E9
                </span>
              </div>
              <hr className="horizontal-orange-line" />
              <div className={styles.supportItem}>
                <span>70 rue du Dr Yersin, 59120 Loos, France</span>
              </div>
              <div className="flex flex-justify-center">
                <button
                  className={
                    "btn btn-orange-gradient flex flex-align-center gap-2 flex-justify-center"
                  }
                >
                  <LocationOutlineIcon /> {t('View_on_Map')}
                </button>
              </div>
            </div>
          </div>
    </>
  )
}

export default ContactUsContent