"use client";
import Image from "next/image";
import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Slide, ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { contactUsSectionId } from "../../const";

import styles from "./ContactSection.module.scss";

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

const Feedback = dynamic(
  () => {
    return import("../Feedback");
  },
  { ssr: false }
);

const validationSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  companyName: yup.string().required("Please enter your company name"),
  phoneNumber: yup
    .string()
    .required("Please enter your phone number")
    .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g, {
      message: "Please enter valid number",
      excludeEmptyString: true,
    }),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter valid email"),
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

const InputError = ({ errorText }: { errorText: string }) => {
  return (
    <div className={styles.errorContainer}>
      <Image src="/warning.svg" alt="Warning image" width={12} height={12} />
      <span>{errorText}</span>
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
        >
          {({ isSubmitting, values, errors, touched, handleChange }) => (
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
                    className={`${styles.input} ${
                      errors.name && touched.name && styles.inputWithError
                    } }`}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <InputError errorText={errors.name} />
                  )}
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
                    className={`${styles.input} ${
                      errors.companyName &&
                      touched.companyName &&
                      styles.inputWithError
                    } }`}
                    value={values.companyName}
                  />
                  {errors.companyName && touched.companyName && (
                    <InputError errorText={errors.companyName} />
                  )}
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
                  className={`${styles.input} ${
                    errors.phoneNumber &&
                    touched.phoneNumber &&
                    styles.inputWithError
                  } }`}
                  value={values.phoneNumber}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <InputError errorText={errors.phoneNumber} />
                )}
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
                  className={`${styles.input} ${
                    errors.email && touched.email && styles.inputWithError
                  } }`}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <InputError errorText={errors.email} />
                )}
              </div>
              <div className={styles.buttonContainer}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.button}
                >
                  <div className={styles.buttonContent}>
                    <div className={styles.buttonText}>
                      {isSubmitting ? (
                        <div className={styles.loader} />
                      ) : (
                        "Submit"
                      )}
                    </div>

                    {!isSubmitting && (
                      <div className={styles.imageContainer}>
                        <Image
                          src="/arrow-right-circle.svg"
                          alt="Contact us image"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    )}
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
