// src/components/section-hero1.js
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const SectionHero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full object-cover">
      <StaticImage
        src="../images/hero-image.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          Pomniki nagrobne
        </h1>
        <h2 className="text-2xl text-white">
          Wykonujemy pomniki w różnych stylach i materiałach, 
        </h2>
        <h2 className="text-2xl text-white mb-12">
          dostosowane do indywidualnych potrzeb i preferencji klientów.
        </h2>
        <Link className="btn btn-primary" to="/kontakt">Skontaktuj się z nami</Link>
      </div>
    </div>
  );
};

export default SectionHero;
