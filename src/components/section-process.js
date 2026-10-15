// src/components/section-process.js
import React from "react";

const kroki = [
  ["Rozmowa i pomiar", "Opisujesz, czego potrzebujesz. Przy schodach, parapetach, blatach i obudowach kominków przyjeżdżamy zmierzyć na miejscu."],
  ["Projekt i wycena", "Dostajesz rysunek z wymiarami, wybrany kamień i cenę. Zmiany wprowadzamy przed cięciem."],
  ["Wykonanie", "Cięcie, szlifowanie, polerowanie i napisy robimy w naszej pracowni."],
  ["Montaż", "Przywozimy i montujemy, a po pracy sprzątamy."],
]

const SectionProcess = () => {
  return (
    <div className="px-4">
      <div className="flex justify-center my-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline underline-offset-8 decoration-yellow-500 lg:text-4xl dark:text-white">
            Proces realizacji
          </h1>
        </div>
      </div>
      <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg mx-auto my-4 p-8">
        <div className="mx-auto max-w-6xl px-5 ">
          <h2 className="text-2xl">Jak wygląda zamówienie</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {kroki.map(([t, d], i) => (
              <li key={t} className="border-t border-zloto pt-4">
                <span className="font-display text-3xl text-zloto-jasne">{i + 1}</span>
                <h3 className="mt-2 text-xl text-orange-700 dark:text-orange-300">{t}</h3>
                <p className="mt-2 text-sm">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SectionProcess;
