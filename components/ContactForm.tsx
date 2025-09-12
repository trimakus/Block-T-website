"use client";

import React from "react";
import styles from "@/src/assets/styles/ContactUs.module.scss";

export default function ContactForm() {
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
            <label htmlFor="firstName">First name*</label>
            <input type="text" name="firstName" id="firstName" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last name*</label>
            <input type="text" name="lastName" id="lastName" required />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Work Email*</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Telephone Number*</label>
          <input type="tel" name="phone" id="phone" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">Company name*</label>
          <input type="text" name="company" id="company" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">What do you want to ask us?*</label>
          <textarea name="message" id="message" required />
        </div>

        <div className={styles.checkboxRow}>
          <input type="checkbox" name="consent" id="consent" />
          <label htmlFor="consent">
            I agree to be contacted by Block-T for a follow-up
          </label>
        </div>

        <div className="flex flex-justify-center">
          <button type="submit" className={"btn btn-orange-gradient w-fc"}>
            Send
          </button>
        </div>
      </form>
  );
}
