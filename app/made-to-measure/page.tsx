export default function MadeToMeasurePage() {
  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">

        <div className="mb-14 md:mb-20">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">УСЛУГИ</p>
          <h1
            className="font-serif font-light text-obsidian leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Облекла по поръчка
            <br />
            <span className="italic text-warm-gray">(Made to measure)</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
          <span className="tracking-editorial text-stone text-[0.6rem] font-sans">ДОКС СТУДИО ООД</span>
        </div>

        {/*
          Image placeholder — replace with:
          <div className="relative w-full aspect-[16/9] mb-14 md:mb-20 overflow-hidden bg-obsidian/5">
            <Image src="/path-to-client-photo.jpg" alt="Ушиване по мярка" fill className="object-cover" />
          </div>
        */}

        <div className="space-y-8 font-sans text-warm-gray text-sm leading-[1.9] font-light max-w-2xl">
          <p>
            На най-взискателните си клиенти предлагаме ушиване на костюми и сака по мярка. Разполагаме с голям избор от италиански платове – вълна, лен или памук.
          </p>
          <p>
            За консултация, подробности или уговорка на час, пишете на{" "}
            <a
              href="mailto:office@doks-studio.eu"
              className="text-obsidian underline underline-offset-2 hover:opacity-60 transition-opacity duration-200"
            >
              office@doks-studio.eu
            </a>
            {" "}или се обадете на{" "}
            <a
              href="tel:+359885252320"
              className="text-obsidian underline underline-offset-2 hover:opacity-60 transition-opacity duration-200"
            >
              +359885252320
            </a>
            . Адрес за поръчки: София 1000, ул. Христо Белчев 5
          </p>
        </div>

      </div>
    </div>
  );
}
