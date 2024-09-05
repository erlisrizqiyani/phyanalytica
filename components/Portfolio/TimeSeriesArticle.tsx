import React from 'react';
import { FaShoppingCart, FaIndustry, FaBolt, FaStethoscope } from 'react-icons/fa';
import { useTranslations } from "next-intl";

const TimeSeriesArticle: React.FC = () => {
  const t = useTranslations("TimeSeries-Component");

  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-16 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        
        {/* Sticky Image */}
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Time Series Analysis"
            src="/Portfolio/Portfolio_Time.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>

        {/* Scrollable Article */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 lg:max-h-screen lg:overflow-y-auto">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
              <p className="mb-4">{t("description")}</p>

              <h3 className="text-xl font-bold mb-2">{t("prophetTitle")}</h3>
              <ul className="mb-4 pl-4 list-disc">
                <li><strong>{t("prophetRobust")}:</strong> {t("prophetRobustDesc")}</li>
                <li><strong>{t("prophetSeasonality")}:</strong> {t("prophetSeasonalityDesc")}</li>
                <li><strong>{t("prophetTrend")}:</strong> {t("prophetTrendDesc")}</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">{t("lstmTitle")}</h3>
              <ul className="mb-4 pl-4 list-disc">
                <li><strong>{t("lstmSequential")}:</strong> {t("lstmSequentialDesc")}</li>
                <li><strong>{t("lstmComplex")}:</strong> {t("lstmComplexDesc")}</li>
                <li><strong>{t("lstmAdaptive")}:</strong> {t("lstmAdaptiveDesc")}</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">{t("versatileTitle")}</h3>
              <p className="mb-4">{t("versatileDesc")}</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaShoppingCart size={28} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">{t("retailTitle")}</h4>
                    <ul className="pl-4 list-disc">
                      <li><strong>{t("retailInventory")}:</strong> {t("retailInventoryDesc")}</li>
                      <li><strong>{t("retailSales")}:</strong> {t("retailSalesDesc")}</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaIndustry size={30} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">{t("manufacturingTitle")}</h4>
                    <ul className="pl-4 list-disc">
                      <li><strong>{t("manufacturingProduction")}:</strong> {t("manufacturingProductionDesc")}</li>
                      <li><strong>{t("manufacturingSupplyChain")}:</strong> {t("manufacturingSupplyChainDesc")}</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaBolt size={27} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">{t("energyTitle")}</h4>
                    <ul className="pl-4 list-disc">
                      <li><strong>{t("energyLoad")}:</strong> {t("energyLoadDesc")}</li>
                      <li><strong>{t("energyRenewable")}:</strong> {t("energyRenewableDesc")}</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaStethoscope size={28} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">{t("healthcareTitle")}</h4>
                    <ul className="pl-4 list-disc">
                      <li><strong>{t("healthcarePatient")}:</strong> {t("healthcarePatientDesc")}</li>
                      <li><strong>{t("healthcarePharmaceuticals")}:</strong> {t("healthcarePharmaceuticalsDesc")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{t("approachTitle")}</h3>
              <p className="mb-4">{t("approachDesc")}</p>

              <h4 className="font-bold mb-2">{t("dataCollection")}</h4>
              <p className="mb-4">{t("dataCollectionDesc")}</p>

              <h4 className="font-bold mb-2">{t("algorithmSelection")}</h4>
              <p className="mb-4">{t("algorithmSelectionDesc")}</p>

              <h4 className="font-bold mb-2">{t("modelTraining")}</h4>
              <p className="mb-4">{t("modelTrainingDesc")}</p>

              <h4 className="font-bold mb-2">{t("forecastGeneration")}</h4>
              <p className="mb-4">{t("forecastGenerationDesc")}</p>

              <h4 className="font-bold mb-2">{t("continuousImprovement")}</h4>
              <p>{t("continuousImprovementDesc")}</p>

              <h3 className="text-xl font-bold mt-4 mb-4">{t("conclusionTitle")}</h3>
              <p>{t("conclusionDesc")}</p>
              <p>{t("contact")}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimeSeriesArticle;
