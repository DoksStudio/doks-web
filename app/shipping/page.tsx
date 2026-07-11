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

          {/* Delivery */}
          <section>
            <h2 className="font-serif font-light text-obsidian mb-8"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", letterSpacing: "-0.015em" }}>
              Правила за извършване на доставка
            </h2>
            <div className="border-t border-light-stone pt-8 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Доставките се извършват с куриерските услуги на Спиди, Еконт.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                За поръчки, приети до 14:00 ч. в работен ден, доставката е в рамките на 2 работни дни или според упоменатите срокове за доставка в Общите условия за използване.
              </p>
            </div>
          </section>

          {/* Refund */}
          <section>
            <h2 className="font-serif font-light text-obsidian mb-8"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", letterSpacing: "-0.015em" }}>
              Правила за възстановяване на суми
            </h2>
            <div className="border-t border-light-stone pt-8 space-y-6">

              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Имаме 30-дневно правило за връщане, което означава, че имате 30 дни след получаване на вашия артикул, за да поискате възстановяване на сумата.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                За да отговаря на условията за връщане, вашият артикул трябва да бъде в същото състояние, в което сте го получили, неупотребяван или неизползван, с етикети и в оригиналната си опаковка. Ще ви е необходима и касова бележка или доказателство за покупка.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                За да започнете връщане, свържете се с нас на{" "}
                <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">office@doks-studio.eu</a>.
                {" "}Моля, имайте предвид, че върнатите артикули трябва да бъдат изпратени на следния адрес: [INSERT RETURN ADDRESS]
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Ако връщането ви бъде прието, ние ще ви изпратим етикет за обратна доставка, както и инструкции как и къде да изпратите вашия пакет. Артикулите, изпратени обратно до нас без първо да поискате връщане, няма да бъдат приети.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Винаги можете да се свържете с нас за всеки въпрос за връщане на{" "}
                <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">office@doks-studio.eu</a>.
              </p>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">ПОВРЕДИ И ПРОБЛЕМИ</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  Моля, проверете поръчката си при получаване и се свържете с нас незабавно, ако артикулът е дефектен, повреден или ако получите грешен артикул, за да можем да оценим проблема и да го коригираме.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">ИЗКЛЮЧЕНИЯ / АРТИКУЛИ, КОИТО НЕ ПОДЛЕЖАТ НА ВРЪЩАНЕ</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  Някои видове артикули не могат да бъдат върнати, като нетрайни стоки (като храна, цветя или растения), продукти по поръчка (като специални поръчки или персонализирани артикули) и стоки за лична хигиена (като козметични продукти). Също така не приемаме връщане на опасни материали, запалими течности или газове. Моля, свържете се с нас, ако имате въпроси или притеснения относно вашия конкретен артикул.
                </p>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light mt-3">
                  За съжаление не можем да приемем връщания на артикули от разпродажба или карти за подарък.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">ЗАМЕНИ</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  Най-бързият начин да сте сигурни, че ще получите това, което искате, е да върнете артикула, който имате, и след като връщането бъде прието, да направите отделна покупка за новия артикул.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">14-ДНЕВЕН ПЕРИОД НА ИЗЧАКВАНЕ ЗА ЕС</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  Независимо от горното, ако стоката се изпраща в Европейския съюз, имате право да анулирате или върнете поръчката си в рамките на 14 дни, по каквато и да е причина и без обосновка. Както е посочено по-горе, вашият артикул трябва да бъде в същото състояние, в което сте го получили, неупотребяван или неизползван, с етикети и в оригиналната си опаковка. Ще ви е необходима и касова бележка или доказателство за покупка.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">ВЪЗСТАНОВЯВАНЕ НА СУМИТЕ</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  Ще ви уведомим, след като получим и проверим връщането ви и ще ви уведомим дали възстановяването на сумата е одобрено, или не. Ако бъде одобрено, сумата ще ви бъде възстановена автоматично по първоначалния ви метод на плащане в рамките на 10 работни дни. Моля, не забравяйте, че обработката и извършването на възстановяването може да отнеме известно време на вашата банка или компания за кредитни карти.
                </p>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light mt-3">
                  Ако са изминали повече от 15 работни дни, откакто сме одобрили връщането ви, моля, свържете се с нас на{" "}
                  <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">office@doks-studio.eu</a>.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">НАШАТА ГАРАНЦИЯ: ВАШЕТО СПОКОЙСТВИЕ</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  Надяваме се, че сте доволни от поръчката си. Ако по някаква причина желаете да върнете продукт, по-долу ще откриете информация относно вашите права при покупка от онлайн магазина ни www.doks-studio.eu.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">ПРАВО НА ОТКАЗ (14 ДНИ ПО ЗАКОН)</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  Съгласно Закона за защита на потребителите, имате право да се откажете от направена онлайн покупка в срок от 14 дни от получаването ѝ, без да посочвате причина.
                </p>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light mt-3">
                  Важно: Правото на отказ не се прилага за отворени продукти от хигиенен характер, разпечатани хранителни добавки, хапки, пудри и масла, и продукти с нарушена цялост на опаковката. С оглед безопасността и хигиенните изисквания, отворени или използвани продукти не подлежат на връщане и възстановяване на сума.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-4">НАШИЯТ ЖЕСТ КЪМ ВАС</h3>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                  В случай че продуктът не отговаря на вашите очаквания, но не подлежи на връщане (поради отваряне или употреба), моля свържете се с нас. Нашият екип ще разгледа индивидуално вашия случай и ще предложи решение.
                </p>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light mt-3">
                  Като част от нашата политика за грижа към клиентите, при определени случаи можем да предоставим ваучер на стойност 20 лв., валиден за 6 месеца, който може да използвате при следваща покупка в нашия онлайн магазин.
                </p>
                <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light mt-3">
                  Вашето доверие е важно за нас. При въпроси относно връщане или рекламация, моля свържете се с нашия отдел за обслужване на клиенти.
                </p>
              </div>

            </div>
          </section>
        </div>

        <div className="mt-20 pt-12 border-t border-light-stone">
          <p className="font-sans text-warm-gray text-sm leading-relaxed font-light">
            За въпроси:{" "}
            <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">
              office@doks-studio.eu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
