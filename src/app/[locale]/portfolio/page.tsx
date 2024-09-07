"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion';
import Footer from "@/components/footer";
import Card from "@/components/portfolio";
import ContentTitle from "@/components/content-title";
import TimeSeriesArticle from "@/components/Portfolio/TimeSeriesArticle";
import OcrTools from "@/components/Portfolio/OcrTools";
import DynamicPricingArticle from "@/components/Portfolio/DynamicPricing";
import { useTranslations } from "next-intl";

import "@/styles/Portfolio.css";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const t = useTranslations("Portfolio");

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="overlay-text-container">
        <h1 className="overlay-text">{t("title-main")}</h1>
        <h2 className="overlay-subtext -mt-4">{t("title-sub")}
        </h2>
      </div>

      <div className="container-main">
      <motion.div className="card-container"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}>
        <div className=" grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            imageSrc="/Portfolio/Portfolio_Time.jpg"
            title={t("card1.title")}
            description= {t("card1.description")}
            buttonText="See more"
            onClick={() => scrollToSection(section1Ref)}
          />
          <Card
            imageSrc="/Portfolio/Portfolio_OCR.jpg"
            title={t("card2.title")}
            description= {t("card2.description")}
            buttonText="See more"
            onClick={() => scrollToSection(section2Ref)}
          />
          <Card
            imageSrc="/Portfolio/Portfolio_Pricing.jpg"
            title={t("card3.title")}
            description={t("card3.description")}
            buttonText="See more"
            onClick={() => scrollToSection(section3Ref)}
          />
        </div>
      </motion.div>
      <motion.div ref={section1Ref} className="pt-24" id="port-time"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}>
        <div className="mb-2">
          <ContentTitle
            topText="Portfolio"
            bottomText={t("card1.title")}
            alignment="center"
            bottomTextSize="semiBold40"
          />
        </div>

        {/*
          <div className="mt-6">
            <ProcessAccordion
              items={accordionItems1}
              position="left"
              title="Time Series Analysis for Hotel Demand"
              description="Accurately predicting hotel demand is crucial for optimizing operations, maximizing revenue, and improving customer satisfaction.
              Through our advanced time series analysis techniques, we help hotels anticipate demand fluctuations, allowing them to make informed decisions on staffing, pricing, and inventory management."
              textPosition="left"
            />
          </div> */}
        <div>
          <TimeSeriesArticle />
        </div>
      </motion.div>

      <motion.div ref={section2Ref} className="pt-4" id="port-ocr"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}>
        <div className="mb-2">
          <ContentTitle
            topText="Portfolio"
            bottomText={t("card2.title")}
            alignment="center"
            bottomTextSize="semiBold40"
          />
        </div>
        {/* <ProcessAccordion
            items={accordionItems2}
            position="right"
            title="OCR Tools"
            description="Learn about our OCR tool's features and benefits for automating invoice processing."
            textPosition="right"
          /> */}
        <OcrTools />
      </motion.div>

      <motion.div ref={section3Ref} className="pt-4" id="port-pricing"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      transition={{ duration: 1 }}>
        <div className="mb-2">
          <ContentTitle
            topText="Portfolio"
            bottomText={t("card3.title")}
            alignment="center"
            bottomTextSize="semiBold40"
          />
        </div>
        {/* <ProcessAccordion
            items={accordionItems3}
            position="left"
            title="Dynamic Pricing"
            description="Discover our dynamic pricing strategies and case studies across various sectors."
            textPosition="left"
          /> */}
      
      <div>
        <DynamicPricingArticle />
      </div>
      </motion.div>

      <div className="absolute left-0 w-full mt-8">
        <Footer />
      </div>
      </div>

      
    </section>
  );
}
