'use client';

import Navigation from '@/components/ui/Navigation';
import { PageBanner } from '@/components/ui/PageBanner';
import { H2, H3, Paragraph } from '@/components/ui/Typography';

export default function PrivacyPolicy() {
  const breadcrumbs = [
    { label: 'Home', href: '/en' },
    { label: 'Privacy Policy' }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      
      <PageBanner
        title="Privacy Policy"
        description="Protection and respect of your personal data"
        backgroundImage="/legals.jpg"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-8">
            <section>
              <Paragraph className="text-gray-700 mb-4">
                <strong>Last updated:</strong> [Date to be specified]
              </Paragraph>
              <Paragraph className="text-gray-700 mb-8">
                Derjani Group S.A.R.L ("we", "our" or "us") is committed to protecting and respecting your privacy. 
                This privacy policy explains how we collect, use and protect your personal information.
              </Paragraph>
            </section>

            <section>
              <H2 className="text-bordeaux-500 mb-6 text-xl md:text-2xl">1. Information We Collect</H2>
              
              <div className="mb-8">
                <H3 className="text-gray-900 mb-4 text-lg md:text-lg font-semibold">Information you provide to us directly:</H3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name, surname and contact information (email address, phone number)</li>
                  <li>Information about your company (name, sector, size)</li>
                  <li>Messages and communications you send us</li>
                  <li>Information contained in contact or quote request forms</li>
                </ul>
              </div>

              <div>
                <H3 className="text-gray-900 mb-4 text-lg md:text-lg font-semibold">Information collected automatically:</H3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>IP address and general location data</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and session duration</li>
                  <li>Navigation data (cookies and similar technologies)</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">2. How We Use Your Information</H2>
              <Paragraph className="text-gray-700 mb-4">
                We use your personal information to:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Respond to your inquiries and quote requests</li>
                <li>Provide our services and improve our website</li>
                <li>Send you information about our services (with your consent)</li>
                <li>Analyze website usage to improve it</li>
                <li>Comply with our legal and regulatory obligations</li>
                <li>Protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">3. Legal Basis for Processing</H2>
              <Paragraph className="text-gray-700 mb-4">
                We process your personal data based on:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Consent:</strong> When you agree to receive our marketing communications</li>
                <li><strong>Contract execution:</strong> To provide the services you request</li>
                <li><strong>Legitimate interest:</strong> To improve our services and website</li>
                <li><strong>Legal obligation:</strong> To comply with applicable regulations</li>
              </ul>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">4. Sharing Your Information</H2>
              <Paragraph className="text-gray-700 mb-4">
                We do not sell, rent or share your personal information with third parties, except in the following cases:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>With your explicit consent</li>
                <li>With our service providers (hosting, analytics) under confidentiality agreement</li>
                <li>To comply with a legal obligation or court decision</li>
                <li>To protect our rights, property or security</li>
              </ul>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">5. International Data Transfers</H2>
              <Paragraph className="text-gray-700">
                Your data may be transferred and stored in countries outside Lebanon. 
                We ensure that these transfers comply with appropriate protection standards in accordance with applicable regulations.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">6. Data Security</H2>
              <Paragraph className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal data against:
                loss, misuse, unauthorized access, disclosure, alteration and destruction.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">7. Data Retention</H2>
              <Paragraph className="text-gray-700">
                We retain your personal data only for as long as necessary for the purposes for which it was collected, 
                or according to applicable legal requirements. As a general rule:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                <li>Contact data: 3 years after last contact</li>
                <li>Navigation data: 13 months maximum</li>
                <li>Contractual data: contract duration + 5 years</li>
              </ul>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">8. Your Rights</H2>
              <Paragraph className="text-gray-700 mb-4">
                You have the following rights regarding your personal data:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Right of access:</strong> Obtain a copy of your personal data</li>
                <li><strong>Right of rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right of erasure:</strong> Request deletion of your data</li>
                <li><strong>Right to restriction:</strong> Limit the processing of your data</li>
                <li><strong>Right to portability:</strong> Receive your data in a structured format</li>
                <li><strong>Right to object:</strong> Object to the processing of your data</li>
                <li><strong>Right to withdraw consent:</strong> Withdraw your consent at any time</li>
              </ul>
              
              <Paragraph className="text-gray-700 mt-4">
                To exercise these rights, contact us at: <a href="mailto:contact@derjanigroup.com" className="text-bordeaux-500 hover:underline">contact@derjanigroup.com</a>
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">9. Cookies and Similar Technologies</H2>
              <Paragraph className="text-gray-700 mb-4">
                Our website uses cookies to:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Improve the functioning of our website</li>
                <li>Analyze traffic and performance</li>
                <li>Personalize your experience</li>
              </ul>
              <Paragraph className="text-gray-700 mt-4">
                You can manage your cookie preferences through your browser settings.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">10. Changes to This Policy</H2>
              <Paragraph className="text-gray-700">
                We may update this privacy policy from time to time. 
                The updated version will be published on this page with the last modification date.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">11. Contact Us</H2>
              <Paragraph className="text-gray-700">
                For any questions regarding this privacy policy or your personal data, contact us:
              </Paragraph>
              <div className="mt-4 text-gray-700">
                <p><strong>Derjani Group S.A.R.L</strong></p>
                <p>Email: <a href="mailto:contact@derjanigroup.com" className="text-bordeaux-500 hover:underline">contact@derjanigroup.com</a></p>
                <p>Address: Beirut, Lebanon</p>
                <p>Phone: +961 [number to be specified]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}