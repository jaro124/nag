import React from "react";
import site from "../../data/site";

export default function Footer2() {
  return (
    <footer className="bg-white dark:bg-neutral-900 text-black dark:text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="flex flex-col leading-none">
            <span>{site.nazwaGora}</span>
            <span className="mt-1 font-display text-3xl text-orange-500">
              {site.nazwaDol}
            </span>
          </p>
          <p className="text-sm mt-8 max-w-[34ch]">
            Pracownia kamieniarska od {site.rokZalozenia} roku. Projekt,
            wykonanie i montaż.
          </p>
        </div>
        <div>
          <h2 className="text-xs">Kontakt</h2>
          <address className="mt-3 not-italic leading-relaxed">
            {site.adres.ulica}
            <br />
            {site.adres.kod} {site.adres.miasto}
            <br />
            <a
              className="underline underline-offset-4"
              href={`tel:${site.telefonLink}`}
            >
              {site.telefon}
            </a>
            <br />
            <a
              className="underline underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </address>
          <h2 className="text-xs mt-4 mb-3">Social</h2>
          <a href="https://www.instagram.com/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36px"
              height="36px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#f55376"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
              ></path>
              <path
                fill="#fac8d5"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              ></path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fac8d5"></circle>
              <path
                fill="#fac8d5"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18 z"
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <h2 className="text-xs">Godziny pracy</h2>
          <dl className="mt-3 space-y-1">
            {site.godziny.map(([d, g]) => (
              <div key={d} className="flex justify-between gap-4">
                <dt>{d}</dt>
                <dd>{g}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-linia/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm">
          © {new Date().getFullYear()} {site.nazwa}
        </p>
      </div>
    </footer>
  );
}
