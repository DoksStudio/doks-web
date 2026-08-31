export default function ShippingPage() {
  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">

        <div className="mb-14 md:mb-20">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">ПРАВНА ИНФОРМАЦИЯ</p>
          <h1
            className="font-serif font-light text-obsidian leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Доставка &amp; Връщане
          </h1>
        </div>

        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
          <span className="tracking-editorial text-stone text-[0.6rem] font-sans">ДОКС СТУДИО ООД</span>
        </div>

        <div className="space-y-16 md:space-y-20">

          <section>
            <h2 className="font-serif font-light text-obsidian mb-8"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", letterSpacing: "-0.015em" }}>
              Правила за доставка
            </h2>
            <div className="border-t border-light-stone pt-8 space-y-4">
              <ul className="space-y-3 pl-4">
                {[
                  "Доставките се извършват чрез куриерските услуги на Спиди и Еконт.",
                  "За поръчки, приети до 14:00 ч. в работен ден, доставката се извършва в рамките на 1 до 2 работни дни (или съгласно графика за обслужване на населеното място).",
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
            <h2 className="font-serif font-light text-obsidian mb-8"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", letterSpacing: "-0.015em" }}>
              Право на отказ и връщане (14 дни)
            </h2>
            <div className="border-t border-light-stone pt-8 space-y-6">

              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Съгласно Закона за защита на потребителите, имате право да се откажете от закупената стока и да я върнете в срок от 14 календарни дни от датата на получаването ѝ, без да посочвате причина.
              </p>

              <div>
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">УСЛОВИЯ ЗА ВРЪЩАНЕ НА АРТИКУЛИ</h3>
                <ol className="space-y-3 pl-4 list-none">
                  {[
                    "Артикулът трябва да бъде в оригиналния си търговски вид – неупотребяван, непран, без странични миризми (напр. парфюм, цигарен дим), със запазени оригинални етикети и опаковка.",
                    "Към пратката трябва да бъде приложено доказателство за покупка (касова бележка, фактура или товарителница).",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-sans text-warm-gray text-sm font-light flex-shrink-0">{i + 1}.</span>
                      <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">КАК ДА НАПРАВИТЕ ВРЪЩАНЕ</h3>
                <ol className="space-y-3 pl-4 list-none">
                  <li className="flex items-start gap-3">
                    <span className="font-sans text-warm-gray text-sm font-light flex-shrink-0">1.</span>
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                      Свържете се с нас на имейл:{" "}
                      <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">office@doks-studio.eu</a>
                      , за да заявите желанието си за връщане.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-sans text-warm-gray text-sm font-light flex-shrink-0">2.</span>
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                      Изпратете артикула към нас на адрес: гр. София, ул. „Христо Белчев" № 5 (или офис на Спиди/Еконт по ваш избор), получател: „ДОКС СТУДИО" ООД, тел. 0897799842.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-sans text-warm-gray text-sm font-light flex-shrink-0">3.</span>
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                      Транспортните разходи за връщане са за сметка на клиента, освен в случаите на сгрешен или дефектен продукт.
                    </span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">ИЗКЛЮЧЕНИЯ ОТ ПРАВОТО НА ВРЪЩАНЕ</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light mb-3">Не подлежат на връщане:</p>
                <ul className="space-y-3 pl-4">
                  {[
                    "Продукти, изработени по индивидуална поръчка или персонализирани съобразно вашите изисквания.",
                    "Запечатани стоки от съображения за хигиена (напр. бельо, боксерки, чорапи), чиято защитна опаковка е разпечатана след доставката.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-sand flex-shrink-0 mt-[0.55rem]" />
                      <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">ВЪЗСТАНОВЯВАНЕ НА СУМИ</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  След като получим и проверим състоянието на върнатия артикул, ще ви уведомим по имейл. При одобрено връщане сумата се възстановява в срок до 14 дни по предоставена от вас банкова сметка (IBAN) или по първоначалния метод на плащане.
                </p>
              </div>

            </div>
          </section>

        </div>

        <div className="mt-20 pt-12 border-t border-light-stone">
          <p className="font-sans text-warm-gray text-sm leading-relaxed font-light">
            За въпроси и съдействие:{" "}
            <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">
              office@doks-studio.eu
            </a>
            {" "}| 0897799842
          </p>
        </div>
      </div>
    </div>
  );
}
