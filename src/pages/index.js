import * as React from "react";
import Layout from "../components/core/layout";
import SectionHero from "../components/section-hero";
import SectionAbout from "../components/section-about";
import SectionActions from "../components/section-actions";
import SectionGallery from "../components/section-gallery";
import SectionCompany from "../components/section-company";
import { Seo } from "../components/core/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="relativep-4">
        <SectionHero />
        <SectionAbout />
        <SectionActions />
        <SectionGallery />
        <SectionCompany />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home page" />;
