import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import BrandStory from "@/components/BrandStory";
import Lookbook from "@/components/Lookbook";
import TrustBar from "@/components/TrustBar";
import DeliveryBanner from "@/components/DeliveryBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DeliveryBanner />
      <CategoryGrid />
      <BrandStory />
      <Lookbook />
      <TrustBar />
    </>
  );
}
