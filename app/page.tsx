import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import DoctorProfile from '@/components/sections/DoctorProfile';
import ServicesSection from '@/components/sections/ServicesSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import Gallery from '@/components/sections/Gallery';
import AppointmentSection from '@/components/sections/AppointmentSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctorProfile />
        <ServicesSection />
        <BeforeAfterSection />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
