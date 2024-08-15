"use client";
import React, { useRef, useState } from "react";
import ContentImg from "@/components/content-img";
import ContentTitle from "@/components/content-title";
import Footer from "@/components/footer";
import { FaDatabase, FaChartPie, FaCogs, FaMagic, FaShieldAlt, FaTools, FaClipboardCheck } from 'react-icons/fa';
import "@/styles/Solution.css";
import { title } from "@/components/primitives";
import FAQ from "@/components/faq";
import Tools from "@/components/tools";

interface FAQItem {
  title: string;
  content: string | string[];
  icon: React.ReactNode;
}


export default function Solution() {
  const whoweare = useRef<HTMLDivElement>(null);
  const ouroffer = useRef<HTMLDivElement>(null);
  const ourservices = useRef<HTMLDivElement>(null);
  const ourtech = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const [faqs, setFaqs] = useState<FAQItem[]>([
    { title: 'Data Strategy',
      content: [
        'Assessment of current data infrastructure and operational procedures',
        'Business objectives and critical performance metrics (KPIs)',
        'Deployment of data cleaning and standardization procedures',
        'Evaluation of existing analytics tools, platforms, and technologies',
        'Enforcement of data governance policies',
        'Enhancement of data security protocols',
        'Identification of potential for advanced analytics and machine learning applications'
      ],
      icon: <FaMagic /> },
    { title: 'Data Audit',
      content: [
        'Evaluation of current infrastructure, performance, and security status',
        'Identification of bottlenecks, latency concerns, and optimization opportunities',
        'Review of documentation and workflow processes',
        'Assessment of technology stack effectiveness',
        'Strategies for enhancing data processing and analysis efficiency',
        'Suggestions for performance enhancement',
        'Ensuring alignment with industry regulations and standards'
      ],
      icon: <FaClipboardCheck /> },
    { title: 'Data Visualization', 
      content: [
        'Integration of the appropriate visualization software',
        'Creation of visually engaging and intuitive dashboards',
        'Development of reporting systems tailored for extensive datasets',
        'Aggregation and summarization of data',
        'Implementation of real-time reporting capabilities',
        'Support for user adoption through training and assistance'
      ], 
      icon: <FaChartPie /> },
    { title: 'Data Tranformation', 
      content: [
        'Evaluation of current data origins, formats, and structures',
        'Preparation and preprocessing of data',
        'Integration of data from various sources to create a cohesive dataset',
        'Standardization of data units, measurements, and formats',
        'Conversion of data across diverse formats, platforms, or systems'
      ], 
      icon: <FaCogs /> },
    { title: 'Data Management', 
      content: [
        'Gathering data from databases, applications, and external sources',
        'Centralizing data storage and organization in a repository',
        'Performing data cleansing, validation, and profiling',
        'Integrating security protocols',
        'Ensuring compliance with privacy regulations',
        'Managing data quality',
        'Establishing policies, standards, and procedures for data asset management'
      ], 
      icon: <FaDatabase /> },
    { title: 'Data Engineering and ETL', 
      content: [
        'Designing data architecture',
        'Developing data infrastructure',
        'Providing advisory and strategy for cloud engineering',
        'Automation and orchestration through DataOps',
        'Preparing and executing ETL/ELT processes',
        'Implementing business intelligence (BI) and analytics solutions'
      ],
      icon: <FaTools /> },
    { title: 'Data Modelling and Prediction', 
      content: [
        'Advanced data modeling techniques tailored to specific business needs',
        'Predictive modeling for forecasting future trends and outcomes',
        'Machine learning algorithms for predictive analytics',
        'Customized predictive models based on historical data analysis',
        'Integration of predictive models into existing business processes',
        'Continuous refinement and optimization of predictive models for accuracy and performance',
        'Expertise in building predictive models across various domains and industries',
        'Consultation on selecting the most suitable modeling approaches for different data sets and objectives',
        'Training and support for utilizing predictive models effectively within the organization'
      ],
      icon: <FaShieldAlt /> },
  ]);

  return (
    <section>
      <div className="overlay-text-container ">
          <h1 className="overlay-text">Phyanalytica</h1>
          <h1 className="overlay-subtext -mt-4">Comprehensive Data Consulting Services</h1>
      </div>
      
      <div className="container mx-auto mt-80" onClick={() => scrollToSection(whoweare)}>
        <ContentImg
        topText="WHO WE ARE"
        bottomText="Data Insight Consultation"
        highlightedWord = ""
        description="Dealing with huge and abundant data makes your team less productive.
        To get an insight, you need an expert, sit relax and get the reports about your business within days. "
        buttonText="Contact us"
        imageUrl="/Home/img-about.jpg"
        />
      </div>

      <div className="banner-container relative mt-32" onClick={() => scrollToSection(ouroffer)}>
        <img src="/Our Offer.png" alt="Banner" className="banner-image" />
      </div>

      <div className="mt-32" onClick={() => scrollToSection(ourservices)}>
      <ContentTitle topText="WHAT WE OFFER" bottomText="Data Consulting Services" alignment="center" bottomTextSize="black48" highlightedWord="services"/>
      <FAQ
          faqs={faqs}
        />
      </div>
      <div onClick={() => scrollToSection(ourtech)}>
      <Tools />
      </div>

      <div className="absolute left-0 w-full mt-32">
      <Footer/>
    </div>
    </section>
  );
}

