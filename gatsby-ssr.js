import React from "react";

const themeInit = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    var dark = t === "dark" ||
      (t !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="theme-init" dangerouslySetInnerHTML={{ __html: themeInit }} />,
  ]);
};