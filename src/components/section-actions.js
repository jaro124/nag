import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SectionActions = () => {
  return (
    <div className="px-8">
      <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline underline-offset-8 decoration-yellow-500 lg:text-4xl dark:text-white">
            Czym się jeszcze zajmujemy
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 w-full">
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
            <StaticImage src="../images/uslugi/parapety.jpg" alt="Parapety" />
            <div class="px-6 py-4">
              <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Parapety</div>
              <p class="text-black dark:text-gray-400 text-base">
                Parapet mierzymy na gotowym oknie. Dzięki temu płyta pasuje do ościeży bez szpar i poprawek. Parapety zewnętrzne wykonujemy z okapnikiem.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
            <StaticImage src="../images/uslugi/schody.jpeg" alt="Schody" />
            <div class="px-6 py-4">
              <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Schody</div>
              <p class="text-black dark:text-gray-400 text-base">
                Na zewnątrz liczy się powierzchnia. Ma trzymać przyczepność nawet po deszczu. Dobieramy ją do miejsca, w którym kamień ma leżeć.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
            <StaticImage src="../images/uslugi/blaty-kuchenne.jpeg" alt="Blaty kuchenne" />
            <div class="px-6 py-4">
              <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Blaty kuchenne</div>
              <p class="text-black dark:text-gray-400 text-base">
                Blaty kuchenne wykonujemy z najwyższej jakości materiałów, dbając o estetykę i funkcjonalność. Do kuchni najczęściej polecamy granit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
              <StaticImage src="../images/uslugi/obudowy-kominkow.jpeg" alt="Obudowy kominków" />
              <div class="px-6 py-4">
                <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Obudowy kominków</div>
                <p class="text-black dark:text-gray-400 text-base">
                  Kamień przy kominku musi znieść temperaturę. Dobieramy go do odległości od wkładu i do tego, jak często palisz.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
              <StaticImage src="../images/uslugi/kapliczki.jpeg" alt="Kapliczki" />
              <div class="px-6 py-4">
                <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Kapliczki</div>
                <p class="text-black dark:text-gray-400 text-base">
                  Kapliczka stoi na wietrze, deszczu i mrozie przez dziesiątki lat. Kamień i solidny fundament sprawiają, że dobrze to znosi.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
              <StaticImage src="../images/uslugi/pomniki.jpeg" alt="Pomniki" />
              <div class="px-6 py-4">
                <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Pomniki</div>
                <p class="text-black dark:text-gray-400 text-base">
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
