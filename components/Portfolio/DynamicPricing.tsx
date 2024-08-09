import React from "react";
import {
  FaDollarSign,
  FaChartLine,
  FaShoppingBag,
  FaHotel,
} from "react-icons/fa";

const DynamicPricingArticle: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-9 sm:py-9 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Sticky Image */}
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Dynamic Pricing Consultation"
            src="/Portfolio/Portfolio_Pricing.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>

        {/* Scrollable Article */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 lg:max-h-screen lg:overflow-y-auto">
            <div className="lg:max-w-lg">
              <h2 className="text-2xl font-bold mb-4">
                Unlocking Revenue Potential with Dynamic Pricing Consultation
              </h2>
              <p className="mb-4">
                In an increasingly competitive market, businesses need to
                leverage every possible advantage to optimize their revenue.
                Dynamic pricing is a powerful strategy that allows companies to
                adjust prices in real-time based on market demand, competition,
                and other external factors. At Phyanalytica, we offer
                comprehensive dynamic pricing consultation services to help your
                business maximize its revenue potential while maintaining
                customer satisfaction.
              </p>

              <h3 className="text-xl font-bold mb-2">
                What is Dynamic Pricing?
              </h3>
              <ul className="mb-4 pl-4 list-disc">
                <li>
                  <strong>Market Demand:</strong> Prices increase during high
                  demand and decrease during low demand to balance sales and
                  inventory.
                </li>
                <li>
                  <strong>Competitor Pricing:</strong> Adjusting prices in
                  response to competitors' price changes to remain competitive.
                </li>
                <li>
                  <strong>Customer Behavior:</strong> Tailoring prices based on
                  customer purchasing patterns and preferences.
                </li>
                <li>
                  <strong>External Factors:</strong> Considering external events
                  like holidays, weather conditions, or economic changes that
                  influence buying behavior.
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-2">
                Benefits of Dynamic Pricing
              </h3>
              <ul className="mb-4 pl-4 list-disc">
                <li>
                  <strong>Maximized Revenue:</strong> By capturing higher prices
                  during peak demand periods, your business can increase its
                  overall revenue.
                </li>
                <li>
                  <strong>Improved Inventory Management:</strong> Dynamic
                  pricing helps in maintaining optimal inventory levels by
                  adjusting prices to manage demand and supply efficiently.
                </li>
                <li>
                  <strong>Enhanced Competitiveness:</strong> Staying responsive
                  to market changes allows your business to remain competitive
                  in a fluctuating market.
                </li>
                <li>
                  <strong>Customer Segmentation:</strong> Understanding and
                  targeting different customer segments with tailored pricing
                  strategies to improve conversion rates.
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">
                How Phyanalytica Can Help
              </h3>
              <p className="mb-4">
                At Phyanalytica, we provide expert consultation services to
                implement and optimize dynamic pricing strategies tailored to
                your specific business needs. Our approach includes:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaDollarSign size={24} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">Data Analysis:</h4>
                    <p className="pl-4">
                      We analyze historical sales data, market trends, and
                      customer behavior to identify pricing opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaChartLine size={30} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">Price Optimization Models:</h4>
                    <p className="pl-4">
                      Utilizing advanced machine learning algorithms to develop
                      models that predict the optimal price points for different
                      scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaShoppingBag size={26} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">
                      Real-time Monitoring and Adjustment:
                    </h4>
                    <p className="pl-4">
                      Implementing systems to continuously monitor market
                      conditions and adjust prices in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaHotel size={28} className="text-purple-500 mr-2" />
                  <div>
                    <h4 className="font-bold">Performance Evaluation:</h4>
                    <p className="pl-4">
                      Regularly assessing the impact of dynamic pricing
                      strategies on revenue and making necessary adjustments to
                      improve outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Example Case Studies</h3>
              <ul className="mb-4 pl-4 list-disc">
                <li>
                  <strong>Retail Industry:</strong> A leading online retailer
                  achieved a 15% increase in overall revenue and improved
                  customer satisfaction through our dynamic pricing strategy.
                </li>
                <li>
                  <strong>Travel and Hospitality:</strong> A hotel chain saw a
                  20% increase in revenue per available room (RevPAR) by
                  optimizing room rates with our dynamic pricing consultation
                  services.
                </li>
                <li>
                  <strong>E-commerce:</strong> An e-commerce platform
                  experienced a 25% increase in conversion rates and a boost in
                  average order value using our dynamic pricing solutions.
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-4 mb-4">Conclusion</h3>
              <p className="mb-4">
                Dynamic pricing is a game-changer for businesses looking to
                optimize their revenue in a competitive market. At Phyanalytica,
                we offer expert dynamic pricing consultation services to help
                you implement and refine a pricing strategy that maximizes your
                revenue while keeping your customers satisfied. Contact us today
                to learn how we can transform your pricing strategy and drive
                your business forward.
              </p>
              <p>
                Embrace the power of dynamic pricing with Phyanalytica and
                unlock your business's full revenue potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPricingArticle;
