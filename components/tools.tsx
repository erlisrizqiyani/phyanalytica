"use client";
import React, { useState } from "react";
import Image from "next/image";

const tools = [
  {
    name: "Apache Kafka",
    image: "/Solution/kafka.png",
    description:
      "For real-time data streaming and event-driven architecture, enabling efficient handling of large volumes of data across various systems.",
  },
  {
    name: "Apache Airflow",
    image: "/Solution/Airflow.png",
    description:
      "For orchestrating complex workflows and data pipelines, ensuring that tasks are executed in the correct order and dependencies are managed effectively.",
  },
  {
    name: "Apache Spark",
    image: "/Solution/spark.png",
    description:
      "For big data processing and analytics, allowing us to perform large-scale data transformations and machine learning tasks with high performance.",
  },
  {
    name: "Power BI",
    image: "/Solution/power-bi.png",
    description:
      "For data visualization and business intelligence, providing interactive reports and dashboards to help with data-driven decision-making.",
  },
  {
    name: "Google Cloud Platform (GCP)",
    image: "/Solution/google-cloud-1.png",
    description:
      "For a wide range of cloud services including computing, storage, and machine learning tools, facilitating scalable and flexible solutions.",
  },
  {
    name: "Amazon Web Services (AWS)",
    image: "/Solution/amazon-web-services.png",
    description:
      "For a comprehensive suite of cloud services that cover computing power, database management, and more, supporting a diverse set of application needs.",
  },
];

export default function Tools() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-16">
      <h2 className="text-4xl font-bold mb-8">Our Technology</h2>
      <div className="relative flex flex-wrap justify-center items-center gap-12">
        {tools.map((tool, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredTool(index)}
            onMouseLeave={() => setHoveredTool(null)}
            className="relative p-2"
            style={{
              transform:
                hoveredTool === index
                  ? "translateX(-105px)" // Increased left shift for hovered image
                  : hoveredTool !== null && index > hoveredTool
                  ? `translateX(${105 + (index - hoveredTool) * 35}px)` // Increased right shift for images to the right
                  : hoveredTool !== null && index < hoveredTool
                  ? `translateX(-${105 + (hoveredTool - index) * 35}px)` // Increased left shift for images to the left
                  : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              src={tool.image}
              alt={tool.name}
              width={80}
              height={80}
            />
            {hoveredTool === index && (
              <div
                className="absolute left-[100px] w-64 p-4 bg-white shadow-lg rounded-lg"
                style={{ top: "50%", transform: "translateY(-50%)" }} // Center the card vertically
              >
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <p className="text-sm">{tool.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}