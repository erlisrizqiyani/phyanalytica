// components/CookieConsent.tsx
"use client";
import { useState } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const acceptCookies = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "true");
  };

  if (!isVisible || localStorage.getItem("cookieConsent") === "true") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/70 text-black text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="md:max-w-4xl">
        <h2 className="text-lg font-bold mb-2">We value your Privacy</h2>
        <p>
          This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our{" "}
          <a href="" className="underline">
            Cookie Policy
          </a>.
        </p>
      </div>
      <button
        onClick={acceptCookies}
        className="ml-4 bg-black px-5 py-3 rounded text-white hover:bg-white hover:text-black transition-colors duration-250"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
