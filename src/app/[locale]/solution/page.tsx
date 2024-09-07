"use client";
import React, { useRef, useState } from "react";
import ContentImg from "@/components/content-img";
import ContentTitle from "@/components/content-title";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";

import {
  FaDatabase,
  FaChartPie,
  FaCogs,
  FaMagic,
  FaShieldAlt,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";
import "@/styles/Solution.css";
import { title } from "@/components/primitives";
import FAQ from "@/components/faq";
import Tools from "@/components/tools";
import { motion, useAnimation, useInView } from 'framer-motion';

interface FAQItem {
  title: string;
  content: string | string[];
  icon: React.ReactNode;
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Solution() {
  const t = useTranslations("Solution");

  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      title: "Data Strategy",
      content: [
        "Assessment of current data infrastructure and operational procedures",
        "Business objectives and critical performance metrics (KPIs)",
        "Deployment of data cleaning and standardization procedures",
        "Evaluation of existing analytics tools, platforms, and technologies",
        "Enforcement of data governance policies",
        "Enhancement of data security protocols",
        "Identification of potential for advanced analytics and machine learning applications",
      ],
      icon: <FaMagic />,
    },
    {
      title: "Data Audit",
      content: [
        "Evaluation of current infrastructure, performance, and security status",
        "Identification of bottlenecks, latency concerns, and optimization opportunities",
        "Review of documentation and workflow processes",
        "Assessment of technology stack effectiveness",
        "Strategies for enhancing data processing and analysis efficiency",
        "Suggestions for performance enhancement",
        "Ensuring alignment with industry regulations and standards",
      ],
      icon: <FaClipboardCheck />,
    },
    {
      title: "Data Visualization",
      content: [
        "Integration of the appropriate visualization software",
        "Creation of visually engaging and intuitive dashboards",
        "Development of reporting systems tailored for extensive datasets",
        "Aggregation and summarization of data",
        "Implementation of real-time reporting capabilities",
        "Support for user adoption through training and assistance",
      ],
      icon: <FaChartPie />,
    },
    {
      title: "Data Tranformation",
      content: [
        "Evaluation of current data origins, formats, and structures",
        "Preparation and preprocessing of data",
        "Integration of data from various sources to create a cohesive dataset",
        "Standardization of data units, measurements, and formats",
        "Conversion of data across diverse formats, platforms, or systems",
      ],
      icon: <FaCogs />,
    },
    {
      title: "Data Management",
      content: [
        "Gathering data from databases, applications, and external sources",
        "Centralizing data storage and organization in a repository",
        "Performing data cleansing, validation, and profiling",
        "Integrating security protocols",
        "Ensuring compliance with privacy regulations",
        "Managing data quality",
        "Establishing policies, standards, and procedures for data asset management",
      ],
      icon: <FaDatabase />,
    },
    {
      title: "Data Engineering and ETL",
      content: [
        "Designing data architecture",
        "Developing data infrastructure",
        "Providing advisory and strategy for cloud engineering",
        "Automation and orchestration through DataOps",
        "Preparing and executing ETL/ELT processes",
        "Implementing business intelligence (BI) and analytics solutions",
      ],
      icon: <FaTools />,
    },
    {
      title: "Data Modelling and Prediction",
      content: [
        "Advanced data modeling techniques tailored to specific business needs",
        "Predictive modeling for forecasting future trends and outcomes",
        "Machine learning algorithms for predictive analytics",
        "Customized predictive models based on historical data analysis",
        "Integration of predictive models into existing business processes",
        "Continuous refinement and optimization of predictive models for accuracy and performance",
        "Expertise in building predictive models across various domains and industries",
        "Consultation on selecting the most suitable modeling approaches for different data sets and objectives",
        "Training and support for utilizing predictive models effectively within the organization",
      ],
      icon: <FaShieldAlt />,
    },
  ]);

  return (
    <section>
      <div className="overlay-text-container ">
        <h1 className="overlay-text">{t("title-main")}</h1>
        <h1 className="overlay-subtext -mt-4">{t("title-sub")}</h1>
      </div>

      <div className="container-main ">
        <motion.div className="solution-content-img mx-auto" id="sol-whoweare"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}>
          <ContentImg
            topText={t("contentImg1.topText")}
            bottomText={t("contentImg1.bottomText")}
            highlightedWord=""
            description={t("contentImg1.description")}
            buttonText={t("contentImg1.buttonText")}
            imageUrl="/Home/img-about.jpg"
            buttonHref="/contact"
          />
        </motion.div>

        <motion.div className="sol-offer" id="sol-offer"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}>
          <ContentTitle
            topText={t("ContentTitle1.topText")}
            bottomText={t("ContentTitle1.bottomText")}
            alignment="center"
            bottomTextSize="black48"
          />
          <p className="text-center justify-center text-2xl mt-8">
            {t("ContentTitle1.description")}
          </p>
        </motion.div>

        <motion.div className="sol-services" id="sol-services"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}>
          <ContentTitle
            topText={t("ContentTitle2.topText")}
            bottomText={t("ContentTitle1.bottomText")}
            alignment="center"
            bottomTextSize="black48"
            highlightedWord="services"
          />
          <div className="mt-8">
            <FAQ faqs={faqs} />
          </div>
        </motion.div>
        <motion.div className="sol-tech pt-20" id="sol-tech"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}>
          <Tools />
        </motion.div>

        <div className="absolute left-0 w-full mt-32">
          <Footer />
        </div>
      </div>

      {/* 
      <div className="banner-container relative mt-32">
        <img src="/Our Offer.png" alt="Banner" className="banner-image" />
      </div> */}
    </section>
  );
}
