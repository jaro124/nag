import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SectionActions = () => {
  return (
    <div className="px-4 md:px-12">
      <div className="flex justify-center my-6">
        <div>
          <h1 className="section-header">
            Wykonujemy także
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 w-full">
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
            <StaticImage src="../images/uslugi/parapety.jpg" alt="Parapety" />
            <div className="px-6 py-4">
              <div className="text-black dark:text-gray-200 font-bold text-xl mb-2">Parapety</div>
              <p className="text-black dark:text-gray-400 text-base">
                Parapet mierzymy na gotowym oknie. Dzięki temu płyta pasuje do ościeży bez szpar. Parapety zewnętrzne wykonujemy z okapnikiem.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
            <StaticImage src="../images/uslugi/schody.jpeg" alt="Schody" />
            <div className="px-6 py-4">
              <div className="text-black dark:text-gray-200 font-bold text-xl mb-2">Schody</div>
              <p className="text-black dark:text-gray-400 text-base">
                Na zewnątrz liczy się powierzchnia. Ma trzymać przyczepność nawet po deszczu. Dobieramy ją do miejsca, w którym kamień ma leżeć.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
            <StaticImage src="../images/uslugi/blaty-kuchenne.jpeg" alt="Blaty kuchenne" />
            <div className="px-6 py-4">
              <div className="text-black dark:text-gray-200 font-bold text-xl mb-2">Blaty kuchenne</div>
              <p className="text-black dark:text-gray-400 text-base">
                Blaty kuchenne wykonujemy z najwyższej jakości materiałów, dbając o estetykę i funkcjonalność. Do kuchni najczęściej polecamy granit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
              <StaticImage src="../images/uslugi/obudowy-kominkow.jpeg" alt="Obudowy kominków" />
              <div className="px-6 py-4">
                <div className="text-black dark:text-gray-200 font-bold text-xl mb-2">Obudowy kominków</div>
                <p className="text-black dark:text-gray-400 text-base">
                  Kamień przy kominku musi znieść temperaturę. Dobieramy go do odległości od wkładu i do tego, jak często palisz.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
              <StaticImage src="../images/uslugi/kapliczki.jpeg" alt="Kapliczki" />
              <div className="px-6 py-4">
                <div className="text-black dark:text-gray-200 font-bold text-xl mb-2">Kapliczki</div>
                <p className="text-black dark:text-gray-400 text-base">
                  Kapliczka stoi na wietrze, deszczu i mrozie przez dziesiątki lat. Kamień i solidny fundament sprawiają, że dobrze to znosi.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
              <StaticImage src="../images/uslugi/pomniki.jpeg" alt="Pomniki" />
              <div className="px-6 py-4">
                <div className="text-black dark:text-gray-200 font-bold text-xl mb-2">Pomniki</div>
                <p className="text-black dark:text-gray-400 text-base">
                  Pomnik ma przetrwać dłużej niż ci, którzy go stawiają. Dlatego dobieramy kamień odporny na pogodę i dbamy o solidny fundament.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SectionActions;
