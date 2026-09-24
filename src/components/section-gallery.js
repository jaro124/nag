// src/components/section-gallery.js
import React from "react";

const SectionGallery = () => {
  return (
    <div className="px-4">
      <div className="flex justify-center my-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 uppercase underline underline-offset-8 decoration-yellow-500 lg:text-3xl dark:text-white">
            Galeria
          </h1>
        </div>
      </div>
      <div className="max-w-4xl bg-white dark:bg-neutral-800 rounded-lg mx-auto my-8 p-16">
              <h1 className="text-sm font-medium text-black dark:text-gray-400 mb-2">
                --- galeria zdjęć --- 
              </h1>
            </div>
    </div>
  );
};

export default SectionGallery;
