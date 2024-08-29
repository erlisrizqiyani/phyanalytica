"use client";
import React from "react";
import ContentImg from "@/components/content-img";
import ContentGrid from '@/components/content-grid';
import ContentCard from "@/components/content-card";
import ImgButton from '@/components/img-button';
import ContentTitle from "@/components/content-title";  
import ClientLogos from "@/components/client-logo";
import Footer from "@/components/footer";
import CookieConsent from '@/components/cookie';
import {useTranslations} from 'next-intl';
import { Link } from "@nextui-org/link";
import "@/styles/globals.css";
 
import { FaDatabase, FaChartPie, FaCogs, FaMagic, FaShieldAlt, FaTools, FaClipboardCheck } from 'react-icons/fa';

const contentItems = [
  { icon: <FaDatabase size={24} />, title: 'Data Strategy', description: 'Aligns data management with business goals to drive informed decision-making and achieve strategic objectives' },
  { icon: <FaChartPie size={24} />, title: 'Data Visualization', description: 'Transforms complex data into visual formats, making patterns and insights easier to understand and interpret' },
  { icon: <FaCogs size={24} />, title: 'Data Management', description: 'Involves organizing, storing, and maintaining data to ensure its accuracy, accessibility, and security' },
  { icon: <FaMagic size={24} />, title: 'Data Modelling And Prediction', description: 'Use statistical and machine learning techniques to analyze historical data and forecast future trends and outcomes' },
  { icon: <FaShieldAlt size={24} />, title: 'Data Audit', description: 'Systematically reviews and evaluates data accuracy, consistency, and compliance to ensure reliability and integrity' },
  { icon: <FaTools size={24} />, title: 'Data Transformation', description: 'Involves converting data from its original format into a structured format suitable for analysis and reporting' },
  { icon: <FaClipboardCheck size={24} />, title: 'Data Engineering And ETL', description: 'Designing and managing data pipelines to extract data from sources, transform it into a usable format, and load it into storage systems for analysis' },
];


const imgButtons = [
  { imageSrc: "/Home/Industri_Bank.jpg", title: "Bank and Finance",
    buttonLabels: ["Data Organization", "Data Digitalization", "Risk Analysis", "Regulatory Compliance", "Customer Insights"] },

  { imageSrc: "/Home/Industri_Healthcare.jpg", title: "Healthcare",
    buttonLabels: ["Data Organization", "Data Digitalization", "Healthcare CRM", "Data Analytics"] },

  { imageSrc: "/Home/Industri_Travel.jpg", title: "Travel",
    buttonLabels: ["Predictive Analysis", "Data Organization", "Customer Insights", "Digitalization"] },

  { imageSrc: "/Home/Industri_Retail.jpg", title: "Retail",
    buttonLabels: ["Predictive Analytics", "Customer Insights", "Sales Analysis", "Digital Marketing", "CRM Implementation"] },

  { imageSrc: "/Home/Industri_Manufacturing.jpg", title: "Manufacturing",
    buttonLabels: ["Supply Chain Optimization", "Predictive Maintenance", "Production Efficiency", "Quality Control", "Inventory Management"] },
    
  { imageSrc: "/Home/Industri_Insurance.jpg", title: "Insurance",
    buttonLabels: ["Risk Analysis", "Fraud Detection", "Customer Insights", "Claims Management", "Regulatory Compliance"] }
];

export default function Home() {
  const t = useTranslations('HomePage');
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
            <h1 className="title-main">Unlock Your Business</h1>
            <h1 className="title-sub">Potential with Data Expertise</h1>
            <h2 className="title-description">Unleash the power of data with Phyanalytica, your trusted data consulting partner.</h2>
          </div>
        </div>
      </div>

      <div className="container-about" id="home-whoweare">
        <ContentImg
          topText="WHO WE ARE"
          bottomText="Get to know us"
          highlightedWord = ""
          description="Phyanalytica specialize in providing comprehensive consulting services for data analysis, guiding businesses through every stage of the process. From initial strategy and auditing to designing robust data architectures and implementing cutting-edge technology solutions, our goal is to empower organizations with data-driven insights. Our expertise extends across various facets of data science, including security, compliance, and machine learning, ensuring that our clients receive secure, compliant, and highly effective solutions tailored to their needs."
          buttonText="Read more"
          imageUrl="/Home/img-about.jpg"
          buttonHref="/solution#sol-whoweare"
        />
      </div>

      <div className="container-whatwedo" id="home-whatwedo">
        <ContentGrid
          topText="WHAT WE DO"
          bottomText="Perfect Solution to your business growth"
          highlightedWord = "growth"
          items={contentItems}
        />
      </div>

      <div className="container-didyouknow" id="home-didyouknow">
        <div className="grid-contentcard">
          <ContentCard
            topText="DID YOU KNOW"
            bottomText="Monetize Your Data with AI-Powered Insights"
            alignment="left"
            imageSrc="/Home/Content.jpg"
            description="Artificial Intelligence (AI) revolutionizes data monetization by turning raw information into actionable insights. Through enhanced customer insights, predictive analytics, and operational efficiency, businesses can deliver personalized experiences, optimize processes, and discover new revenue streams."
            highlightedWord ="AI-Powered"
          />
          <ContentCard
            topText="DID YOU KNOW"
            bottomText="The Importance of Data Privacy and Security"
            alignment="left"
            imageSrc="/Home/Content2.jpg"
            description="By leveraging the advanced technologies of Google Cloud and Amazon Web Services (AWS), we ensure that your data remains secure and protected. We comply with data privacy standards such as GDPR and CCPA, implement high-level encryption for data-at-rest and data-in-transit, and conduct regular security audits."
            highlightedWord = "Importance"
          />
          <ContentCard
            topText="DID YOU KNOW"
            bottomText="The Importance of Digitization and Data Management"
            alignment="left"
            imageSrc="/Home/Content3.jpg"
            description="Digitization converts physical records into digital formats, making them more accessible and efficient. Effective data management ensures this information is accurate, secure, and easily available, driving better decision-making and operational efficiency. Adopting these practices enhances competitiveness and supports strategic growth."
            highlightedWord = "Importance"
          />
        </div>
      </div>

      <div className="container-industries" id="home-industries">
        <ContentTitle topText="OUR SPECIALIZATION" bottomText="Industries we work in" alignment="center" bottomTextSize="black48" />
        <hr className="border-t-2 border-purple-200 my-8" />
        <div className="grid-industries">
          {imgButtons.map((btn, index) => (
            <ImgButton key={index} imageSrc={btn.imageSrc} title={btn.title} buttonLabels={btn.buttonLabels} />
          ))}
        </div>
      </div>

      <div className="container-client" id="home-client">
        <ContentTitle topText="TRUSTED BY" bottomText="Leading Brand" alignment="center" bottomTextSize="black48" />
        <div className="absolute left-0 full-width mt-8">
          <ClientLogos/>
        </div>
      </div>

      <div className="absolute left-0 full-width mt-8">
        <Footer/>
      </div>

      <CookieConsent />
    </section>
  );
}

