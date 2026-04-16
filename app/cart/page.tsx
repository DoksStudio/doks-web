import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-4xl">

        <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">
          КОЛИЧКА
        </p>
        <h1
          className="font-serif font-light text-obsidian leading-[1.05] mb-14 md:mb-20"
          style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", letterSpacing: "-0.025em" }}
        >
          Вашата
          <br />
          <span className="italic text-warm-gray">Количка</span>
        </h1>

        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
        </div>

        {/* Empty state */}
        <div className="flex flex-col items-center py-20 text-center">
          <ShoppingBag size={40} strokeWidth={1} className="text-stone mb-6" />
          <p className="font-sans text-stone text-sm mb-8">Количката ви е празна.</p>
          <Link
            href="/collection"
            className="tracking-editorial text-[0.6rem] font-sans font-medium text-obsidian border border-obsidian px-8 py-3 hover:bg-obsidian hover:text-chalk transition-all duration-300"
          >
            РАЗГЛЕДАЙ КОЛЕКЦИЯТА
          </Link>
        </div>

      </div>
    </div>
  );
}
