export default function TermsPage() {
  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">

        <div className="mb-14 md:mb-20">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">ПРАВНА ИНФОРМАЦИЯ</p>
          <h1
            className="font-serif font-light text-obsidian leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Условия за използване
          </h1>
        </div>

        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
          <span className="tracking-editorial text-stone text-[0.6rem] font-sans">ДОКС СТУДИО ООД — ЕИК 831150504</span>
        </div>

        <div className="space-y-12">

          <p className="font-sans text-obsidian text-sm leading-[1.9] font-medium">
            ОБЩИ УСЛОВИЯ НА ОНЛАЙН МАГАЗИН ДОКС СТУДИО
          </p>

          {/* ПРЕДМЕТ */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ПРЕДМЕТ</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 1.</strong> Настоящите общи условия са предназначени за регулиране на отношенията между ДОКС СТУДИО ООД, ЕИК 831150504, със седалище и адрес на управление: БЪЛГАРИЯ, гр. София (1231), р-н Връбница, жк. НАДЕЖДА, бл. 607, вх. Б, ет. 3, ап. 33, наричано по-долу за краткост ДОСТАВЧИК, и клиентите, наричани по-долу ПОЛЗВАТЕЛИ, на платформата за електронна търговия Онлайн Магазин за Животински продукти, наричана по-долу „www.doks-studio.eu".
              </p>
            </div>
          </section>

          {/* ДАННИ ЗА ДОСТАВЧИКА */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ДАННИ ЗА ДОСТАВЧИКА</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 2.</strong> Информация съгласно Закона за електронната търговия и Закона за защита на потребителите:
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Наименование на Доставчика: ДОКС СТУДИО ООД<br />
                Седалище и адрес на управление: БЪЛГАРИЯ, гр. София (1231), р-н Връбница, жк. НАДЕЖДА, бл. 607, вх. Б, ет. 3, ап. 33<br />
                Адрес за упражняване на дейността и адрес за отправяне на жалби от потребители: ул. Христо Белчев 5<br />
                Данни за кореспонденция: 0897799842<br />
                Вписване в публични регистри: ЕИК 831150504<br />
                Регистрация по Закона за данък върху добавената стойност
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                Надзорни органи:<br />
                (1) Комисия за защита на личните данни<br />
                Адрес: гр. София, ул. „Проф. Цветан Лазаров" № 2,<br />
                тел.: (02) 940 20 46, факс: (02) 940 36 40<br />
                Email: kzld@government.bg, kzld@cpdp.bg<br />
                Уеб сайт: www.cpdp.bg<br />
                <br />
                (2) Комисия за защита на потребителите<br />
                Адрес: 1000 гр. София, пл. „Славейков" №4А, ет. 3, 4 и 6,<br />
                тел.: 02 / 980 25 24, факс: 02 / 988 42 18<br />
                гореща линия: 0700 111 22<br />
                Уеб сайт: www.kzp.bg
              </p>
            </div>
          </section>

          {/* ХАРАКТЕРИСТИКИ НА ПЛАТФОРМАТА */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ХАРАКТЕРИСТИКИ НА ПЛАТФОРМАТА</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 3.</strong> Онлайн Магазин за животински продукти, e платформа за електронна търговия, достъпна на адрес в Интернет www.doks-studio.eu, чрез която Ползвателите имат възможност да сключват договори за покупко-продажба и доставка на предлаганите от Доставчика в платформата стоки, включително следното:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "Да извършват регистрация и създаване на профил за преглеждане на електронния магазин на Доставчика и използване на допълнителните услуги за предоставяне на информация;",
                  "Да преглеждат стоките, техните характеристики, цени и условия за доставка;",
                  "Да сключват с Доставчика договори за покупко-продажба и доставка на стоките, предлагани от в платформата www.doks-studio.eu;",
                  "Да извършват всякакви плащания във връзка със сключените договори чрез платформата www.doks-studio.eu средства за разплащане.",
                  "Да получават информация за нови стоки, предлагани от Доставчика в платформата www.doks-studio.eu; Да получават информация за нови стоки и промоционални оферти предлагани от Доставчика по телефона;",
                  "Да извършват електронни изявления във връзка със сключването или изпълнението на договори с Доставчика в платформата www.doks-studio.eu чрез интерфейса на страницата на www.doks-studio.eu, достъпна в Интернет;",
                  "Да бъдат уведомявани за правата, произтичащи от закона, предимно чрез интерфейса на платформата www.doks-studio.eu в Интернет;",
                  "Да упражняват правото си на отказ, когато е приложимо, по Закона за защита на потребителите.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-sand flex-shrink-0 mt-[0.55rem]" />
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 4.</strong> Доставчикът в платформата www.doks-studio.eu организира доставянето на стоките и гарантира правата на Ползвателите, предвидени в закона, в рамките на добросъвестността, възприетите в практиката, потребителското или търговското право критерии и условия.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 5. (1)</strong> Ползвателите сключват с Доставчика в платформата www.doks-studio.eu договор за покупко-продажба на стоките, на адрес www.doks-studio.eu. Договорът се сключва на български език и се съхранява в базата данни на Доставчика в платформата.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) По силата на сключения с Ползвателите договор за покупко-продажба на стоки, Доставчикът в платформата www.doks-studio.eu се задължава да организира доставката и прехвърлянето на собствеността на Ползвателя на определените от него чрез интерфейса в платформата стоки. Ползвателите имат право да поправят грешки при въвеждането на информация не по-късно от отправяне на изявлението за сключване на договора. Ползвателите заплащат на Доставчика на платформата www.doks-studio.eu възнаграждение за доставените стоки съгласно условията, определени в платформата и настоящите общи условия. Възнаграждението е в размер на цената, обявена в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 6. (1)</strong> Ползвателят и Доставчикът в платформата www.doks-studio.eu се съгласяват, че всички изявления помежду им във връзка със сключването и изпълнението на договора за покупко-продажба могат да бъдат извършвани по електронен път и чрез електронни изявления по смисъла на Закона за електронния документ и електронния подпис и чл. 11 от Закона за електронната търговия.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Предполага се, че електронните изявления, извършени от Ползвателите на сайта са извършени от лицата, посочени в данните, предоставени от Ползвателя при извършване на регистрация, ако Ползвателят е въвел съответното име и парола за достъп.
              </p>
            </div>
          </section>

          {/* РЕГИСТРАЦИЯ */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">РЕГИСТРАЦИЯ ЗА ИЗПОЛЗВАНЕ НА WWW.DOKS-STUDIO.EU</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 7. (1)</strong> За да използва www.doks-studio.eu за сключване на договори за покупко-продажба на стоки, Ползвателят следва да въведе избрани от него име и парола за отдалечен достъп или да се легитимира чрез профила си във Facebook или Google, с което се счита, че е приел настоящите общи условия.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Името и паролата за отдалечен достъп се определят от Ползвателя, чрез извършване на онлайн регистрация в сайта на Доставчика в платформата www.doks-studio.eu, съобразно посочената в него процедура. Ползвателите имат възможност да извършват поръчки доставка на стоки и профил от социалните мрежи Facebook, Instagram, Tik Tok и Google.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) С попълване на данните си в потребителската кошница и натискане на бутона &quot;Поръчване&quot;, Ползвателят декларира, че е запознат с тези общи условия, съгласен е с тяхното съдържание и се задължава безусловно да ги спазва.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (4) Доставчикът потвърждава извършената от Ползвателя поръчка по електронна поща. Създава се акаунт на Ползвателя и между него и Доставчика възникват договорни отношения.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (5) При извършване на регистрацията или поръчката Ползвателят се задължава да предостави верни и актуални данни. Ползвателят се задължава при промяна своевременно да актуализира данните, посочени в регистрацията или поръчката си.
              </p>
            </div>
          </section>

          {/* ТЕХНИЧЕСКИ СТЪПКИ */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ТЕХНИЧЕСКИ СТЪПКИ ЗА СКЛЮЧВАНЕ НА ДОГОВОР ЗА ПОКУПКО-ПРОДАЖБА</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 8. (1)</strong> Ползвателите използват предимно интерфейса на страницата на Доставчика в платформата www.doks-studio.eu за да сключват договори за покупко-продажба на предлаганите от доставчиците в платформата www.doks-studio.eu стоки.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) В случаите на поръчка на стоки без извършване на регистрация от страна на Ползвателя, последният приема тези общи условия в момента на доставката. Счита се, че Ползвателят е приел настоящите общи условия с приемането на доставката на стоките.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 9.</strong> Ползвателите сключват договора за покупко-продажба на стоките в платформата www.doks-studio.eu по следната процедура:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "(1) Влизане в системата за извършване на поръчки в платформата www.doks-studio.eu",
                  "(2) Избиране на една или повече от предлаганите от Доставчика в платформата www.doks-studio.eu стоки и добавянето им към списък със стоки за покупка.",
                  "(3) Предоставяне на необходимите данни за индивидуализация на Ползвателя като страна по договора.",
                  "(4) Предоставяне на данни за извършване на доставката;",
                  "(5) Избор на способ и момент за плащане на цената.",
                  "(6) Потвърждение на поръчката;",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-sand flex-shrink-0 mt-[0.55rem]" />
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* СЪДЪРЖАНИЕ НА ДОГОВОРА */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">СЪДЪРЖАНИЕ НА ДОГОВОРА</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 10. (1)</strong> Доставчикът и Ползвателите сключват отделни договори за покупко-продажба на стоките, заявени от Ползвателите, независимо че са избрани с едно електронно изявление и от един списък със стоки за покупка.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Доставчикът може да организира заедно и едновременно доставката на поръчаните с отделните договори за покупко-продажба стоки.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) Правата на Ползвателите във връзка с доставените стоки се упражняват отделно за всеки договор за покупко-продажба. Упражняването на права във връзка с доставена стока не засяга и няма действие по отношение на договорите за покупко-продажба на другите стоки. В случай че Ползвателят има качеството на потребител по смисъла на Закона за защита на потребителите, упражняването на право на отказ от договора за покупко-продажба на определена стока не засяга договорите за покупко-продажба на другите стоки, доставени на потребителя.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 11.</strong> При упражняване на правата по договора за покупко-продажба Ползвателят е задължен да посочва точно и недвусмислено договора и стоката, по отношение, на които упражнява правата.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 12.</strong> Ползвателят може да плати цената за отделните договори за покупко-продажба наведнъж при извършване на поръчката на стоките или при тяхната доставка.
              </p>
            </div>
          </section>

          {/* ОСОБЕНИ КЛАУЗИ */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ОСОБЕНИ КЛАУЗИ, КОИТО СЕ ПРИЛАГАТ СПРЯМО ЛИЦА, КОИТО ИМАТ КАЧЕСТВОТО ПОТРЕБИТЕЛ ПО СМИСЪЛА НА ЗАКОНА ЗА ЗАЩИТА НА ПОТРЕБИТЕЛИТЕ</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 13.</strong> Правилата на настоящия раздел се прилагат единствено спрямо Ползватели, за които според данните, посочени за сключване на договора за покупко-продажба или при регистрацията в www.doks-studio.eu, може да се направи извод, че са Потребители по смисъла на Закона за защита на потребителите, Закона за електронната търговия и/или на Директива 2011/83/ЕО на Европейския парламент и на Съвета от 25-ти октомври 2011 г.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 14. (1)</strong> Основните характеристики на стоките, предлагани от Доставчика в платформата www.doks-studio.eu са определени в профила на всяка стока в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Цената на стоките с включени всички данъци и такси се определя от Доставчика в платформата www.doks-studio.eu в профила на всяка стока в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) Стойността на пощенските или транспортните разходи, невключени в цената на стоките се определя от Доставчика в платформата www.doks-studio.eu и се предоставя като информация на Ползвателите при избиране на стоките за сключване на договора за покупко-продажба.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (4) Начините на плащане, доставка и изпълнение на договора се определят в настоящите общи условия и информацията, предоставена на Ползвателя посредством механизмите в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (5) Информацията, предоставяна на Ползвателите по този член е актуална към момента на визуализацията й в платформата www.doks-studio.eu преди сключването на договора за покупко-продажба.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (6) Ползвателите се съгласяват, че цялата изискуема от Закона за защита на потребителите информация може да бъде предоставяна чрез интерфейса на платформата www.doks-studio.eu или електронна поща.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 15. (1)</strong> Потребителят се съгласява, че доставчиците в платформата www.doks-studio.eu имат право да приемат авансово плащане за сключените с Потребителя договори за покупко-продажба на стоки и тяхната доставка.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Потребителят избира самостоятелно дали да заплати на Доставчика в платформата www.doks-studio.eu цената за доставка на стоките преди или в момента на доставката им.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) В случай, че стойността на поръчката на Потребителя е равностойна или надвишава 15 000 лв., плащането се извършва само чрез превод или внасяне по платежна сметка на Доставчика.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 16. (1)</strong> Потребителят има право, без да дължи обезщетение или неустойка и без да посочва причина, да се откаже от сключения договор в срок 14 дни, считано от датата на приемане на стоката от Доставчика.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Правото на отказ по ал. 1 не се прилага в следните случаи:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "за доставка на стоки, изработени по поръчка на потребителя или съобразно неговите индивидуални изисквания;",
                  "за доставка на стоки, които поради своето естество могат да влошат качеството си или имат кратък срок на годност;",
                  "за доставка на запечатани стоки, които са разпечатани след доставката им и не могат да бъдат върнати поради съображения, свързани с хигиената или защита на здравето;",
                  "за доставка на стоки, които след като са били доставени и поради естество им са се смесили с други стоки, от които не могат да бъдат отделени;",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-sand flex-shrink-0 mt-[0.55rem]" />
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) Когато Потребителят е упражнил правото си на отказ от договора от разстояние или от договора извън търговския обект, Доставчикът възстановява всички суми, получени от потребителя, включително разходите за доставка, без неоправдано забавяне и не по-късно от 14 дни, считано от датата, на която е бил уведомен за решението на потребителя да се откаже от договора. Доставчикът възстановява получените суми, като използва същото платежно средство, използвано от потребителя при първоначалната транзакция, освен ако потребителят е изразил изричното си съгласие за използване на друго платежно средство и при условие че това не е свързано с разходи за потребителя.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (4) При упражняване на правото на отказ, разходите за връщане на доставените стоки се приспадат от сумите за възстановяване по ал. 3, освен в случаите, когато потребителят организира сам и за своя сметка връщането на стоките. Доставчикът няма задължение да възстанови допълнителните разходи за доставка на стоките, когато потребителят изрично е избрал начин на доставяне на стоките, различен от най-евтиния вид стандартна доставка, предлагана от Доставчика.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (5) Потребителят се задължава да съхранява получените Доставчика в платформата стоки и да осигури запазването на тяхното качество и безопасност по време на срока по ал. 1.
              </p>
            </div>
          </section>

          {/* ИЗПЪЛНЕНИЕ НА ДОГОВОРА */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ИЗПЪЛНЕНИЕ НА ДОГОВОРА</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 17. (1)</strong> Срокът на доставка на стоката е определен за всяка стока поотделно при сключване на договора с потребителя чрез сайта на Доставчика в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) В случай че Потребителят и Доставчикът в платформата www.doks-studio.eu не са определили срок за доставка, срокът на доставка на стоките е 30 календарни дни, считано от датата, следваща изпращането на поръчката на потребителя до Доставчика чрез сайта на Доставчика в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) Ако Доставчикът в платформата www.doks-studio.eu не може да изпълни договора поради това, че не разполага с поръчаните стоки, той е длъжен да уведоми за това Потребителя и да възстанови платените от него суми.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 19. (1)</strong> Доставчикът в платформата www.doks-studio.eu може да организира доставката и предаването на стоката на Ползвателя от съответен куриер в определения при сключването на договора срок.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Ако срокът по ал. 1 не е изрично уговорен между страните при сключването на договора, Доставчикът организира доставката и предаването в разумен срок.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 20. (1)</strong> Ползвателят трябва да прегледа стоката в момента на доставката и предаването и ако не отговаря на изискванията да уведоми за това незабавно Доставчика в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Ако Ползвателят не уведоми Доставчика в платформата www.doks-studio.eu съгласно ал. 1 стоката се смята за одобрена като съответстваща на изискванията, освен за скрити недостатъци.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 21.</strong> Доставчикът в платформата www.doks-studio.eu не се задължава да осигурят необходимия сервиз за стоката.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 22.</strong> За неуредените в този раздел случаи се прилагат правилата търговската продажба, определени в Търговския закон и Закона защита на потребителите.
              </p>
            </div>
          </section>

          {/* ЗАЩИТА НА ЛИЧНИТЕ ДАННИ */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ЗАЩИТА НА ЛИЧНИТЕ ДАННИ</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 23. (1)</strong> Събирането, съхранението и обработването на лични данни се осъществява съобразно Политиката на www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Въведените от Ползвателите лични данни са обект на защита по Закона за защита на личните данни и Общия регламент 2016/679 като Доставчикът ги обработва за целите и в сроковете, предвидени в Политиката за поверителност на личните данни.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) При съгласие на Ползвателя с Политиката за поверителност на личните данни, Ползвателят изрично потвърждава, че е съгласен Доставчикът да съхранява информация или получава достъп до информацията, съхранена в крайното устройство на Ползвателя за изчерпателно предвидените в нея цели и срокове. Ползвателят се съгласява, че Доставчикът може да съхранява информация или получава достъп до информацията, съхранена в крайното устройство на Ползвателя и на други основания, посочени в Политиката за поверителност на личните данни.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (4) Ползвателят или Потребителят се съгласява, че Доставчикът на платформата www.doks-studio.eu има право да изпраща по всяко време електронни съобщения към Ползвателя или Потребителя, включително и бюлетин или предложения за покупка на стоки, докато е налице регистрация на Ползвателя или Потребителя в електронния магазин на Доставчика в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (5) Ползвателят или Потребителят се съгласява, че Доставчикът на платформата www.doks-studio.eu има право да събира, съхранява и обработва данни да поведението на Ползвателя или Потребителя при използването на електронния магазин на Доставчика в платформата www.doks-studio.eu. Ползвателят има право да възрази на съхраняването или достъпа до информацията по алинея 3 по предвидените в Политиката за поверителност на личните данни начини.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 24. (1)</strong> Във всеки момент, Доставчикът в платформата www.doks-studio.eu има право да изисква от Ползвателя да се легитимира и да удостовери достоверността на всяко едно от обявените по време на регистрацията обстоятелства и лични данни.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) В случай, че по някаква причина Ползвателят е забравил или изгубил своите име и парола, Доставчикът на платформата www.doks-studio.eu има право да приложи обявената &quot;Процедура за изгубени или забравени имена и пароли&quot;, достъпна на адрес: www.doks-studio.eu.
              </p>
            </div>
          </section>

          {/* ПРЕКРАТЯВАНЕ */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ПРЕКРАТЯВАНЕ</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 27.</strong> Настоящите общи условия и договора на Ползвателя с Доставчика в платформата www.doks-studio.eu се прекратяват в следните случаи:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "при прекратяване и обявяване в ликвидация или обявяване в несъстоятелност на една от страните по договора;",
                  "по взаимно съгласие на страните в писмен вид;",
                  "при обективна невъзможност на някоя от страните по договора да изпълнява задълженията си;",
                  "при изземване или запечатване на оборудването от държавни органи;",
                  "в случай на заличаване на регистрацията на Ползвателя в платформата www.doks-studio.eu. В този случай сключените, но неизпълнени договори за покупко-продажба остават в сила и подлежат на изпълнение;",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-sand flex-shrink-0 mt-[0.55rem]" />
                    <span className="font-sans text-warm-gray text-sm leading-[1.9] font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 28.</strong> Доставчикът има право по свое усмотрение, без да отправя предизвестие и без да дължи обезщетение да прекрати едностранно договора, в случай че установи, че Ползвателят използва платформата www.doks-studio.eu в нарушение на настоящите общи условия, законодателството в Република България, общоприетите нравствени норми или общоприетите правила и практика в електронната търговия.
              </p>
            </div>
          </section>

          {/* ОТГОВОРНОСТ */}
          <section>
            <h2 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-5">ОТГОВОРНОСТ</h2>
            <div className="border-t border-light-stone pt-6 space-y-4">
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 29.</strong> Ползвателят се задължава да обезщети и да освободи от отговорност доставчиците в платформата www.doks-studio.eu и Доставчика при съдебни искове и други претенции на трети лица (независимо дали са основателни или не), за всички щети и разходи (в това число адвокатски хонорари и съдебни разноски), произтичащи от или във връзка с (1) неизпълнение на някое от задълженията по този договор, (2) нарушение на авторски, продуцентски, права на излъчване или други права върху интелектуалната или индустриална собственост, (3) неправомерно прехвърляне на други лица на правата, предоставени на Ползвателя, за срока и при условията на договора и (4) невярно деклариране наличието или отсъствието на качеството потребител по смисъла на Закона за защита на потребителите.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 30.</strong> Доставчикът не носи отговорност в случай на непреодолима сила, случайни събития, проблеми в Интернет, технически или други обективни причини, включително и разпореждания на компетентните държавни органи.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 31. (1)</strong> Доставчикът не носи отговорност за вреди, причинени от Ползвателя на трети лица.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Доставчикът не носи отговорност за имуществени или неимуществени вреди, изразяващи се в пропуснати ползи или претърпени вреди, причинени на Ползвателят в процеса на използване или неизползване на www.doks-studio.eu и сключване на договори за покупко-продажба с Доставчика.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (3) Доставчикът не носи отговорност за времето, през което платформата не е била достъпна поради непреодолима сила.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (4) Доставчикът не носи отговорност за вреди от коментари, мнения и публикации под продуктите, новините и статиите в платформата www.doks-studio.eu.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                <strong className="text-obsidian font-medium">Чл. 32. (1)</strong> Доставчикът не носи отговорност в случай на преодоляване на мерките за сигурност на техническото оборудване и от това последва загуба на информация, разпространение на информация, достъп до информация, ограничаване на достъп до информация и други сходни последствия.
              </p>
              <p className="font-sans text-warm-gray text-sm leading-[1.9] font-light">
                (2) Доставчикът не носи отговорност в случай на сключване на договор за покупко-продажба, предоставяне на достъп до информация, загуба или промяна на данни настъпили вследствие на фалшива легитимация на трето лице, което се представя за Ползвателя, ако от обстоятелствата може да се съди, че това лице е Ползвателя.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-20 pt-12 border-t border-light-stone">
          <p className="font-sans text-warm-gray text-sm leading-relaxed font-light">
            ДОКС СТУДИО ООД — ул. Христо Белчев 5, София |{" "}
            <a href="mailto:office@doks-studio.eu" className="text-obsidian underline underline-offset-2">
              office@doks-studio.eu
            </a>{" "}
            | 0897799842
          </p>
        </div>
      </div>
    </div>
  );
}
