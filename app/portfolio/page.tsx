"use client";
import React, { useRef } from "react";
import Footer from "@/components/footer";
import Card from "@/components/portfolio";
import ContentTitle from "@/components/content-title";
import ProcessAccordion from "@/components/accordion";
import TimeSeriesArticle from "@/components/Portfolio/TimeSeriesArticle";
import OcrTools from "@/components/Portfolio/OcrTools";
import DynamicPricingArticle from "@/components/Portfolio/DynamicPricing";
import "@/styles/Portfolio.css";

export default function Portfolio() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sample accordion data for each section
  const accordionItems1 = [
    {
      title: "Facebook Prophet Algorithm",
      content: [
        "Robust to Missing Data: Prophet is designed to handle missing data and outliers effectively, making it suitable for real-world hotel data.",
        "Seasonality Handling: Prophet excels in capturing daily, weekly, and yearly seasonality patterns, crucial for hotel demand forecasting.",
        "Trend Analysis: It provides flexible trend components that can adapt to various changes in hotel demand patterns.",
      ],
    },
    {
      title: "Long Short-Term Memory (LSTM) Networks",
      content: [
        "Sequential Data: LSTM networks are a type of Recurrent Neural Network (RNN) that excel at learning and predicting time series data by maintaining long-term dependencies.",
        "Complex Patterns: LSTM can capture complex temporal patterns and interactions within the data, offering high accuracy in demand forecasting.",
        "Adaptive Learning: It adapts to changes in the data over time, providing robust forecasts even as demand patterns evolve",
      ],
    },
  ];

  return (
    <section>
      <div className="overlay-text-container">
        <h1 className="overlay-text">Portfolio</h1>
        <h2 className="overlay-subtext -mt-4">Comprehensive Data Consulting Services</h2>
      </div>

      <div className="container mx-auto mt-60">
        <div className=" grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            imageSrc="/Portfolio/Portfolio_Time.jpg"
            title="Time Series Analysis"
            description="At our data consulting firm, we specialize in providing advanced time series analysis to forecast demand across various industries.
            With our extensive experience and expertise, we have successfully conducted demand forecasting for hotels using sophisticated algorithms such as Facebook's Prophet and Long Short-Term Memory (LSTM) networks."
            buttonText="See more"
            onClick={() => scrollToSection(section1Ref)}
          />
          <Card
            imageSrc="/Portfolio/Portfolio_OCR.jpg"
            title="OCR Tools"
            description="One of our key achievements is the development of an OCR tool designed specifically for processing invoices.
            This software automates the extraction of data from scanned invoices, converting them into text files that can be used as inputs for client ERP systems."
            buttonText="See more"
            onClick={() => scrollToSection(section2Ref)}
          />
          <Card
            imageSrc="/Portfolio/Portfolio_Pricing.jpg"
            title="Dynamic Pricing"
            description="Dynamic pricing is a powerful strategy that allows companies to adjust prices in real-time based on market demand, competition, and other external factors.
            At Phyanalytica, we offer comprehensive dynamic pricing consultation services to help your business maximize its revenue potential while maintaining customer satisfaction."
            buttonText="See more"
            onClick={() => scrollToSection(section3Ref)}
          />
        </div>

        
      </div>
      <div ref={section1Ref} className="mt-24">
          <div className="mb-2">
          <ContentTitle
            topText="Portfolio"
            bottomText="Time Series Analysis"
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
            <TimeSeriesArticle/>
          </div>
        </div>

        <div ref={section2Ref} className="mt-4">
        <div className="mb-2">
          <ContentTitle
            topText="Portfolio"
            bottomText="OCR Tools"
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
          <OcrTools/>
        </div>

        <div ref={section3Ref} className="mt-4">
        <div className="mb-2">
          <ContentTitle
            topText="Portfolio"
            bottomText="Dynamic Pricing"
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
        </div>
        <div>
          <DynamicPricingArticle/>
        </div>

      <div className="absolute left-0 w-full mt-8">
        <Footer />
      </div>
    </section>
  );
}
