// src/components/section-process.js
import React from "react";

import kroki from "../data/kroki";

const SectionProcess = () => {
  return (
    <div className="px-4">
      <div className="flex justify-center my-6">
        <div>
          <h1 className="section-header">
            Proces realizacji
          </h1>
        </div>
      </div>
      <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg mx-auto my-8 p-16">
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
