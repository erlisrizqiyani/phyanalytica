import React from "react";
import {
  FaFileInvoice,
  FaMedkit,
  FaShoppingBasket,
  FaMoneyCheckAlt,
  FaIdCard,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const OcrTools: React.FC = () => {
  const t = useTranslations("Ocrtools-Component");

  return (
    <div className="relative isolate overflow-hidden bg-white py-9 sm:py-9 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="OCR Tools"
            src="/Portfolio/Portfolio_OCR.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:pl-8 lg:pr-4 lg:max-h-screen lg:overflow-y-auto">
          <div className="lg:max-w-full">
            <h2 className="text-2xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="mb-4">
              {t("description")}
            </p>

            <h3 className="text-xl font-bold mb-2">{t("keyFeatures")}</h3>
            <ul className="mb-4 pl-4 list-disc">
              <li>
                <strong>{t("features.scanning.strong")}</strong>
                {t("features.scanning.rest")}
              </li>
              <li>
                <strong>{t("features.recognition.strong")}</strong>
                {t("features.recognition.rest")}
              </li>
              <li>
                <strong>{t("features.integration.strong")}</strong>
                {t("features.integration.rest")}
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4">{t("applicationsTitle")}</h3>
            <p className="mb-4">{t("applicationsDescription")}</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <FaFileInvoice size={24} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">{t("documentManagement.title")}</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>{t("documentManagement.contracts.strong")}</strong>
                      {t("documentManagement.contracts.rest")}
                    </li>
                    <li>
                      <strong>{t("documentManagement.reports.strong")}</strong>
                      {t("documentManagement.reports.rest")}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaMedkit size={28} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">{t("healthcare.title")}</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>{t("healthcare.medicalRecords.strong")}</strong>
                      {t("healthcare.medicalRecords.rest")}
                    </li>
                    <li>
                      <strong>{t("healthcare.insuranceClaims.strong")}</strong>
                      {t("healthcare.insuranceClaims.rest")}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaShoppingBasket size={30} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">{t("retail.title")}</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>{t("retail.receipts.strong")}</strong>
                      {t("retail.receipts.rest")}
                    </li>
                    <li>
                      <strong>{t("retail.labels.strong")}</strong>
                      {t("retail.labels.rest")}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaMoneyCheckAlt size={28} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">{t("finance.title")}</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>{t("finance.checkProcessing.strong")}</strong>
                      {t("finance.checkProcessing.rest")}
                    </li>
                    <li>
                      <strong>{t("finance.statements.strong")}</strong>
                      {t("finance.statements.rest")}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaIdCard size={28} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">{t("government.title")}</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>{t("government.identityDocuments.strong")}</strong>
                      {t("government.identityDocuments.rest")}
                    </li>
                    <li>
                      <strong>{t("government.publicRecords.strong")}</strong>
                      {t("government.publicRecords.rest")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-4 mb-2">
              {t("developmentProcess")}
            </h3>
            {/* Additional sections omitted for brevity */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OcrTools;
