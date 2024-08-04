  import React from "react";
  import { Link } from "@nextui-org/link";
  import { button as buttonStyles } from "@nextui-org/theme";

  import { siteConfig } from "@/config/site";
  import { title, subtitle } from "@/components/primitives";
  import ContentImg from "@/components/content-img";
  import ContentGrid from '../components/content-grid';
  import ContentCard from "@/components/content-card";
  import ImgButton from '@/components/img-button';
  import ContentTitle from "@/components/content-title";
  import ClientLogos from "@/components/client-logo";
  import Footer from "@/components/footer";

  import { FaDatabase, FaChartPie, FaCogs, FaMagic, FaShieldAlt, FaTools, FaClipboardCheck } from 'react-icons/fa';

  const contentItems = [
    { icon: <FaDatabase size={24} />, title: 'Data Strategy', description: 'Aliquam vehicula pellentesque id mi quam ipsum arcu nisl faucibus.' },
    { icon: <FaChartPie size={24} />, title: 'Data Visualization', description: 'Velit nulla eu tortor elit sed. Volutpat ornare mi tempor, hac morbi faucibus.' },
    { icon: <FaCogs size={24} />, title: 'Data Management', description: 'Lobortis adipiscing sit senectus id. Rhoncus lacus mi aliquam tortor nibh.' },
    { icon: <FaMagic size={24} />, title: 'Data Modelling And Prediction', description: 'Lobortis adipiscing sit senectus id. Rhoncus lacus mi aliquam tortor nibh.' },
    { icon: <FaShieldAlt size={24} />, title: 'Data Audit', description: 'Turpis eget ut sed vitae in sapien egestas ultrices feugiat elementum platea.' },
    { icon: <FaTools size={24} />, title: 'Data Transformation', description: 'Amet eros nisl vestibulum tincidunt pellentesque congue id sapien dictum a.' },
    { icon: <FaClipboardCheck size={24} />, title: 'Data Engineering And ETL', description: 'Tristique viverra lorem nibh eget tellus eget morbi porttitor faucibus sit.' },
  ];

  
  const imgButtons = [
    { imageSrc: "/Home/Industri_Healthcare.jpg", title: "Bank and Finance", buttonLabels: ["Data Organization", "Data Digitalization", "Risk Analysis", "Regulatory Compliance", "Customer Insights"] },
    { imageSrc: "/Home/Industri_Healthcare.jpg", title: "Technology", buttonLabels: ["Development", "Operations", "IT Security", "Cloud Services", "Tech Support"] },
    { imageSrc: "/Home/Industri_Travel.jpg", title: "Healthcare", buttonLabels: ["Patient Care", "Medical Records", "Compliance", "Research", "Insurance"] },
    { imageSrc: "/Home/Industri_Retail.jpg", title: "Retail", buttonLabels: ["Sales", "Customer Service", "Inventory Management", "Supply Chain", "Marketing"] },
    { imageSrc: "/Home/Industri_Manufacturing.jpg", title: "Education", buttonLabels: ["Teaching", "Admissions", "Student Services", "Research", "Administration"] },
    { imageSrc: "/Home/Industri_Insurance.jpg", title: "Transportation", buttonLabels: ["Logistics", "Fleet Management", "Safety Regulations", "Ticketing Systems", "Customer Relations"] }
  ];

  export default function Home() {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
        <div className="flex w-full h-screen">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/Home/head.mp4"
            autoPlay  
            loop
            muted
          />
          <div className="overlay">
              <div className="text-container">
                <h1 className="text-white font-bold text-4xl md:text-6xl">Unlock Your Business</h1>
                <h1 className="text-white-500 font-bold text-4xl md:text-6xl">Potential with Data Expertise</h1>
                <h2 className="text-white font-regular text-xl md:text-2xl mt-4">Unleash the power of data with Phyanalytica, your trusted data consulting partner.</h2>
              </div>
            </div>
        </div>

        <div className="container mx-auto -mt-32">
        <ContentImg
          topText="WHO WE ARE"
          bottomText="Get to know us"
          highlightedWord = ""
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          buttonText="Read more"
          imageUrl="/Home/img-about.jpg"
        />
        </div>

      <div>

      <div className="container mx-auto p-4 mt-20">
        <ContentGrid
          topText="WHAT WE DO"
          bottomText="Perfect Solution to your business growth"
          highlightedWord = "growth"
          items={contentItems}
        />
      </div>

      <div className="container mx-auto p-4 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          description="By leveraging the advanced technologies of Google Cloud and Amazon Web Services (AWS), we ensure that your data remains secure and protected. We comply with data privacy standards such as GDPR and CCPA, implement high-level encryption for data-at-rest and data-in-transit, and conduct regular security audits."
          highlightedWord = "Importance"
        />
      </div>
      </div>

      <div className="container mx-auto px-4 py-4 mt-32">
      <ContentTitle topText="OUR SPECIALIZATION" bottomText="Industries we work in" alignment="center" bottomTextSize="black48" />
      <hr className="border-t-2 border-purple-200 my-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {imgButtons.map((btn, index) => (
          <ImgButton key={index} imageSrc={btn.imageSrc} title={btn.title} buttonLabels={btn.buttonLabels} />
        ))}
      </div>
      </div>

      <div className="my-32">
        <ContentTitle topText="TRUSTED BY" bottomText="Leading Brand" alignment="center" bottomTextSize="black48" />
        <div className="absolute left-0 w-full mt-8">
        <ClientLogos/>
      </div>
      </div>
      <div className="absolute left-0 w-full mt-8">
        <Footer/>
      </div>
      </div>
      

        <style>{`
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6); /* Darken the image */
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .text-container {
            color: white;
            max-width: 80%;
            margin: 0 auto;
          }
        `}</style>
      </section>
    );
  }

