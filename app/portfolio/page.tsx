import ContentImg from "@/components/content-img";
import Footer from "@/components/footer";
import "@/styles/Portfolio.css";

export default function Portfolio() {
  return (
    <section>
      <div className="overlay-text-container">
        <h1 className="overlay-text">Portfolio</h1>
        <h1 className="overlay-subtext -mt-4">Comprehensive Data Consulting Services</h1>
      </div>
      
      <div className="container mx-auto mt-80">
        <div className="content-img-container">
          <ContentImg
            topText="Portfolio"
            bottomText="Time Series analysis"
            highlightedWord=""
            description="At our data consulting firm, we specialize in providing advanced time series analysis to forecast demand across various industries. With our extensive experience and expertise,
            we have successfully conducted demand forecasting for hotels using sophisticated algorithms such as Facebook's Prophet and Long Short-Term Memory (LSTM) networks.
            Our solutions are not limited to hotel demand; they can be applied to any demand forecasting needs, including retail, manufacturing, and more."
            buttonText="Contact us"
            imageUrl="/Home/img-about.jpg"
          />
        </div>
      </div>

      <div className="absolute left-0 w-full mt-8">
        <Footer/>
      </div>
    </section>
  );
}
