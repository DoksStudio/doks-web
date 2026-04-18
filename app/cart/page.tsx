import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const recommended = [
  { name: "Meridian Two-Piece Suit", category: "Костюми", price: "1 290 BGN", href: "/collection/suits/meridian-two-piece-suit", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80" },
  { name: "Riviera Sport Coat", category: "Сака", price: "890 BGN", href: "/collection/jackets/riviera-sport-coat", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Lisbon Slim Trouser", category: "Смарт Кежуъл", price: "390 BGN", href: "/collection/smart-casual/lisbon-slim-trouser", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80" },
];

export default function CartPage() {
  return (
    <div className="bg-chalk min-h-screen">

      {/* Editorial Hero */}
      <div className="relative w-full h-[55vh] min-h-[380px] bg-obsidian overflow-hidden">

        {/* Background pattern — subtle diagonal lines */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #EAE0D2 0px, #EAE0D2 1px, transparent 0px, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Decorative large text background */}
        <span
          className="absolute right-6 top-1/2 -translate-y-1/2 font-serif font-light text-chalk/[0.03] leading-none select-none pointer-events-none hidden lg:block"
          style={{ fontSize: "clamp(12rem, 28vw, 28rem)", letterSpacing: "-0.04em" }}
        >
          0
        </span>

        {/* Decorative line */}
        <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-sand/40 to-transparent hidden lg:block" />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-24 px-6 md:px-10 lg:px-16">
          <span className="tracking-editorial text-[0.575rem] text-chalk/30 font-sans">КОЛИЧКА</span>
        </div>

        {/* Title — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-10 flex items-end justify-between">
          <div>
            <p className="tracking-editorial text-sand/60 text-[0.55rem] font-sans mb-4">
              ДОКС СТУДИО — ТВОЯТА СЕЛЕКЦИЯ
            </p>
            <h1
              className="font-serif font-light text-chalk leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.025em" }}
            >
              Вашата
              <br />
              <span className="italic text-sand/80">Количка</span>
            </h1>
          </div>

          {/* Empty badge */}
          <div className="hidden md:flex flex-col items-end gap-2 pb-1">
            <div className="border border-chalk/15 px-4 py-2">
              <span className="tracking-editorial text-chalk/40 text-[0.55rem] font-sans">0 АРТИКУЛА</span>
            </div>
          </div>
        </div>
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center py-24 md:py-28 px-6 text-center border-b border-obsidian/8">
        <p className="font-serif font-light italic text-warm-gray mb-3"
          style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}>
          Количката е празна
        </p>
        <p className="font-sans text-stone text-sm font-light mb-10 max-w-xs leading-relaxed">
          Разгледайте нашата колекция и намерете перфектното парче за вас.
        </p>
        <Link
          href="/collection"
          className="group flex items-center gap-3 bg-obsidian text-chalk px-10 py-4 hover:bg-sand transition-all duration-500"
        >
          <span className="tracking-editorial text-[0.6rem] font-sans font-medium">РАЗГЛЕДАЙ КОЛЕКЦИЯТА</span>
          <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Recommended */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-obsidian/8" />
          <span className="tracking-editorial text-stone text-[0.55rem] font-sans">МОЖЕ ДА ВИ ХАРЕСА</span>
          <div className="flex-1 h-px bg-obsidian/8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommended.map((item) => (
            <Link key={item.name} href={item.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/10 group-hover:bg-obsidian/0 transition-colors duration-500" />
              </div>
              <p className="tracking-editorial text-stone text-[0.55rem] font-sans mb-1">{item.category}</p>
              <p className="font-serif font-light italic text-obsidian group-hover:opacity-60 transition-opacity duration-300"
                style={{ fontSize: "1.1rem" }}>
                {item.name}
              </p>
              <p className="font-sans text-stone text-sm mt-1">{item.price}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
