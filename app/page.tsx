import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about';
import { ServicesCharter } from '@/components/services-charter';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <main className="overflow-hidden">
       <Hero />
      <AboutSection />
      <ServicesCharter />
      <ContactSection />
    </main>
  );
}