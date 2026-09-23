import * as React from "react";
import Layout from "../components/core/layout";
import { Seo } from "../components/core/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-2xl font-medium text-black dark:text-gray-400 mb-2">
            Kontakt
          </h1>
          <h2 className="font-medium text-sm text-yellow-600 mb-4 uppercase tracking-wide">
            Jak się z nami skontaktować
          </h2>
          <p>Firma: Zakład kamieniarski Mariusz Słupianek</p>
          <p>Adres: Widoradz Górny 46, Wieluń</p>
          <p>Telefon: 601-358-467</p>
          <p>E-mail: zaklad@server.com</p>
          <h1 className="text-2xl font-medium text-black dark:text-gray-400 mt-4 mb-2">
            Dojazd
          </h1>
          <h2 className="font-medium text-sm text-yellow-600 mb-4 uppercase tracking-wide">
            Jak do nas dojechać
          </h2>
          <p className="text-primary">
            --- Mapa ---
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title="About page" />;
