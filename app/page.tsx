import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import BrandStory from "@/components/BrandStory";
import FeaturedProducts from "@/components/FeaturedProducts";
import Lookbook from "@/components/Lookbook";
import TrustBar from "@/components/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <BrandStory />
      <FeaturedProducts />
      <Lookbook />
      <TrustBar />
    </>
  );
}
