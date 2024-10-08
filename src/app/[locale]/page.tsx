"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion';
import ContentImg from "@/components/content-img";
import ContentGrid from "@/components/content-grid";
import ContentCard from "@/components/content-card";
import ImgButton from "@/components/img-button";
import ContentTitle from "@/components/content-title";
import ClientLogos from "@/components/client-logo";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie";
import { useTranslations } from "next-intl";
import "@/styles/globals.css";

import {
  FaDatabase,
  FaChartPie,
  FaCogs,
  FaMagic,
  FaShieldAlt,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";

const imgButtons = [
  {
    imageSrc: "/Home/Industri_Bank.jpg",
    title: "Bank and Finance",
    buttonLabels: [
      "Data Organization",
      "Data Digitalization",
      "Risk Analysis",
      "Regulatory Compliance",
      "Customer Insights",
    ],
  },

  {
    imageSrc: "/Home/Industri_Healthcare.jpg",
    title: "Healthcare",
    buttonLabels: [
      "Data Organization",
      "Data Digitalization",
      "Healthcare CRM",
      "Data Analytics",
    ],
  },

  {
    imageSrc: "/Home/Industri_Travel.jpg",
    title: "Travel",
    buttonLabels: [
      "Predictive Analysis",
      "Data Organization",
      "Customer Insights",
      "Digitalization",
    ],
  },

  {
    imageSrc: "/Home/Industri_Retail.jpg",
    title: "Retail",
    buttonLabels: [
      "Predictive Analytics",
      "Customer Insights",
      "Sales Analysis",
      "Digital Marketing",
      "CRM Implementation",
    ],
  },

  {
    imageSrc: "/Home/Industri_Manufacturing.jpg",
    title: "Manufacturing",
    buttonLabels: [
      "Supply Chain Optimization",
      "Predictive Maintenance",
      "Production Efficiency",
      "Quality Control",
      "Inventory Management",
    ],
  },

  {
    imageSrc: "/Home/Industri_Insurance.jpg",
    title: "Insurance",
    buttonLabels: [
      "Risk Analysis",
      "Fraud Detection",
      "Customer Insights",
      "Claims Management",
      "Regulatory Compliance",
    ],
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const t = useTranslations("HomePage");
  const contentItems = [
    {
      icon: <FaDatabase size={24} />,
      title: t("contentItems.0.title"),
      description: t("contentItems.0.description"),
    },
    {
      icon: <FaChartPie size={24} />,
      title: t("contentItems.1.title"),
      description: t("contentItems.1.description"),
    },
    {
      icon: <FaCogs size={24} />,
      title: t("contentItems.2.title"),
      description: t("contentItems.2.description"),
    },
    {
      icon: <FaMagic size={24} />,
      title: t("contentItems.3.title"),
      description: t("contentItems.3.description"),
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: t("contentItems.4.title"),
      description: t("contentItems.4.description"),
    },
    {
      icon: <FaTools size={24} />,
      title: t("contentItems.5.title"),
      description: t("contentItems.5.description"),
    },
    {
      icon: <FaClipboardCheck size={24} />,
      title: t("contentItems.6.title"),
      description: t("contentItems.6.description"),
    },
  ];

  return (
    <section className="container-main">
      <div className="flex w-full h-screen">
        <video
          className="absolute top-0 left-0 full-width h-full object-cover"
          src="/Home/head.mp4"
          autoPlay
          loop
          muted
        />
        <div className="overlay">
          <div className="text-container">
            <h1 className="title-main">{t("title-main")}</h1>
            <h1 className="title-sub">{t("title-sub")}</h1>
            <h2 className="title-description">{t("title-description")}</h2>
          </div>
        </div>
      </div>

      <motion.div
        className="container-about"
        id="home-whoweare"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }} 
      >
        <ContentImg
          topText={t("contentimg1.topText")}
          bottomText={t("contentimg1.bottomText")}
          highlightedWord=""
          description={t("contentimg1.description")}
          buttonText={t("contentimg1.buttonText")}
          mediaUrl="Data.jpg"
          mediaType="image"
          buttonHref="/solution#sol-whoweare"
        />
      </motion.div>

      <motion.div className="container-whatwedo" id="home-whatwedo"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}
      >
        <ContentGrid
          topText={t("contentgrid.topText")}
          bottomText={t("contentgrid.bottomText")}
          highlightedWord={t("contentgrid.highlightedWord")}
          items={contentItems}
        />
      </motion.div>

      <motion.div className="container-didyouknow" id="home-didyouknow"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}
      >
        <div className="grid-contentcard">
          <ContentCard
            topText={t("ContentCard1.topText")}
            bottomText={t("ContentCard1.bottomText")}
            alignment="left"
            imageSrc="/Home/Content.jpg"
            description={t("ContentCard1.description")}
            highlightedWord={t("ContentCard1.highlightedWord")}
          />
          <ContentCard
            topText={t("ContentCard2.topText")}
            bottomText={t("ContentCard2.bottomText")}
            alignment="left"
            imageSrc="/Home/Content2.jpg"
            description={t("ContentCard2.description")}
            highlightedWord={t("ContentCard2.highlightedWord")}
          />
          <ContentCard
            topText={t("ContentCard3.topText")}
            bottomText={t("ContentCard3.bottomText")}
            alignment="left"
            imageSrc="/Home/Content3.jpg"
            description={t("ContentCard3.description")}
            highlightedWord={t("ContentCard3.highlightedWord")}
          />
        </div>
      </motion.div>

      <motion.div className="container-industries" id="home-industries"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}>
        <ContentTitle
          topText="OUR SPECIALIZATION"
          bottomText="Industries we work in"
          alignment="center"
          bottomTextSize="black48"
        />
        <hr className="border-industries border-t-2 my-8" />
        <div className="grid-industries">
          {imgButtons.map((btn, index) => (
            <ImgButton
              key={index}
              imageSrc={btn.imageSrc}
              title={btn.title}
              buttonLabels={btn.buttonLabels}
            />
          ))}
        </div>
      </motion.div>

      <motion.div className="container-client" id="home-client"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}>
        <ContentTitle
          topText="TRUSTED BY"
          bottomText="Leading Brand"
          alignment="center"
          bottomTextSize="black48"
        />
        <div className="client-logo">
          <ClientLogos />
        </div>
      </motion.div>

      <div className="footer">
        <Footer />
      </div>

      <CookieConsent />
    </section>
  );
}
