'use client';

import Navigation from '@/components/ui/Navigation';
import { PageBanner } from '@/components/ui/PageBanner';
import { H2, H3, Paragraph } from '@/components/ui/Typography';

export default function LegalNotice() {
  const breadcrumbs = [
    { label: 'Home', href: '/en' },
    { label: 'Legal Notice' }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />
      
      <PageBanner
        title="Legal Notice"
        description="Legal and regulatory information about Derjani Group"
        backgroundImage="/legals.jpg"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-8">
            <section>
              <H2 className="text-bordeaux-500 mb-6 text-xl md:text-2xl">Legal Information</H2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Corporate Name</H3>
                  <Paragraph className="text-gray-700">
                    Derjani Group S.A.R.L<br />
                    Limited Liability Company
                  </Paragraph>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Headquarters</H3>
                  <Paragraph className="text-gray-700">
                    Beirut, Lebanon<br />
                    [Complete address to be specified]
                  </Paragraph>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Contact</H3>
                  <Paragraph className="text-gray-700">
                    Phone: +961 [number to be specified]<br />
                    Email: contact@derjanigroup.com
                  </Paragraph>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <H3 className="text-gray-900 mb-3 text-lg md:text-lg font-semibold">Registration Number</H3>
                  <Paragraph className="text-gray-700">
                    [Commercial registration number in Lebanon to be specified]
                  </Paragraph>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Publication Director</H2>
              <div className="bg-bordeaux-50 rounded-lg p-6">
                <Paragraph className="text-gray-700">
                  [Name of publication director]<br />
                  Manager of Derjani Group S.A.R.L
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Website Hosting</H2>
              <div className="bg-gray-50 rounded-lg p-6">
                <Paragraph className="text-gray-700">
                  This website is hosted by [Host name]<br />
                  [Host address]<br />
                  [Host country]
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Intellectual Property</H2>
              <div className="space-y-4">
                <Paragraph className="text-gray-700">
                  This entire website is subject to Lebanese and international legislation on copyright and intellectual property.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.
                </Paragraph>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <Paragraph className="text-gray-700">
                    <strong>Important:</strong> The reproduction of all or part of this site on any electronic medium whatsoever is formally prohibited without express authorization from the publication director.
                  </Paragraph>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Limitation of Liability</H2>
              <div className="space-y-4">
                <Paragraph className="text-gray-700">
                  The information contained on this site is as accurate as possible and the site is periodically updated, but may nevertheless contain inaccuracies, omissions or gaps.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  If you notice a gap, error or what appears to be a malfunction, please report it by email describing the problem as precisely as possible.
                </Paragraph>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <Paragraph className="text-gray-700">
                    <strong>Disclaimer:</strong> Derjani Group disclaims any responsibility regarding the information disseminated on this site.
                  </Paragraph>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Applicable Law and Competent Jurisdiction</H2>
              <div className="bg-bordeaux-50 rounded-lg p-6">
                <Paragraph className="text-gray-700">
                  Any dispute relating to the use of the website www.derjanigroup.com is subject to Lebanese law. 
                  Exclusive jurisdiction is attributed to the competent courts of Beirut.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Hyperlinks</H2>
              <div className="space-y-4">
                <Paragraph className="text-gray-700">
                  Internet sites may offer links to other internet sites or other resources available on the Internet. 
                  Derjani Group has no means to control the sites connected to its internet sites.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  Derjani Group does not answer for the availability of such external sites and sources, nor does it guarantee it. 
                  It cannot be held responsible for any damage, of any nature whatsoever, resulting from the content of these external sites or sources.
                </Paragraph>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <H2 className="text-bordeaux-500 mb-4 text-xl md:text-2xl">Collection and Processing of Personal Data</H2>
              <div className="bg-blue-50 rounded-lg p-6">
                <Paragraph className="text-gray-700 mb-4">
                  In accordance with the provisions of Lebanese law and international regulations on the protection of personal data, 
                  you have a right of access, rectification, deletion and opposition to the processing of your personal data.
                </Paragraph>
                <Paragraph className="text-gray-700">
                  For more information, consult our <a href="/en/privacy-policy" className="text-bordeaux-500 hover:underline font-medium">Privacy Policy</a>.
                </Paragraph>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}