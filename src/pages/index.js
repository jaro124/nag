import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/core/layout";
import SectionHero from "../components/section-hero";
import SectionAbout from "../components/section-about";
import SectionActions from "../components/section-actions";
import SectionProcess from "../components/section-process";
import SectionGallery from "../components/section-gallery";
import SectionCompany from "../components/section-company";
import { Seo } from "../components/core/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Zakład kamieniarski Mariusz Słupianek">
      <div className="relativep-4">
        <SectionHero />
        <SectionAbout />
        <SectionActions />

        {/* PROCESS */}
        <SectionProcess />

        {/* GALERIA */}
        <section id="galeria" className="scroll-mt-4">
          <div className="flex justify-center mt-10 mb-2">
            <div>
              <h1 className="text-4xl font-semibold text-gray-800 uppercase underline underline-offset-8 decoration-yellow-500 lg:text-4xl dark:text-white mb-4">
                Galeria
              </h1>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-5 py-5">
            <SectionGallery zdjecia={data.galeria.nodes} />
            <p className="mt-4 max-w-[56ch] italic text-sm text-gray-600 dark:text-gray-400">
              Wybrane realizacje. Kliknij zdjęcie, aby je powiększyć.
            </p>
          </div>
        </section>

        <SectionCompany />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GaleriaQuery {
    galeria: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "galeria" }
        extension: { regex: "/^(jpe?g|png|webp)$/i" }
      }
      sort: { name: ASC }
    ) {
      nodes {
        id
        name
        childImageSharp {
          thumb: gatsbyImageData(width: 640, height: 480, placeholder: BLURRED)
          full: gatsbyImageData(width: 1600, quality: 80, placeholder: NONE)
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <Seo title="Zakład kamieniarski Mariusz Słupianek" />;
