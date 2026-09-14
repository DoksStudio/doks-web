export default function AlterationsPage() {
  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">

        <div className="mb-14 md:mb-20">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">УСЛУГИ</p>
          <h1
            className="font-serif font-light text-obsidian leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Корекции
          </h1>
        </div>

        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
          <span className="tracking-editorial text-stone text-[0.6rem] font-sans">ДОКС СТУДИО ООД</span>
        </div>

        <div className="space-y-8 font-sans text-warm-gray text-sm leading-[1.9] font-light max-w-2xl">
          <p>
            При нужда, за удобство на клиентите предлагаме корекции на закупените облекла. Скъсяваме дължини и ръкави на сака и ризи. Отпускаме, вталяваме и подгъваме панталони. Персоналът е обучен да консултира за допустимите стойности.
          </p>
        </div>

      </div>
    </div>
  );
}
