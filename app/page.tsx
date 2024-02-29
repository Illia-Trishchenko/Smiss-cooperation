import AdvantagesSection from "./components/AdvantagesSection";
import AgencyIntroductionSection from "./components/AgencyIntroductionSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import HeaderSection from "./components/HeaderSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <AgencyIntroductionSection />
      <GallerySection />
      <ServicesSection />
      <AdvantagesSection />
      <ContactSection />
    </main>
  );
}
