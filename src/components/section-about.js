// src/components/section-about.js
import React from "react";
import { Link } from "gatsby";

const SectionAbout = () => {
  return (
    <div className="px-4">
      <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
        <h1 className="text-2xl font-medium text-black dark:text-gray-400 mb-2">
          Zakład kamieniarski Mariusz Słupianek
        </h1>
        <h2 className="font-medium text-sm text-yellow-600 mb-2 uppercase tracking-wide">
          Pomniki nagrobne to nasza specjalność
        </h2>
        <p className="mt-2">
          Nasz zakład oferuje kompleksową realizację nagrobków pojedynczych,
          podwójnych, rodzinnych oraz grobowców, wykonywanych z trwałych
          materiałów, takich jak granit czy marmur.
        </p>
        <p className="mt-2 mb-4">
          Możliwe jest przygotowanie projektu dostosowanego do indywidualnych
          oczekiwań klienta - od klasycznych, prostych form po nowoczesne
          kompozycje z rzeźbionymi elementami, ozdobnymi płytami i nietypową
          kolorystyką kamienia.
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded">
          <Link to="/kontakt">Skontaktuj się z nami</Link>
        </button>
      </div>
    </div>
  );
};

export default SectionAbout;
