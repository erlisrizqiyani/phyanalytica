import React from "react";
import {
  FaDollarSign,
  FaChartLine,
  FaShoppingBag,
  FaHotel,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const DynamicPricingArticle: React.FC = () => {
  const t = useTranslations("DynamicPricing-Component");

  return (
    <div className="relative isolate overflow-hidden bg-white py-9 sm:py-9 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Sticky Image */}
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={t("dynamic-pricing-image-alt")}
            src="/Portfolio/Portfolio_Pricing.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>

        {/* Scrollable Article */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 lg:max-h-screen lg:overflow-y-auto">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-bold mb-4">
                {t("dynamic-pricing-title")}
              </h2>
              <p className="mb-4">{t("dynamic-pricing-description")}</p>

              <h3 className="text-xl font-bold mb-2">
                {t("what-is-dynamic-pricing")}
              </h3>
              <ul className="mb-4 pl-4 list-disc">
                <li>
                  <strong>{t("market-demand-title")}:</strong>{" "}
                  {t("market-demand-description")}
                </li>
                <li>
                  <strong>{t("competitor-pricing-title")}:</strong>{" "}
                  {t("competitor-pricing-description")}
                </li>
                <li>
                  <strong>{t("customer-behavior-title")}:</strong>{" "}
                  {t("customer-behavior-description")}
                </li>
                <li>
                  <strong>{t("external-factors-title")}:</strong>{" "}
                  {t("external-factors-description")}
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-2">
                {t("benefits-of-dynamic-pricing")}
              </h3>
              <ul className="mb-4 pl-4 list-disc">
                <li>
                  <strong>{t("maximized-revenue-title")}:</strong>{" "}
                  {t("maximized-revenue-description")}
                </li>
                <li>
                  <strong>{t("improved-inventory-management-title")}:</strong>{" "}
                  {t("improved-inventory-management-description")}
                </li>
                <li>
                  <strong>{t("enhanced-competitiveness-title")}:</strong>{" "}
                  {t("enhanced-competitiveness-description")}
                </li>
                <li>
                  <strong>{t("customer-segmentation-title")}:</strong>{" "}
                  {t("customer-segmentation-description")}
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">
                {t("how-phyanalytica-can-help")}
              </h3>
              <p className="mb-4">{t("phyanalytica-help-description")}</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaDollarSign size={24} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">{t("data-analysis-title")}:</h4>
                    <p className="pl-4">{t("data-analysis-description")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaChartLine size={30} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">
                      {t("price-optimization-models-title")}:
                    </h4>
                    <p className="pl-4">
                      {t("price-optimization-models-description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaShoppingBag size={26} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">
                      {t("real-time-monitoring-title")}:
                    </h4>
                    <p className="pl-4">
                      {t("real-time-monitoring-description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaHotel size={28} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">
                      {t("performance-evaluation-title")}:
                    </h4>
                    <p className="pl-4">
                      {t("performance-evaluation-description")}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">
                {t("example-case-studies")}
              </h3>
              <ul className="mb-4 pl-4 list-disc">
                <li>
                  <strong>{t("retail-industry-title")}:</strong>{" "}
                  {t("retail-industry-description")}
                </li>
                <li>
                  <strong>{t("travel-hospitality-title")}:</strong>{" "}
                  {t("travel-hospitality-description")}
                </li>
                <li>
                  <strong>{t("ecommerce-title")}:</strong>{" "}
                  {t("ecommerce-description")}
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-4 mb-4">
                {t("conclusion-title")}
              </h3>
              <p className="mb-4">{t("conclusion-description")}</p>
              <p>{t("embrace-dynamic-pricing")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPricingArticle;
