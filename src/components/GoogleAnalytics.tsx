"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-NVKQ6LLGMW";
const STORAGE_KEY = "sleek-cookie-consent";

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "accepted") {
      setConsented(true);
      return;
    }

    function onConsent() {
      setConsented(true);
    }
    window.addEventListener("cookieConsentAccepted", onConsent);
    return () => window.removeEventListener("cookieConsentAccepted", onConsent);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
