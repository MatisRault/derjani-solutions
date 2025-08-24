'use client';

import Navigation from '@/components/ui/Navigation';
import { PageBanner } from '@/components/ui/PageBanner';
import { H2, H3, Paragraph } from '@/components/ui/Typography';

export default function TermsConditions() {
  const breadcrumbs = [
    { label: 'Home', href: '/en' },
    { label: 'Terms & Conditions' }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      
      <PageBanner
        title="Terms and Conditions"
        description="Our sales terms and contractual conditions"
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
                These Terms and Conditions (T&C) govern the contractual relationships between 
                Derjani Group S.A.R.L, a Lebanese company, and its professional clients.
              </Paragraph>
            </section>

            <section>
              <H2 className="text-bordeaux-500 mb-6 text-xl md:text-2xl">1. Scope of Application</H2>
              <Paragraph className="text-gray-700 mb-4">
                These Terms and Conditions apply to all service provisions and sales of goods carried out by Derjani Group, including:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Construction and civil engineering services</li>
                <li>Supply and installation of power generation equipment</li>
                <li>Security services and equipment</li>
                <li>Equipment and vehicle supply</li>
                <li>Technical and maintenance services</li>
                <li>Human resources services</li>
              </ul>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">2. Quotes and Orders</H2>
              
              <div className="mb-6">
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">2.1 Quotes</H3>
                <Paragraph className="text-gray-700">
                  All our quotes are provided free of charge and are valid for 30 days unless otherwise stated. 
                  They are personalized according to client specifications and form the basis of our contractual commitment.
                </Paragraph>
              </div>

              <div>
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">2.2 Orders</H3>
                <Paragraph className="text-gray-700">
                  Any order implies full and unreserved adherence by the client to these Terms and Conditions. 
                  The signature of the quote or purchase order by the client constitutes definitive acceptance of the order.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">3. Prices and Payment Terms</H2>
              
              <div className="mb-6">
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">3.1 Prices</H3>
                <Paragraph className="text-gray-700">
                  Prices are expressed in US dollars (USD) or local currency as agreed, excluding taxes. 
                  They include only the services expressly mentioned in the quote.
                </Paragraph>
              </div>

              <div className="mb-6">
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">3.2 Payment Terms</H3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>30% deposit upon order</li>
                  <li>40% upon delivery or start of work</li>
                  <li>30% balance within 30 days following completion of services</li>
                </ul>
                <Paragraph className="text-gray-700 mt-4">
                  Other payment terms may be agreed upon by written agreement between the parties.
                </Paragraph>
              </div>

              <div>
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">3.3 Late Payment</H3>
                <Paragraph className="text-gray-700">
                  Any late payment automatically results in the application of late payment interest at the rate of 1.5% per month, 
                  as well as a fixed recovery fee of $40.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">4. Execution Deadlines</H2>
              <Paragraph className="text-gray-700 mb-4">
                Execution deadlines are given as indication and run from receipt of the deposit and all elements necessary for service execution.
              </Paragraph>
              <Paragraph className="text-gray-700">
                A delay in execution can only give rise to damages, excluding any other compensation. 
                The client may only claim damages in case of delay exceeding 30% of the initially planned deadline.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">5. Delivery and Acceptance</H2>
              
              <div className="mb-6">
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">5.1 Delivery Terms</H3>
                <Paragraph className="text-gray-700">
                  Deliveries are made to the address indicated by the client. Risks are transferred to the client upon delivery of goods to the carrier or upon on-site delivery according to agreed terms.
                </Paragraph>
              </div>

              <div>
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">5.2 Acceptance</H3>
                <Paragraph className="text-gray-700">
                  The client has 8 working days from delivery to formulate written reservations. 
                  After this period, goods are deemed compliant and definitively accepted.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">6. Warranties</H2>
              
              <div className="mb-6">
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">6.1 Legal Warranty</H3>
                <Paragraph className="text-gray-700">
                  Derjani Group warrants its services and supplies against any design, manufacturing, or material defect for a period of 12 months from acceptance.
                </Paragraph>
              </div>

              <div className="mb-6">
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">6.2 Warranty Exclusions</H3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Normal wear and tear of equipment</li>
                  <li>Misuse or deficient maintenance</li>
                  <li>Modifications made by the client or third parties</li>
                  <li>Force majeure or fortuitous cases</li>
                </ul>
              </div>

              <div>
                <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">6.3 Warranty Implementation</H3>
                <Paragraph className="text-gray-700">
                  The warranty is exercised by free repair or replacement of defective elements, 
                  excluding any other compensation.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">7. Liability</H2>
              <Paragraph className="text-gray-700 mb-4">
                Derjani Group's liability is limited to direct damages and cannot exceed the contract amount. 
                Indirect damages are expressly excluded such as:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Loss of operation or revenue</li>
                <li>Loss of clientele or profits</li>
                <li>Any commercial disruption</li>
              </ul>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">8. Force Majeure</H2>
              <Paragraph className="text-gray-700">
                All facts or circumstances that are irresistible, external to the parties, 
                unforeseeable and independent of their will are considered force majeure cases. The affected party must notify the occurrence of such an event within 15 days.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">9. Intellectual Property</H2>
              <Paragraph className="text-gray-700 mb-4">
                Derjani Group remains the owner of all its intellectual property rights on:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Studies, drawings, plans and methods developed</li>
                <li>Know-how and techniques used</li>
                <li>Software and tools developed</li>
              </ul>
              <Paragraph className="text-gray-700 mt-4">
                The client is prohibited from any reproduction, representation or exploitation of these elements without prior written authorization.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">10. Confidentiality</H2>
              <Paragraph className="text-gray-700">
                The parties undertake to preserve the confidentiality of all information exchanged within the framework of their commercial relationship. 
                This commitment lasts 5 years after the end of contractual relations.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">11. Termination</H2>
              <Paragraph className="text-gray-700 mb-4">
                In case of serious breach by one of the parties to its obligations, the other party may terminate the contract by right after formal notice remaining unsuccessful for 30 days.
              </Paragraph>
              <Paragraph className="text-gray-700">
                Termination does not affect claims arising prior to its effective date.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">12. Data Protection</H2>
              <Paragraph className="text-gray-700">
                Personal data processing is carried out in accordance with our 
                <a href="/en/privacy-policy" className="text-bordeaux-500 hover:underline ml-1">Privacy Policy</a>, 
                which is an integral part of these Terms and Conditions.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">13. Applicable Law and Disputes</H2>
              <Paragraph className="text-gray-700 mb-4">
                These Terms and Conditions are subject to Lebanese law. Any dispute relating to their interpretation or execution falls under the exclusive jurisdiction of Beirut courts.
              </Paragraph>
              <Paragraph className="text-gray-700">
                Prior to any contentious recourse, the parties endeavor to resolve their differences amicably. 
                Failing that, they may resort to mediation or arbitration.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">14. General Provisions</H2>
              <Paragraph className="text-gray-700 mb-4">
                If a provision of these Terms and Conditions were declared null or inapplicable, 
                the other provisions would retain all their force and scope.
              </Paragraph>
              <Paragraph className="text-gray-700">
                These Terms and Conditions cancel and replace all previous conditions. 
                They can only be modified by written amendment signed by both parties.
              </Paragraph>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">15. Contact</H2>
              <Paragraph className="text-gray-700">
                For any questions regarding these Terms and Conditions:
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