import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import BrandStory from "@/components/BrandStory";
import FeaturedProducts from "@/components/FeaturedProducts";
import Lookbook from "@/components/Lookbook";
import TrustBar from "@/components/TrustBar";

function DeliveryBanner() {
  return (
    <div className="bg-obsidian py-3.5 overflow-hidden">
      <div className="marquee-track">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="tracking-editorial text-[0.575rem] text-chalk/70 font-sans whitespace-nowrap px-10">
              БЕЗПЛАТНА ДОСТАВКА ЗА ПОРЪЧКИ НАД 99.99 € / 195.56 лв.
            </span>
            <span className="text-sand/40 text-xs flex-shrink-0">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <DeliveryBanner />
      <CategoryGrid />
      <BrandStory />
      <FeaturedProducts />
      <Lookbook />
      <TrustBar />
    </>
  );
}
