import React from 'react';
import { FaShoppingCart, FaIndustry, FaBolt, FaStethoscope } from 'react-icons/fa';

const TimeSeriesArticle: React.FC = () => {
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
                  <h2 className="text-2xl font-bold mb-4">Time Series Analysis for Hotel Demand</h2>
                  <p className="mb-4">
                    Accurately predicting hotel demand is crucial for optimizing operations, maximizing revenue, and improving customer satisfaction. Through our advanced time series analysis techniques, we help hotels anticipate demand fluctuations, allowing them to make informed decisions on staffing, pricing, and inventory management.
                  </p>
    
                  <h3 className="text-xl font-bold mb-2">Facebook Prophet Algorithm:</h3>
                  <ul className="mb-4 pl-4 list-disc">
                    <li><strong>Robust to Missing Data:</strong> Prophet is designed to handle missing data and outliers effectively, making it suitable for real-world hotel data.</li>
                    <li><strong>Seasonality Handling:</strong> Prophet excels in capturing daily, weekly, and yearly seasonality patterns, crucial for hotel demand forecasting.</li>
                    <li><strong>Trend Analysis:</strong> It provides flexible trend components that can adapt to various changes in hotel demand patterns.</li>
                  </ul>
    
                  <h3 className="text-xl font-bold mb-2">Long Short-Term Memory (LSTM) Networks:</h3>
                  <ul className="mb-4 pl-4 list-disc">
                    <li><strong>Sequential Data:</strong> LSTM networks are a type of Recurrent Neural Network (RNN) that excel at learning and predicting time series data by maintaining long-term dependencies.</li>
                    <li><strong>Complex Patterns:</strong> LSTM can capture complex temporal patterns and interactions within the data, offering high accuracy in demand forecasting.</li>
                    <li><strong>Adaptive Learning:</strong> It adapts to changes in the data over time, providing robust forecasts even as demand patterns evolve.</li>
                  </ul>
    
                  <h3 className="text-xl font-bold mb-4">Beyond Hotel Demand: Versatile Forecasting Solutions</h3>
                  <p className="mb-4">
                    While we have extensive experience in hotel demand forecasting, our expertise in time series analysis extends to various other industries. Our methods are adaptable and can be applied to any demand forecasting scenario, including:
                  </p>
    
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaShoppingCart size={28} className="text-purple-500 mr-2" />
                      <div>
                        <h4 className="font-bold">Retail:</h4>
                        <ul className="pl-4 list-disc">
                          <li><strong>Inventory Management:</strong> Forecast product demand to optimize inventory levels, reduce stockouts, and minimize holding costs.</li>
                          <li><strong>Sales Predictions:</strong> Anticipate sales trends to inform marketing strategies, promotional activities, and staffing requirements.</li>
                        </ul>
                      </div>
                    </div>
    
                    <div className="flex items-start">
                      <FaIndustry size={30} className="text-purple-500 mr-2" />
                      <div>
                        <h4 className="font-bold">Manufacturing:</h4>
                        <ul className="pl-4 list-disc">
                          <li><strong>Production Planning:</strong> Predict demand for manufactured goods to streamline production schedules, reduce lead times, and manage resources efficiently.</li>
                          <li><strong>Supply Chain Optimization:</strong> Improve supply chain management by forecasting demand for raw materials and finished products.</li>
                        </ul>
                      </div>
                    </div>
    
                    <div className="flex items-start">
                      <FaBolt size={27} className="text-purple-500 mr-2" />
                      <div>
                        <h4 className="font-bold">Energy:</h4>
                        <ul className="pl-4 list-disc">
                          <li><strong>Load Forecasting:</strong> Predict energy consumption patterns to ensure efficient energy distribution and manage grid stability.</li>
                          <li><strong>Renewable Energy:</strong> Forecast the availability of renewable energy sources like solar and wind to optimize energy mix and storage solutions.</li>
                        </ul>
                      </div>
                    </div>
    
                    <div className="flex items-start">
                      <FaStethoscope size={28} className="text-purple-500 mr-2" />
                      <div>
                        <h4 className="font-bold">Healthcare:</h4>
                        <ul className="pl-4 list-disc">
                          <li><strong>Patient Demand:</strong> Anticipate patient inflow to manage hospital staffing, resource allocation, and inventory of medical supplies.</li>
                          <li><strong>Pharmaceuticals:</strong> Forecast demand for medications to ensure timely production and distribution.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
    
                  <h3 className="text-xl font-bold mb-2">Our Proven Approach</h3>
                  <p className="mb-4">Our approach to time series analysis and demand forecasting is grounded in a deep understanding of statistical methods and machine learning algorithms. Here’s how we ensure success for our clients:</p>
    
                  <h4 className="font-bold mb-2">Data Collection and Preprocessing:</h4>
                  <p className="mb-4">We collect and preprocess historical data, ensuring it is clean and ready for analysis. This includes handling missing values, outliers, and normalizing the data.</p>
    
                  <h4 className="font-bold mb-2">Algorithm Selection:</h4>
                  <p className="mb-4">We choose the most suitable algorithm based on the specific characteristics of the data and the forecasting requirements. This could be Prophet for its robustness and interpretability or LSTM for its ability to capture complex patterns.</p>
    
                  <h4 className="font-bold mb-2">Model Training and Validation:</h4>
                  <p className="mb-4">Our experts train the chosen model on historical data, validating its accuracy through rigorous testing. We use techniques like cross-validation to ensure the model generalizes well to new data.</p>
    
                  <h4 className="font-bold mb-2">Forecast Generation and Analysis:</h4>
                  <p className="mb-4">We generate forecasts and analyze the results, providing actionable insights and recommendations. Our forecasts come with confidence intervals to quantify uncertainty and help in decision-making.</p>
    
                  <h4 className="font-bold mb-2">Continuous Improvement:</h4>
                  <p>We continuously monitor the performance of our models and update them as new data becomes available, ensuring that our forecasts remain accurate and relevant.</p>
    
                  <h3 className="text-xl font-bold mt-4 mb-4">Conclusion</h3>
                  <p>
                    Our expertise in time series analysis, powered by algorithms like Facebook Prophet and LSTM networks, enables us to deliver precise and reliable demand forecasts for various industries. Whether you are in hospitality, retail, manufacturing, or any other sector, our advanced forecasting solutions can help you optimize operations, enhance strategic planning, and drive business growth.
                  </p>
                  <p>
                    For more information on our demand forecasting services and how we can help your business, please contact us.
                  </p>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      );
    };

export default TimeSeriesArticle;
