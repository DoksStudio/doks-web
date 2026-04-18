"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, ArrowUpRight, Phone } from "lucide-react";
import StoresMap from "@/components/StoresMap";

const stores = [
  {
    id: 1,
    name: "Граф Игнатиев",
    tag: "Централен офис",
    address: "ул. Граф Игнатиев 64-66",
    city: "София 1142",
    phone: "0888 809 780",
    hours: [
      { days: "Пон – Събота", time: "10:30 – 19:30" },
      { days: "Неделя", time: "11:00 – 18:00" },
    ],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80",
    lat: 42.6953,
    lng: 23.3308,
    mapsQuery: "ул.+Граф+Игнатиев+64-66+София+България",
  },
  {
    id: 2,
    name: "Иван Шишман",
    tag: "",
    address: "ул. Цар Шишман 7",
    city: "София 1000",
    phone: "0888 998 846",
    hours: [
      { days: "Пон – Събота", time: "10:30 – 19:30" },
      { days: "Неделя", time: "11:00 – 18:00" },
    ],
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=900&q=80",
    lat: 42.7002,
    lng: 23.3263,
    mapsQuery: "ул.+Цар+Шишман+7+София+България",
  },
  {
    id: 3,
    name: "Христо Белчев",
    tag: "",
    address: "ул. Христо Белчев 5",
    city: "София 1000",
    phone: "0888 996 255",
    hours: [
      { days: "Пон – Събота", time: "10:30 – 19:30" },
      { days: "Неделя", time: "11:00 – 18:00" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    lat: 42.6940,
    lng: 23.3195,
    mapsQuery: "ул.+Христо+Белчев+5+София+България",
  },
  {
    id: 4,
    name: "Бул. Мадрид",
    tag: "",
    address: "бул. Мадрид",
    city: "София 1505",
    phone: "0888 998 846",
    hours: [
      { days: "Пон – Пет", time: "10:30 – 19:30" },
      { days: "Събота", time: "10:30 – 15:00" },
      { days: "Неделя", time: "Затворено" },
    ],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80",
    lat: 42.7105,
    lng: 23.2790,
    mapsQuery: "бул.+Мадрид+София+Оборище+България",
  },
];

function StoreCard({
  store,
  index,
  isActive,
  onHover,
}: {
  store: typeof stores[0];
  index: number;
  isActive: boolean;
  onHover: (id: number | null) => void;
}) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${store.mapsQuery}`;

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHover(store.id)}
      onMouseLeave={() => onHover(null)}
      className={`group block bg-chalk border border-obsidian/8 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(10,10,10,0.10)] ${
        isActive ? "shadow-[0_12px_40px_rgba(10,10,10,0.10)] -translate-y-0.5" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal">
        <Image
          src={store.image}
          alt={store.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/10 transition-colors duration-500" />

        {/* Number */}
        <span className="absolute top-6 left-6 font-serif text-chalk/30 font-light text-4xl leading-none select-none">
          0{index + 1}
        </span>

        {/* Tag badge */}
        {store.tag && (
          <span className="absolute top-6 right-6 tracking-editorial text-[0.5rem] font-sans font-medium bg-chalk text-obsidian px-3 py-1.5 uppercase">
            {store.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-7 md:p-8">
        {/* Name */}
        <h3
          className="font-serif font-light text-obsidian italic mb-5 leading-none"
          style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
        >
          {store.name}
        </h3>

        <div className="w-8 h-px bg-sand mb-5" />

        {/* Address */}
        <div className="flex items-start gap-3 mb-4">
          <MapPin size={13} strokeWidth={1.5} className="text-stone mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-sans text-obsidian text-sm leading-snug">{store.address}</p>
            <p className="font-sans text-stone text-sm">{store.city}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 mb-4">
          <Phone size={13} strokeWidth={1.5} className="text-stone flex-shrink-0" />
          <a
            href={`tel:${store.phone.replace(/\s/g, "")}`}
            onClick={(e) => e.stopPropagation()}
            className="font-sans text-obsidian text-sm hover:opacity-50 transition-opacity duration-200"
          >
            {store.phone}
          </a>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3 mb-7">
          <Clock size={13} strokeWidth={1.5} className="text-stone mt-0.5 flex-shrink-0" />
          <div className="space-y-0.5">
            {store.hours.map((h) => (
              <div key={h.days} className="flex gap-3">
                <span className="font-sans text-stone text-[0.75rem] w-28 flex-shrink-0">{h.days}</span>
                <span className="font-sans text-obsidian text-[0.75rem]">{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="tracking-editorial text-[0.575rem] font-sans font-medium text-obsidian uppercase group-hover:opacity-60 transition-opacity duration-300">
            Упътване
          </span>
          <div className="w-8 h-8 border border-obsidian/20 rounded-full flex items-center justify-center group-hover:border-obsidian/60 group-hover:bg-obsidian transition-all duration-300">
            <ArrowUpRight
              size={12}
              strokeWidth={1.5}
              className="text-obsidian group-hover:text-chalk transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function StoresPage() {
  const [activeStore, setActiveStore] = useState<number | null>(null);

  return (
    <div className="bg-chalk min-h-screen">
      {/* Editorial Hero */}
      <div className="relative w-full h-[55vh] min-h-[380px] bg-obsidian overflow-hidden">
        <Image
          src="/Web Photos/Photo5.jpg"
          alt="Докс Студио Магазини"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-obsidian/30" />

        {/* Big background text */}
        <span
          className="absolute right-8 top-1/2 -translate-y-1/2 font-serif font-light text-chalk/5 leading-none select-none pointer-events-none hidden lg:block"
          style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        >
          04
        </span>

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-24 px-6 md:px-10 lg:px-16">
          <span className="tracking-editorial text-[0.575rem] text-chalk/50 font-sans">
            SOFIA, BULGARIA — 4 МАГАЗИНА
          </span>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-16 pb-10 flex items-end justify-between">
          <div>
            <h1
              className="font-serif font-light text-chalk leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.025em" }}
            >
              НАШИТЕ
              <br />
              <span className="italic">Магазини</span>
            </h1>
            <p className="font-sans text-chalk/50 text-sm font-light max-w-sm leading-relaxed mt-3 hidden md:block">
              Посетете ни на място, усетете тъканите, намерете своята кройка.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="font-serif font-light text-chalk/20 leading-none" style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
              04
            </p>
            <p className="tracking-editorial text-chalk/30 text-[0.55rem] font-sans mt-1">МАГАЗИНА</p>
          </div>
        </div>
      </div>

      {/* Store grid */}
      <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-28 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {stores.map((store, i) => (
            <StoreCard
              key={store.id}
              store={store}
              index={i}
              isActive={activeStore === store.id}
              onHover={setActiveStore}
            />
          ))}
        </div>
      </section>

      {/* Map section */}
      <section className="px-6 md:px-10 lg:px-16 pb-28 md:pb-36 max-w-5xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-4">
            НА КАРТАТА
          </p>
          <h2
            className="font-serif font-light text-obsidian leading-none"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.02em" }}
          >
            Намерете ни
            <br />
            <span className="italic text-warm-gray">в София</span>
          </h2>
        </div>

        <div className="overflow-hidden border border-obsidian/8">
          <StoresMap
            stores={stores}
            activeStore={activeStore}
            onMarkerClick={setActiveStore}
          />
        </div>

      </section>
    </div>
  );
}
