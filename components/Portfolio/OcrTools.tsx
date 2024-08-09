import React from "react";
import {
  FaFileInvoice,
  FaCogs,
  FaMedkit,
  FaShoppingBasket,
  FaMoneyCheckAlt,
  FaIdCard,
} from "react-icons/fa";

const OcrTools: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-9 sm:py-9 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Sticky Image */}
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="OCR Tools"
            src="/Portfolio/Portfolio_OCR.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>

        {/* Scrollable Article */}
        <div className="lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:pl-8 lg:pr-4 lg:max-h-screen lg:overflow-y-auto">
          <div className="lg:max-w-full">
            <h2 className="text-2xl font-bold mb-4">
              Automated Data Extraction with OCR Tools
            </h2>
            <p className="mb-4">
              Our advanced OCR tools revolutionize the way businesses handle
              data by automating the extraction process from various documents.
              From invoices to medical records, our OCR solutions are designed
              to improve accuracy, efficiency, and reduce manual labor.
            </p>

            <h3 className="text-xl font-bold mb-2">Key Features:</h3>
            <ul className="mb-4 pl-4 list-disc">
              <li>
                <strong>Scanning and Digitization:</strong> Converts paper
                documents into digital formats quickly and accurately.
              </li>
              <li>
                <strong>Text Recognition:</strong> Extracts critical
                information such as invoice numbers, dates, and amounts using
                sophisticated OCR algorithms.
              </li>
              <li>
                <strong>Seamless Integration:</strong> Directly integrates
                with ERP systems for automated data entry and formatting.
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-4">
              Broader Applications of OCR Technology
            </h3>
            <p className="mb-4">
              While our OCR tool excels in invoice processing, the technology
              is versatile and applicable to a wide range of business processes:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <FaFileInvoice size={24} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">Document Management:</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>Contracts and Agreements:</strong> Digitize
                      contracts to make them editable and searchable.
                    </li>
                    <li>
                      <strong>Reports and Forms:</strong> Extract data for
                      quick access and analysis.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaMedkit size={28} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">Healthcare:</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>Medical Records:</strong> Digitize patient
                      records and prescriptions for better accessibility.
                    </li>
                    <li>
                      <strong>Insurance Claims:</strong> Automate data
                      extraction from scanned forms.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaShoppingBasket
                  size={30}
                  className="text-purple-500 mr-2"
                />
                <div>
                  <h4 className="font-bold">
                    Retail and Inventory Management:
                  </h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>Receipts and Purchase Orders:</strong>{" "}
                      Streamline inventory management by automating data
                      extraction.
                    </li>
                    <li>
                      <strong>Product Labels:</strong> Digitize labels for
                      easier tracking and management.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaMoneyCheckAlt size={28} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">Finance and Banking:</h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>Check Processing:</strong> Speed up the process
                      by scanning and digitizing checks.
                    </li>
                    <li>
                      <strong>Financial Statements:</strong> Extract key data
                      for analysis and record-keeping.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <FaIdCard size={28} className="text-purple-500 mr-2" />
                <div>
                  <h4 className="font-bold">
                    Government and Public Services:
                  </h4>
                  <ul className="pl-4 list-disc">
                    <li>
                      <strong>Identity Documents:</strong> Digitize passports
                      and driver's licenses for secure record-keeping.
                    </li>
                    <li>
                      <strong>Public Records:</strong> Convert public records
                      into searchable digital formats.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Our Development Process
            </h3>
            <p className="mb-4">
              Our OCR tools are developed through a meticulous process to
              ensure they meet the highest standards of accuracy and
              integration.
            </p>

            <h4 className="font-bold mb-2">Requirement Analysis:</h4>
            <p className="mb-4">
              We analyze client needs to tailor the OCR solution to specific
              document types and business processes.
            </p>

            <h4 className="font-bold mb-2">Algorithm Selection:</h4>
            <p className="mb-4">
              We select top-tier OCR algorithms such as Tesseract OCR and
              Google Vision API for optimal text recognition.
            </p>

            <h4 className="font-bold mb-2">Data Preprocessing:</h4>
            <p className="mb-4">
              Scanned documents are preprocessed to enhance text clarity and
              accuracy in extraction.
            </p>

            <h4 className="font-bold mb-2">Custom Template Creation:</h4>
            <p className="mb-4">
              For documents with consistent formats, we create custom
              templates to improve accuracy.
            </p>

            <h4 className="font-bold mb-2">Testing and Validation:</h4>
            <p className="mb-4">
              Our tools undergo rigorous testing with real-world documents to
              ensure reliable performance.
            </p>

            <h4 className="font-bold mb-2">Integration and Deployment:</h4>
            <p className="mb-4">
              We ensure seamless integration of the OCR tool with existing
              software systems for smooth operation.
            </p>

            <h4 className="font-bold mb-2">Continuous Improvement:</h4>
            <p>
              We continuously monitor and update the OCR tools to adapt to new
              document formats and improve accuracy over time.
            </p>

            <h3 className="text-xl font-bold mt-4 mb-4">Conclusion</h3>
            <p>
              Our advanced OCR solutions are designed to transform business
              processes by significantly enhancing efficiency and accuracy.
              From automating invoice processing to managing medical records,
              our OCR tools offer substantial benefits across various
              industries. By leveraging our expertise in OCR technology, you
              can streamline operations, reduce costs, and focus on driving
              business growth.
            </p>
            <p>
              For more information on our OCR solutions and how they can
              benefit your business, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OcrTools;
