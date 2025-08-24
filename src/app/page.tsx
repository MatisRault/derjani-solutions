import Hero, { ReassuranceBanner } from '@/components/ui/Hero';
import OfficesMap from '@/components/ui/OfficesMap';
import ServicesSection from '@/components/ui/ServicesSection';
import TeamSection from '@/components/ui/TeamSection';
import TrustBanner from '@/components/ui/TrustBanner';
import AboutSection from '@/components/ui/AboutSection';
import AboutSection2 from '@/components/ui/AboutSection2';
import FAQSection from '@/components/ui/FAQSection';
import ContactForm from '@/components/ui/ContactForm';
import ReassuranceBannerNew from '@/components/ui/ReassuranceBanner';
import GlobalContactModal from '@/components/ui/GlobalContactModal';

export default function Home() {
  return (
    <main>
      <Hero />
      <ReassuranceBanner />
      <ServicesSection />
      <TeamSection />
      <AboutSection />
      <AboutSection2 />
      <FAQSection />
      <TrustBanner />
      <OfficesMap />
      <ContactForm />
      <ReassuranceBannerNew />
      <GlobalContactModal />
    </main>
  );
}
