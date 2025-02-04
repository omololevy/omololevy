'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { PolicySection } from "@/types/policy";

const sections: PolicySection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `This Privacy Policy ("Policy") applies to kiungor website (the "Site"), app (the "App"), and KIUNGOR ("Company") and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to the Company include the Site and App. The Company's website and app are a Social Networking site and app. By using the Company website and app, you consent to the data practices described in this statement.`
  },
  {
    id: 'collection',
    title: 'Collection of your Personal Information',
    content: `In order to better provide you with products and services offered, the Company may collect personally identifiable information, such as your:
    \n- First and last name
    \n- Email address
    \n- Phone number
    \nThe Company may also collect anonymous demographic information, which is not unique to you, such as your:
    \n- Age
    \n- Gender
    \n- Country of Origin
    \nPlease keep in mind that if you directly disclose personally identifiable information or personally sensitive data through the Company's public message boards, this information may be collected and used by others.
    \nWe do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services.`
  },
  {
    id: 'use',
    title: 'Use of your Personal Information',
    content: `The Company collects and uses your personal information in the following ways:
    \n- to operate and deliver the services you have requested
    \n- to provide you with information, products, or services that you request from us
    \n- to provide you with notices about your account
    \n- to carry out the Company's obligations and enforce our rights arising from any contracts entered between you and us, including for billing and collection
    \n- to notify you about changes to our Site and App or any products or services we offer or provide through it
    \n- in any other way we may describe when you provide the information
    \n- for any other purpose with your consent
    \nThe Company may also use your personally identifiable information to inform you of other products or services available from the Company and its affiliates`
  },
  {
    id: 'sharing',
    title: 'Sharing Information with Third Parties',
    content: `The Company does not sell, rent, or lease its customer lists to third parties.
    \nThe Company may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to the Company, and they are required to maintain the confidentiality of your information.
    \nThe Company may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on the Company or the site; (b) protect and defend the rights or property of the Company; and/or (c) act under exigent circumstances to protect the personal safety of users of the Company, or the public.`
  },
  {
    id: 'tracking',
    title: 'Tracking User Behavior',
    content: `The Company may keep track of the websites and pages our users visit within the Company, in order to determine what the Company services are the most popular. This data is used to deliver customized content and advertising within the Company to customers whose behavior indicates that they are interested in a particular subject area.`
  },
  {
    id: 'cookies',
    title: 'Use of Cookies',
    content: `The Company's website and app may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
    \nOne of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the web server that you have returned to a specific page. For example, if you personalize the Company's pages, or register with Company's site or services, a cookie helps the Company to recall your specific information on subsequent visits.
    \nYou have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Company's services or websites you visit.`
  },
  {
    id: 'security',
    title: 'Security of your Personal Information',
    content: `The Company secures your personal information from unauthorized access, use, or disclosure. The Company uses the following methods for this purpose:
    \n- SSL Protocol
    \nWhen personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
    \nWe strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure.`
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: `The Company welcomes your questions or comments regarding this Policy. If you believe that the Company has not adhered to this Policy, please contact the Company at:
    \nKIUNGOR
    \nDelaware, USA
    \nEmail Address: service@kiungor.com
    \nEffective as of March 04, 2024`
  }
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <nav className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-[#05347e] text-white dark:bg-[#ffbd59] dark:text-[#05347e]'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>

          {/* Content Area */}
          <div className="flex-1">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeSection === section.id ? 1 : 0,
                  y: activeSection === section.id ? 0 : 20
                }}
                className={`space-y-4 ${
                  activeSection === section.id ? 'block' : 'hidden'
                }`}
              >
                <h2 className="text-2xl font-bold text-[#05347e] dark:text-[#ffbd59]">
                  {section.title}
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  {section.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
