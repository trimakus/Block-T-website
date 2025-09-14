"use client";
import React from 'react'
import styles from "@/src/assets/styles/RequestDemo.module.scss";
import { InlineWidget } from "react-calendly";
import { useTranslations } from "next-intl";

function RequestDemoContent() {
    const t = useTranslations();

  return (
    <>
    <h1 className="big-title text-dark-blue-gradient p-2 m-0">
            {t("Request_A_Demo")}
          </h1>

          <div className={styles.requestDemoFormWrapper}>
            {/* Left Section */}
            <div className={styles.leftSection}>
              <h1>{t("What_can_I_expect_during_the_demo")}</h1>

              <div className={styles.expectationList}>
                <div className={styles.expectationCard}>
                  <span>
                    {t(
                      "Take_a_look_at_the_modules_that_are_relevant_to_your_needs"
                    )}
                  </span>
                </div>
                <div className={styles.expectationCard}>
                  <span>{t('Gain_a_brief_introduction_to_the_platform')}</span>
                </div>
                <div className={styles.expectationCard}>
                  <span>
                    {t('Get_expert_advice_that_is_tailored_to_your_study_setup')}
                  </span>
                </div>
              </div>

              <InlineWidget
                url="https://calendly.com/saifadem30/30min"
                styles={{
                  height: "100%",
                }}
              />
            </div>

            <div className={styles.rightSection}>
              <h3>{t('Book_a_free_demonstration')}</h3>
              <p>
               {t('minute_online_and_free_demo_to_explore_the_Clinical_Research_Suite')}
              </p>
              <hr className="horizontal-orange-line" />
              <p>
                {t('Select_a_time_and_date_that')}
              </p>
              <hr className="horizontal-orange-line" />

              <p>{t('One_of_our_specialists_will_be_leading_the_demo')}</p>
            </div>
          </div>
    </>
  )
}

export default RequestDemoContent