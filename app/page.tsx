import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import PaymentSection from '@/components/PaymentSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SportsSection from '@/components/SportsSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <PaymentSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SportsSection />
      <AboutSection />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
