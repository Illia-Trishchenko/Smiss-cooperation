"use client";
import Image from "next/image";
import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Slide, ToastContainer, toast } from "react-toastify";
import * as yup from "yup";

import "react-toastify/dist/ReactToastify.css";

import styles from "./ContactSection.module.scss";
import Feedback from "../Feedback";
import { contactUsSectionId } from "../../const";

interface FormValues {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
}

const initialValues: FormValues = {
  name: "",
  companyName: "",
  phoneNumber: "",
  email: "",
};

const validationSchema = yup.object({
  name: yup.string().required(),
  companyName: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().required(),
});

const ContactDetails = () => {
  return (
    <div className={styles.contactDetailsContainer}>
      <div className={styles.contactDetailsHeader}>
        <h2>Let’s Connect with us</h2>
        <div className={styles.imageContainer}>
          <Image src="/logo.svg" alt="Logo" fill />
        </div>
      </div>

      <div className={styles.contactInfoContainer}>
        <div>
          <h3>WEBSITE</h3>
          <a
            className={styles.contactInfo}
            href="https://smissltd.com/"
            target="_blank"
          >
            https://smissltd.com/
          </a>
        </div>
        <div>
          <h3>EMAIL</h3>
          <a className={styles.contactInfo} href="mailto:contact@smissltd.com">
            contact@smissltd.com
          </a>
        </div>
        <div>
          <h3>PHONE</h3>
          <a className={styles.contactInfo} href="tel:+44 7379 136042">
            +44 7379 136042
          </a>
          <a className={styles.contactInfo} href="tel:+38 0663 513018">
            +38 0663 513018
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const siteCode = "SMISS_GBC";
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, siteCode }),
      });

      if (!response.ok) {
        toast.error("Failed to notify");
        throw new Error("Failed to notify");
      }

      await response.json();
      resetForm();
      toast.success("We will contact you ASAP!");
    } catch (error: any) {
      toast.error("Error:", error.message);
    }
  };

  return (
    <div className={styles.sectionContainer} id={contactUsSectionId}>
      <div className={styles.leftSideContainer}>
        <ContactDetails />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          initialErrors={initialValues}
        >
          {({ isValid, isSubmitting, values, handleChange }) => (
            <Form className={styles.formContainer}>
              <div className={styles.fieldsContainer}>
                <div className={styles.fieldContainer}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="ex. John Doe"
                    aria-label="Name"
                    name="name"
                    onChange={handleChange}
                    className={styles.input}
                    value={values.name}
                  />
                </div>
                <div className={styles.fieldContainer}>
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="ex. SMISS LTD"
                    aria-label="companyName"
                    name="companyName"
                    onChange={handleChange}
                    className={styles.input}
                    value={values.companyName}
                  />
                </div>
              </div>

              <div className={styles.fieldContainer}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="ex. +1234567898"
                  aria-label="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  className={styles.input}
                  value={values.phoneNumber}
                />
              </div>
              <div className={styles.fieldContainer}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="ex. smissltd@gmail.com"
                  aria-label="email"
                  name="email"
                  onChange={handleChange}
                  className={styles.input}
                  value={values.email}
                />
              </div>
              <div className={styles.buttonContainer}>
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={styles.button}
                >
                  {isSubmitting ? <div className={styles.loader} /> : "Submit"}
                  <div className={styles.imageContainer}>
                    <Image
                      src="/arrow-right-circle.svg"
                      alt="Contact us image"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer theme="dark" transition={Slide} />
        <div className={styles.circle} />
      </div>
      <div className={styles.rightSideContainer}>
        <Feedback />
      </div>
    </div>
  );
};

export default ContactSection;
