import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy & Terms of Service | Sleek Media",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-16 text-center">
        <h1 className="text-4xl font-black text-white md:text-5xl">Privacy Policy &amp; Terms</h1>
        <p className="mt-3 text-white/60">Effective Date: April 5, 2026</p>
        <p className="mt-1 text-sm text-white/50">
          Questions? Email us at{" "}
          <a href="mailto:hello@WatchSleek.com" className="text-teal underline hover:text-light-blue">
            hello@WatchSleek.com
          </a>
        </p>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-10">

        {/* ── PRIVACY POLICY ── */}
        <h2 className="text-3xl font-black text-navy">Privacy Policy</h2>
        <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-teal">Sleek Media</p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Sleek Media (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides this privacy notice to describe how we collect, use, and share the information of individuals who visit our website and other online properties that link to this privacy notice (collectively, the &ldquo;Site&rdquo;).
        </p>

        <Section title="Information Collection">
          <p>
            When using our Site, you may provide information about yourself, such as your name, address, email address, phone number, and any other information you choose to provide. If you make a purchase, we will collect payment information and other details needed for the transaction, such as billing and shipping information. We collect this information when you subscribe to our mailing list, make a purchase, contact us through the Site, or interact with us for any other purpose.
          </p>
          <p className="mt-4">
            We may also collect information about you from other individuals and organizations, and we may combine this information with any information that you provide to us.
          </p>
          <p className="mt-4">
            We (or authorized third parties on the Site) collect information relating to your interactions with us and our Site, including your IP address, browser type, domain names, access times, referring website addresses, and other information we collect through the use of cookies and similar technology. See the Digital Advertising &amp; Analytics section to learn more about the use of this information and the choices available to you.
          </p>
        </Section>

        <Section title="Information Use">
          <p>We may use your information for any lawful purpose, including the following:</p>
          <ul className="mt-4 space-y-2 pl-5">
            {[
              "To respond to your inquiries;",
              "To provide the products or information that you request;",
              "To operate, personalize, and improve the Site, including for analytics purposes;",
              "To send updates and other communications that may be of interest to you;",
              "To comply with the law and to maintain the security of our Site; or",
              "With your consent, or as otherwise disclosed at the time information is collected.",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Information Sharing">
          <p>We may share the information we collect with other parties, including the following:</p>
          <ul className="mt-4 space-y-2 pl-5">
            {[
              "Service providers or agents that perform activities for us, such as those for statistical analysis, payment processing, or sending you email or postal mail;",
              "As part of a change of corporate control or other transfer of all or part of our assets, including as part of a bankruptcy proceeding;",
              "Pursuant to a subpoena, court order, governmental inquiry, or other legal process or as otherwise required by law, or when needed in our judgment to protect our rights or the rights of third parties or for safety or security reasons;",
              "With your consent or as otherwise disclosed at the time of data collection or sharing.",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-700">
            Text messaging originator opt-in data and consent will not be shared with third parties, except with our third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf; if we believe disclosure is required by law; or you consent to our sharing of such information.
          </p>
          <p className="mt-4 text-gray-700">
            We may share information that has been anonymized or aggregated, without limitation.
          </p>
        </Section>

        <Section title="Digital Advertising &amp; Analytics">
          <p>
            We may partner with ad networks and other ad serving providers (&ldquo;Advertising Providers&rdquo;) that serve ads on behalf of us and others on non-affiliated platforms. Some of those ads may be personalized based on information Advertising Providers collect about your use of the Site and other sites or apps over time. This type of advertising is known as interest-based advertising.
          </p>
          <p className="mt-4">
            You may visit the DAA Webchoices tool at{" "}
            <a href="http://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-navy">
              www.aboutads.info
            </a>{" "}
            to learn more about this type of advertising and how to opt out.
          </p>
          <p className="mt-4">
            We may also work with third parties that collect data about your use of the Site for non-advertising purposes. We use Google Analytics and other third-party services to improve the performance of the Site. For more information about how Google Analytics collects and uses data, visit{" "}
            <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-navy">
              google.com/policies/privacy/partners
            </a>
            , and to opt out of Google Analytics, visit{" "}
            <a href="https://tools.google.com/dlpage/gaoptout/" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-navy">
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>
        </Section>

        <Section title="Third-Party Links and Tools">
          <p>
            The Site may provide links to third-party websites or apps, including our social media pages. We do not control the privacy practices of those websites or apps, and they are not covered by this privacy notice. You should review the privacy notices of other websites or apps that you use to learn about their data practices.
          </p>
          <p className="mt-4">
            The Site may also include integrated social media tools or &ldquo;plug-ins.&rdquo; If you use these tools to share personal information or interact with these features, those companies may collect information about you in accordance with your account settings.
          </p>
        </Section>

        <Section title="Your Choices">
          <p>
            To opt out of our email updates, you can use the link provided at the bottom of each message.
          </p>
          <p className="mt-4">
            You may also opt out or unsubscribe from future emails by sending a request to{" "}
            <a href="mailto:hello@WatchSleek.com" className="text-teal underline hover:text-navy">
              hello@WatchSleek.com
            </a>{" "}
            using the subject line &ldquo;Unsubscribe from email communications.&rdquo;
          </p>
        </Section>

        <Section title="Changes to Our Privacy Notice">
          <p>
            If our information practices change, we will post an updated version of this privacy notice. We encourage you to visit this page periodically to learn of any updates.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions, comments, or concerns about this privacy notice, please contact us at:{" "}
            <a href="mailto:hello@WatchSleek.com" className="text-teal underline hover:text-navy">
              hello@WatchSleek.com
            </a>
            .
          </p>
        </Section>

        {/* ── DIVIDER ── */}
        <div className="my-16 border-t-2 border-navy/10" />

        {/* ── TERMS OF SERVICE ── */}
        <h2 className="text-3xl font-black text-navy">Terms of Service</h2>
        <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-teal">Sleek Media</p>

        <div className="mt-6 rounded-lg border border-navy/20 bg-navy/5 px-6 py-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy">Please Read Carefully</p>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            By accessing or using this Site, you agree to be bound by the Terms and Conditions described herein. If you do not agree to all of these Terms, do not use this Site.
          </p>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) apply to your access to and use of the websites, mobile applications, and other online offerings (collectively, the &ldquo;Sites&rdquo;) provided by Sleek Media. We may make changes to these Terms from time to time. Your continued use of our Site after we provide notice of changes will confirm your acceptance of those changes.
        </p>

        <NumberedSection num="1" title="Privacy">
          For information about how we collect, use, share, and otherwise process information about you, please see our Privacy Policy above.
        </NumberedSection>

        <NumberedSection num="2" title="Consent to Use of Data and Mobile Communication; SMS Program Terms">
          <p>You consent to our communicating with you about the Site and Sleek Media by SMS, text message, e-mail, or other electronic means. Your carrier&apos;s normal messaging, data, and other rates and fees will apply to these communications.</p>
          <p className="mt-4">If you subscribe to any text programs that Sleek Media makes available: by subscribing, you consent to receive periodic updates or alerts by automatic text message. Text STOP to stop. For help, text HELP or contact us at hello@WatchSleek.com. Message and data rates may apply. Sleek Media may discontinue the program at any time without notice.</p>
        </NumberedSection>

        <NumberedSection num="3" title="User Content">
          <p>Our Site may allow you and other users to create, post, store, and share content including messages, comments, photos, videos, and other materials (collectively, &ldquo;User Content&rdquo;). Except for the license you grant below, you retain all rights in and to your User Content.</p>
          <p className="mt-4">If you submit any User Content to Sleek Media, you grant Sleek Media a nonexclusive, royalty-free, worldwide, fully paid, and sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in all media formats and channels now known or later developed, in connection with the Site and Sleek Media.</p>
          <p className="mt-4">Although we have no obligation to screen, edit, or monitor User Content, we may delete or remove User Content at any time and for any reason with or without notice.</p>
        </NumberedSection>

        <NumberedSection num="4" title="Prohibited Conduct and Content">
          <p>You will not violate any applicable law, contract, intellectual property right, or other third-party right in connection with any User Content you post to the Site. You will not:</p>
          <ul className="mt-4 space-y-2 pl-5">
            {[
              "Engage in any harassing, threatening, intimidating, predatory, or stalking conduct;",
              "Impersonate or post on behalf of any person or entity or misrepresent your affiliation with a person or entity;",
              "Sell, resell, or commercially use our Site;",
              "Copy, reproduce, distribute, or publicly display all or portions of our Site, except as expressly permitted;",
              "Modify our Site, remove any proprietary rights notices, or make derivative works based upon our Site;",
              "Use our Site in any manner that could interfere with, disrupt, or impair the functioning of our Site;",
              "Reverse engineer any aspect of our Site or bypass measures employed to prevent or limit access;",
              "Use any data mining, robots, or similar data gathering or extraction methods;",
              "Send, distribute, or post spam, unsolicited or bulk commercial electronic communications, chain letters, or pyramid schemes;",
              "Use our Site for any illegal or unauthorized purpose, or engage in, encourage, or promote any activity that violates these Terms.",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
        </NumberedSection>

        <NumberedSection num="5" title="Ownership; Limited License">
          The Site, including all text, graphics, images, photographs, videos, illustrations, and other content, are owned by Sleek Media or our licensors and are protected under United States and foreign laws. Subject to your compliance with these Terms, you are hereby granted a limited, nonexclusive, nontransferable, non-sublicensable, revocable license to access and use our Site for your own personal, noncommercial use.
        </NumberedSection>

        <NumberedSection num="6" title="Trademarks">
          Our logos, slogans, and the look and feel of the Site are trademarks of Sleek Media and may not be copied, imitated, or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names, or logos mentioned on the Site are the property of their respective owners.
        </NumberedSection>

        <NumberedSection num="7" title="Feedback">
          You may voluntarily post, submit, or otherwise communicate to us any questions, comments, suggestions, ideas, original or creative materials, or other information about Sleek Media or our Site (collectively, &ldquo;Feedback&rdquo;). You understand that we may use such Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you.
        </NumberedSection>

        <NumberedSection num="8" title="Repeat Infringer Policy; Copyright Complaints">
          In accordance with the Digital Millennium Copyright Act and other applicable law, we have adopted a policy of terminating, in appropriate circumstances, the accounts of users who repeatedly infringe the intellectual property rights of others. If you believe that anything on our Site infringes any copyright that you own or control, you may notify us at{" "}
          <a href="mailto:hello@WatchSleek.com" className="text-teal underline hover:text-navy">hello@WatchSleek.com</a>.
        </NumberedSection>

        <NumberedSection num="9" title="Third-Party Content, Products, and Sites">
          We may provide information about third-party organizations, events, products, services, or activities, or we may allow third parties to make their content and information available on or through the Site. Sleek Media does not control or endorse, and makes no representations or warranties regarding, any Third-Party Content. Your access to and use of such Third-Party Content is at your own risk.
        </NumberedSection>

        <NumberedSection num="10" title="Indemnification">
          To the fullest extent permitted by applicable law, you will indemnify, defend, and hold harmless Sleek Media, its employees, contractors, service providers, consultants, successor organizations, and each of their respective officers, directors, agents, partners, and employees from and against any losses, liabilities, claims, demands, damages, expenses, or costs arising out of or related to (a) your User Content or Feedback; (b) your violation of these Terms; (c) your violation, misappropriation, or infringement of any rights of another; or (d) your misconduct in connection with the Site.
        </NumberedSection>

        <NumberedSection num="11" title="Disclaimers">
          Your use of our Site is at your sole risk. Except as otherwise provided in a writing by us, our Site and any content therein are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
        </NumberedSection>

        <NumberedSection num="12" title="Limitation of Liability">
          To the fullest extent permitted by applicable law, Sleek Media and its contractors, service providers, consultants, and successor organizations will not be liable to you under any theory of liability for any indirect, consequential, exemplary, incidental, punitive, or special damages or lost profits. The total liability of Sleek Media for any claim arising out of or relating to these Terms is limited to the amount of compensation you pay, if any, to use or access the Sites.
        </NumberedSection>

        <NumberedSection num="13" title="Governing Law and Venue">
          Any dispute arising from these Terms and your use of the Site will be governed by and construed in accordance with the laws of the state where Sleek Media&apos;s headquarters is located, without regard to conflict of law rules. Any dispute between the parties will be resolved in the state or federal courts in the county in which Sleek Media&apos;s headquarters is located.
        </NumberedSection>

        <NumberedSection num="14" title="Modifying and Terminating Our Site">
          We reserve the right to modify our Site or to suspend or stop providing all or portions of our Site at any time. We are not responsible for any loss or harm related to your inability to access or use our Site.
        </NumberedSection>

        <NumberedSection num="15" title="Severability">
          If any provision or part of a provision of these Terms is unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions.
        </NumberedSection>

        <NumberedSection num="16" title="Miscellaneous">
          The failure of Sleek Media to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.
        </NumberedSection>

      </main>

      <Footer />
    </>
  );
}

/* ── Helpers ── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-black text-navy">{title}</h3>
      <div className="mt-1 h-0.5 w-10 bg-teal" />
      <div className="mt-4 text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function NumberedSection({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-black text-teal">{num}.</span>
        <h3 className="text-xl font-black text-navy">{title}</h3>
      </div>
      <div className="mt-1 ml-5 h-0.5 w-10 bg-teal" />
      <div className="mt-4 text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
