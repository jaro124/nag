import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SectionActions = () => {
  return (
    <div>
      <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline underline-offset-8 decoration-yellow-500 lg:text-3xl dark:text-white">
            Czym się jeszcze zajmujemy
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 w-full">
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
            <StaticImage src="../images/hero-image.jpeg" alt="Background" />
            <div class="px-6 py-4">
              <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Parapety</div>
              <p class="text-black dark:text-gray-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
            <StaticImage src="../images/hero-image.jpeg" alt="Background" />
            <div class="px-6 py-4">
              <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Schody</div>
              <p class="text-black dark:text-gray-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
            <StaticImage src="../images/hero-image.jpeg" alt="Background" />
            <div class="px-6 py-4">
              <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Blaty kuchenne</div>
              <p class="text-black dark:text-gray-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
              <StaticImage src="../images/hero-image.jpeg" alt="Background" />
              <div class="px-6 py-4">
                <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Obudowy kominków</div>
                <p class="text-black dark:text-gray-400 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
              <StaticImage src="../images/hero-image.jpeg" alt="Background" />
              <div class="px-6 py-4">
                <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Kapliczki</div>
                <p class="text-black dark:text-gray-400 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
            <div class="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg">
              <StaticImage src="../images/hero-image.jpeg" alt="Background" />
              <div class="px-6 py-4">
                <div class="text-black dark:text-gray-200 font-bold text-xl mb-2">Pomniki</div>
                <p class="text-black dark:text-gray-400 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SectionActions;
