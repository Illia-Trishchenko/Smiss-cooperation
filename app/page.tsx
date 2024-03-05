import AdvantagesSection from "./components/AdvantagesSection";
import AgencyIntroductionSection from "./components/AgencyIntroductionSection";
import ContactSection from "./components/ContactSection";
import CustomersSection from "./components/CustomersSection/CustomersSection";
import HeaderSection from "./components/HeaderSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <AgencyIntroductionSection />
      <ServicesSection />
      <CustomersSection />
      <AdvantagesSection />
      <ContactSection />
    </main>
  );
}
