export default function CookiesPage() {
  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">

        <div className="mb-14 md:mb-20">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">ПРАВНА ИНФОРМАЦИЯ</p>
          <h1
            className="font-serif font-light text-obsidian leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Политика за бисквитки
          </h1>
        </div>

        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
          <span className="tracking-editorial text-stone text-[0.6rem] font-sans">ДОКС СТУДИО ООД</span>
        </div>

        <div className="space-y-12">

          <section>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Този уебсайт използва „бисквитки" (cookies), за да подобри потребителското изживяване.
              </p>
            </div>
          </section>

          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">КАКВО ПРЕДСТАВЛЯВАТ БИСКВИТКИТЕ?</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Бисквитките са малки текстови файлове, съхранявани на Вашето устройство, когато посещавате нашия сайт. Те помагат за разпознаване на устройството Ви и за запомняне на определени предпочитания.
              </p>
            </div>
          </section>

          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">КАКВИ БИСКВИТКИ ИЗПОЛЗВАМЕ?</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <ul className="space-y-2 pl-4">
                {[
                  "Задължителни бисквитки – необходими за функционирането на сайта",
                  "Функционални бисквитки – за запомняне на предпочитания",
                  "Аналитични бисквитки – Google Analytics или подобни инструменти (само със съгласие)",
                  "Маркетингови бисквитки – за персонализирана реклама (само със съгласие)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-sand flex-shrink-0 mt-[0.55rem]" />
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">УПРАВЛЕНИЕ НА БИСКВИТКИ</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Можете да контролирате или изтривате бисквитките чрез настройките на Вашия браузър. Може също да откажете бисквитки чрез банер при първо посещение.
              </p>
            </div>
          </section>

          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">СЪГЛАСИЕ</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                С използването на нашия сайт Вие се съгласявате с използването на бисквитки в съответствие с настоящата политика. Имате право да оттеглите съгласието си по всяко време.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-20 pt-12 border-t border-light-stone">
          <p className="font-sans text-warm-gray text-sm leading-relaxed font-light">
            ДОКС СТУДИО ООД |{" "}
            <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">
              office@doks-studio.eu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
