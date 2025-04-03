import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import ProfileSection from "@/components/ProfileSection";
import StructureSection from "@/components/StructureSection";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <ProfileSection />
      <StructureSection />
      <ServicesSection />
      <NewsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
