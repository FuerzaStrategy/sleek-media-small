"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const PIXEL_ID = "948648841402033";
const STORAGE_KEY = "sleek-cookie-consent";

export default function MetaPixel() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // Fire immediately if already accepted on a previous visit
    if (localStorage.getItem(STORAGE_KEY) === "accepted") {
      setConsented(true);
      return;
    }

    // Otherwise wait for the user to accept via the banner
    function onConsent() {
      setConsented(true);
    }
    window.addEventListener("cookieConsentAccepted", onConsent);
    return () => window.removeEventListener("cookieConsentAccepted", onConsent);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
