import Hero from '@/components/ui/Hero';
import Navigation from '@/components/ui/Navigation';
import OfficesMap from '@/components/ui/OfficesMap';
import ServicesSection from '@/components/ui/ServicesSection';
import TeamSection from '@/components/ui/TeamSection';
import TrustBanner from '@/components/ui/TrustBanner';
import AboutSection from '@/components/ui/AboutSection';
import AboutSection2 from '@/components/ui/AboutSection2';
import FAQSection from '@/components/ui/FAQSection';
import ContactForm from '@/components/ui/ContactForm';
import ReassuranceBanner from '@/components/ui/ReassuranceBanner';
import ReassuranceBannerNew from '@/components/ui/ReassuranceBannerNew';
import GlobalContactModal from '@/components/ui/GlobalContactModal';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ReassuranceBannerNew />
      <ServicesSection />
      <TeamSection />
      <AboutSection />
      <AboutSection2 />
      <FAQSection />
      <TrustBanner />
      <OfficesMap />
      <ContactForm />
      <ReassuranceBanner />
      <GlobalContactModal />
    </main>
  );
}
