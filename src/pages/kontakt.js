import * as React from "react";
import Layout from "../components/core/layout";
import { Seo } from "../components/core/seo";

import site from "../data/site";

const AboutPage = () => {
  return (
    <Layout pageTitle="Zakład kamieniarski Mariusz Słupianek - Kontakt">
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg mx-auto my-8 p-6 sm:p-10 lg:p-16">
          <h1 className="text-2xl font-medium text-black dark:text-gray-300 mb-2">
            Kontakt
          </h1>
          <h2 className="font-medium text-sm text-yellow-800 dark:text-yellow-400 mb-4 uppercase tracking-wide">
            Jak się z nami skontaktować
          </h2>
          <p>{site.nazwa}</p>
          <p>
            {site.adres.ulica}, {site.adres.kod} {site.adres.miasto}
          </p>
          <p>
            <a
              className="underline underline-offset-4"
              href={`tel:${site.telefonLink}`}
            >
              {site.telefon}
            </a>
          </p>
          <p>
            <a
              className="underline underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <h1 className="text-2xl font-medium text-black dark:text-gray-300 mt-4 mb-2">
            Dojazd
          </h1>
          <h2 className="font-medium text-sm text-yellow-800 dark:text-yellow-400 mb-4 uppercase tracking-wide">
            Jak do nas dojechać
          </h2>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23773.66039350127!2d18.587884368065122!3d51.22095048724406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a78b5315c78a5%3A0x60845391d64eb7bc!2sWidoradz%2046%2C%2098-300%20Widoradz!5e0!3m2!1spl!2spl!4v1792424306261!5m2!1spl!2spl"
              title="Mapa dojazdu do Zakładu Kamieniarskiego Mariusz Słupianek"
              className="block w-full h-72 sm:h-96 lg:h-[450px] rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <Seo title="Zakład kamieniarski Mariusz Słupianek - Kontakt" />
);
