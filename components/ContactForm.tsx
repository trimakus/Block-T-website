"use client";

import React from "react";
import styles from "@/src/assets/styles/ContactUs.module.scss";
import { useTranslations } from "use-intl";

export default function ContactForm() {
  const t=useTranslations()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      consent: formData.get("consent") ? true : false,
    };

    console.log("Form submitted:", data);
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">{t('First_name')}*</label>
            <input type="text" name="firstName" id="firstName" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">{t('Last_name')}*</label>
            <input type="text" name="lastName" id="lastName" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">{t('Work_Email')}*</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">{t('Telephone_Number')}*</label>
          <input type="tel" name="phone" id="phone" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">{t('Company_name')}*</label>
          <input type="text" name="company" id="company" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">{t('What_do_you_want_to_ask_us')}*</label>
          <textarea name="message" id="message" required />
        </div>

        <div className={styles.checkboxRow}>
          <input type="checkbox" name="consent" id="consent" />
          <label htmlFor="consent">
            {t('I_agree_to_be_contacted')}
          </label>
        </div>

        <div className="flex flex-justify-center">
          <button type="submit" className={"btn btn-orange-gradient w-fc"}>
            {t('Send')}
          </button>
        </div>
      </form>
  );
}
