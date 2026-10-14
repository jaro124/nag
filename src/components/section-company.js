// src/components/section-company.js
import React from "react";
import { Link } from "gatsby";

const SectionCompany = () => {
  return (
    <div className="px-4">
      <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline underline-offset-8 decoration-yellow-500 lg:text-4xl dark:text-white">
            O nas
          </h1>
        </div>
      </div>
      <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg mx-auto my-8 p-16">
        <h1 className="text-2xl font-medium text-black dark:text-gray-300 mb-2">
          Zakład kamieniarski Mariusz Słupianek
        </h1>
        <h2 className="font-medium text-sm text-yellow-800 dark:text-yellow-400 mb-2 uppercase tracking-wide">
          Firma rodzinna z wieloletnim doświadczeniem
        </h2>
        <p className="mt-6">
          Jesteśmy rodzinnym zakładem kamieniarskim, który nieprzerwanie od 1984
          roku łączy rzemieślnicze doświadczenie z indywidualnym podejściem do
          każdej realizacji. Wieloletnia obecność na rynku pozwoliła nam zdobyć
          wiedzę, zaufanie klientów oraz umiejętność uważnego wsłuchiwania się w
          ich potrzeby — zwłaszcza w trudnych, osobistych chwilach związanych z
          wyborem nagrobka.
        </p>
        <p className="mt-2 mb-6">
          Stawiamy na życzliwą i spokojną obsługę, fachowe doradztwo oraz pełną
          dostępność na każdym etapie współpracy. Pomagamy w wyborze materiału,
          wzoru i elementów wykończenia, dbając o to, aby realizacja odpowiadała
          oczekiwaniom klienta, jego możliwościom oraz charakterowi miejsca
          pamięci.
        </p>
        <Link className="btn btn-primary" to="/kontakt">Skontaktuj się z nami</Link>
      </div>
    </div>
  );
};

export default SectionCompany;
