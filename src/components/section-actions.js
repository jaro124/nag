import React from "react";

const SectionActions = () => {
  return (
    <div>
      <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline decoration-orange-400 lg:text-3xl dark:text-white">
            Czym się jeszczezajmujemy
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 w-full">
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <h1 className="text-3xl font-bold text-primary m-2">Parapety</h1>
            <div className="text-black dark:text-gray-400">Opis parapetów</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <h1 className="text-3xl font-bold text-primary m-2">Schody</h1>
            <div className="text-black dark:text-gray-400">Opis schodów</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <h1 className="text-3xl font-bold text-primary m-2">Blaty kuchenne</h1>
            <div className="text-black dark:text-gray-400">Opis blatów kuchennych</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <h1 className="text-3xl font-bold text-primary m-2">Obudowy kominków</h1>
            <div className="text-black dark:text-gray-400">Opis obudów kominków</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <h1 className="text-3xl font-bold text-primary m-2">Kapliczki</h1>
            <div className="text-black dark:text-gray-400">Opis kapliczek</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 text-left p-2 lg:p-4">
          <div className="max-w-4xl h-full bg-white dark:bg-black rounded-lg mx-auto my-2 p-16 text-center">
            <h1 className="text-3xl font-bold text-primary m-2">Pomniki</h1>
            <div className="text-black dark:text-gray-400">Opis pomników</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionActions;
