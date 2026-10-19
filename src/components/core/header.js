import { Link } from "gatsby";
import React, { useState } from "react";
import { toggleTheme } from "../../utils/toggleTheme.js";

import site from "../../data/site";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-white dark:bg-neutral-900 shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-4">
        <Link
          className="flex items-center no-underline text-black dark:text-gray-400"
          to="/"
        >
          <p className="flex flex-col leading-none">
            <span className="text-sm">{site.nazwaGora}</span>
            <span className="mt-1 font-display text-xl font-bold text-orange-700 dark:text-orange-300">
              {site.nazwaDol}
            </span>
          </p>
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden border border-white flex items-center px-3 py-2 rounded text-black dark:text-gray-400"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            aria-hidden="true"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Start`,
            },
            {
              route: `/kontakt`,
              title: `Kontakt`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-black dark:text-gray-400 border-b-2 border-transparent hover:border-yellow-500"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}

          <button
            aria-label="Toggle theme"
            className="focus:outline-none mt-4 md:mt-0"
            onClick={toggleTheme}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 405.526 405.526"
              className="fill-current text-black dark:text-gray-400"
            >
              <path
                d="M202.764,0C90.958,0,0,90.958,0,202.763c0,111.809,90.958,202.764,202.763,202.764
		          c111.808,0,202.763-90.955,202.763-202.764C405.526,90.958,314.571,0,202.764,0z M22.952,202.763
		          c0-99.146,80.665-179.811,179.812-179.811v359.623C103.616,382.574,22.952,301.91,22.952,202.763z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
