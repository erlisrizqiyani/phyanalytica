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
  FaEye
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
      title: t("faqs.0.title"),
      content: [
        t("faqs.0.content.0"),
        t("faqs.0.content.1"),
        t("faqs.0.content.2"),
        t("faqs.0.content.3"),
        t("faqs.0.content.4"),
        t("faqs.0.content.5"),
      ],
      icon: <FaEye />,
    },
    {
      title: t("faqs.1.title"),
      content: [
        t("faqs.1.content.0"),
        t("faqs.1.content.1"),
        t("faqs.1.content.2"),
        t("faqs.1.content.3"),
        t("faqs.1.content.4"),
        t("faqs.1.content.5"),
        t("faqs.1.content.6"),
      ],
      icon: <FaMagic />,
    },
    {
      title: t("faqs.2.title"),
      content: [
        t("faqs.2.content.0"),
        t("faqs.2.content.1"),
        t("faqs.2.content.2"),
        t("faqs.2.content.3"),
        t("faqs.2.content.4"),
        t("faqs.2.content.5"),
        t("faqs.2.content.6"),
      ],
      icon: <FaClipboardCheck />,
    },
    {
      title: t("faqs.3.title"),
      content: [
        t("faqs.3.content.0"),
        t("faqs.3.content.1"),
        t("faqs.3.content.2"),
        t("faqs.3.content.3"),
        t("faqs.3.content.4"),
        t("faqs.3.content.5"),
        t("faqs.3.content.6"),
      ],
      icon: <FaChartPie />,
    },
    {
      title: t("faqs.4.title"),
      content: [
        t("faqs.4.content.0"),
        t("faqs.4.content.1"),
        t("faqs.4.content.2"),
        t("faqs.4.content.3"),
        t("faqs.4.content.4"),
        t("faqs.4.content.5"),
        t("faqs.4.content.6"),
      ],
      icon: <FaCogs />,
    },
    {
      title: t("faqs.5.title"),
      content: [
        t("faqs.5.content.0"),
        t("faqs.5.content.1"),
        t("faqs.5.content.2"),
        t("faqs.5.content.3"),
        t("faqs.5.content.4"),
        t("faqs.5.content.5"),
        t("faqs.5.content.6"),
      ],
      icon: <FaDatabase />,
    },
    {
      title: t("faqs.6.title"),
      content: [
        t("faqs.6.content.0"),
        t("faqs.6.content.1"),
        t("faqs.6.content.2"),
        t("faqs.6.content.3"),
        t("faqs.6.content.4"),
        t("faqs.6.content.5"),
        t("faqs.6.content.6"),
      ],
      icon: <FaTools />,
    },
    {
      title: t("faqs.7.title"),
      content: [
        t("faqs.7.content.0"),
        t("faqs.7.content.1"),
        t("faqs.7.content.2"),
        t("faqs.7.content.3"),
        t("faqs.7.content.4"),
        t("faqs.7.content.5"),
        t("faqs.7.content.6"),
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
            mediaUrl="/Solution/videosolution.mp4"
            mediaType="video"
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
