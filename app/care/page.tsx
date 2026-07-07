"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const tips = {
  bg: [
    {
      category: "Костюми & Сака",
      items: [
        {
          title: "Химическо чистене",
          body: "Костюмите не се перат в перална машина. Носете ги на химическо чистене само когато е необходимо — прекалено честото чистене износва тъканта. Веднъж или два пъти в сезона е достатъчно.",
        },
        {
          title: "Проветряване след носене",
          body: "След всяко носене окачете костюма на закачалка и го оставете да се проветри поне 24 часа преди да го приберете в гардероба. Това премахва миризми и позволява на тъканта да се върне в естествената си форма.",
        },
        {
          title: "Правилна закачалка",
          body: "Използвайте широки дървени или оформени закачалки, които поддържат формата на раменете. Тесните метални закачалки деформират раменния шев с времето.",
        },
        {
          title: "Изпаряване вместо гладене",
          body: "Избягвайте пряк контакт на ютия с вълнена тъкан. Използвайте парогенератор или гладете с влажна кърпа между ютията и тъканта. Парата разглажда и освежава без риск от лъскаване.",
        },
        {
          title: "Изпразнете джобовете",
          body: "Носенето на тежки предмети в джобовете деформира силуета и натоварва шевовете. Изпразнете джобовете в края на деня.",
        },
      ],
    },
    {
      category: "Съхранение",
      items: [
        {
          title: "Сезонно съхранение",
          body: "Когато прибирате дрехи за следващия сезон, изпратете ги на химическо чистене преди съхранение. Петната и невидимите замърсявания привличат молци и се фиксират трайно с времето.",
        },
        {
          title: "Защита от молци",
          body: "Използвайте кедрови топки или торбички с лавандула вместо нафталин. Кедърът отблъсква молците и абсорбира влагата без неприятна миризма.",
        },
        {
          title: "Дишащи калъфи",
          body: "Съхранявайте костюми в текстилни (не пластмасови) калъфи. Пластмасата задържа влага и може да пожълти тъканта. Позволете на дрехата да диша.",
        },
        {
          title: "Не претъпквайте гардероба",
          body: "Дрехите се нуждаят от пространство. Прекалено стегнатото наредени дрехи се набръчкват и губят форма. Оставете поне сантиметър-два между всяка дреха.",
        },
      ],
    },
    {
      category: "Ежедневна грижа",
      items: [
        {
          title: "Четкане след носене",
          body: "Използвайте мека дрехарска четка по посока на тъканта след всяко носене. Това премахва прах, косми и малки частици преди да се наслоят в нишките.",
        },
        {
          title: "Петна — действайте бързо",
          body: "При петно — не търкайте. Попийте с чиста кърпа отвън навътре. Занесете на химическо чистене възможно най-скоро и посочете точно вида на петното.",
        },
        {
          title: "Редувайте дрехите",
          body: "Не носете един и същ костюм два дни подред. Дайте на тъканта поне 24 часа почивка — вълната се нуждае от време да се отпусне и върне формата си.",
        },
        {
          title: "Пътуване",
          body: "При пакетиране обърнете сакото наобратно, сгънете го по средната линия и поставете в чанта. Окачете при пристигане в банята по време на гореща душ — парата разглажда набръчкванията естествено.",
        },
      ],
    },
  ],
  en: [
    {
      category: "Suits & Jackets",
      items: [
        {
          title: "Dry Cleaning",
          body: "Suits should never be washed in a machine. Take them to a dry cleaner only when necessary — over-cleaning wears down the fabric. Once or twice per season is sufficient.",
        },
        {
          title: "Air Out After Wearing",
          body: "After each wear, hang your suit on a proper hanger and allow it to air for at least 24 hours before returning it to the wardrobe. This removes odours and allows the fabric to return to its natural shape.",
        },
        {
          title: "Proper Hangers",
          body: "Use wide wooden or contoured hangers that support the shoulder shape. Narrow wire hangers distort the shoulder seam over time.",
        },
        {
          title: "Steam, Don't Iron",
          body: "Avoid direct iron contact with wool fabric. Use a steamer or iron with a damp cloth between the iron and fabric. Steam refreshes and relaxes fibres without risk of shine marks.",
        },
        {
          title: "Empty Your Pockets",
          body: "Carrying heavy items in pockets distorts the silhouette and strains the seams. Empty your pockets at the end of each day.",
        },
      ],
    },
    {
      category: "Storage",
      items: [
        {
          title: "Seasonal Storage",
          body: "Before storing clothes for the next season, have them dry cleaned first. Stains and invisible soiling attract moths and become permanent over time.",
        },
        {
          title: "Moth Protection",
          body: "Use cedar balls or lavender sachets instead of mothballs. Cedar repels moths and absorbs moisture without the unpleasant smell.",
        },
        {
          title: "Breathable Covers",
          body: "Store suits in fabric (not plastic) covers. Plastic traps moisture and can yellow fabric. Let your clothes breathe.",
        },
        {
          title: "Don't Overcrowd the Wardrobe",
          body: "Clothes need space. Tightly packed garments crease and lose their shape. Leave at least a centimetre or two between each item.",
        },
      ],
    },
    {
      category: "Daily Care",
      items: [
        {
          title: "Brush After Wearing",
          body: "Use a soft clothes brush along the grain of the fabric after each wear. This removes dust, hair and particles before they settle into the fibres.",
        },
        {
          title: "Stains — Act Quickly",
          body: "If you get a stain — don't rub. Blot with a clean cloth from the outside in. Take to a dry cleaner as soon as possible and specify exactly what caused the stain.",
        },
        {
          title: "Rotate Your Wardrobe",
          body: "Don't wear the same suit two days in a row. Give the fabric at least 24 hours rest — wool needs time to relax and recover its shape.",
        },
        {
          title: "Travelling",
          body: "When packing, turn the jacket inside out, fold it along the centre line and place in your bag. On arrival, hang it in the bathroom during a hot shower — steam naturally relaxes any creases.",
        },
      ],
    },
  ],
};

export default function CarePage() {
  const { lang } = useLanguage();
  const content = tips[lang];

  return (
    <div className="bg-chalk min-h-screen pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="px-6 md:px-10 lg:px-16 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="tracking-editorial text-stone text-[0.625rem] font-sans mb-5">
            {lang === "bg" ? "ГРИЖА ЗА ДРЕХИТЕ" : "GARMENT CARE"}
          </p>
          <h1
            className="font-serif font-light text-obsidian leading-[1.05]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)", letterSpacing: "-0.025em" }}
          >
            {lang === "bg" ? "Как да пазим" : "How to care"}
            <br />
            <span className="text-warm-gray">
              {lang === "bg" ? "вашето облекло." : "for your garments."}
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <div className="w-12 h-px bg-sand" />
          <span className="tracking-editorial text-stone text-[0.6rem] font-sans">
            {lang === "bg"
              ? "Съвети за дълготрайност и свеж вид"
              : "Tips for longevity and a fresh appearance"}
          </span>
        </div>

        {/* Sections */}
        <div className="space-y-16 md:space-y-24">
          {content.map((section) => (
            <div key={section.category}>
              <h2
                className="font-serif font-light text-obsidian mb-10"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
              >
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {section.items.map((tip) => (
                  <div key={tip.title} className="border-t border-light-stone pt-6">
                    <h3 className="tracking-editorial text-[0.6rem] text-obsidian font-sans font-medium mb-3">
                      {tip.title}
                    </h3>
                    <p className="font-sans text-warm-gray text-sm leading-[1.85] font-light">
                      {tip.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-light-stone">
          <p className="font-sans text-warm-gray text-sm leading-relaxed font-light mb-6 max-w-xl">
            {lang === "bg"
              ? "Имате въпроси за грижата на конкретен артикул? Нашите консултанти в магазините са на ваше разположение."
              : "Have questions about caring for a specific garment? Our in-store consultants are at your disposal."}
          </p>
          <Link
            href="/stores"
            className="inline-block tracking-editorial text-[0.625rem] font-sans font-medium text-obsidian border border-obsidian px-7 py-3.5 hover:bg-obsidian hover:text-chalk transition-all duration-300"
          >
            {lang === "bg" ? "Намери магазин" : "Find a store"}
          </Link>
        </div>
      </div>
    </div>
  );
}
