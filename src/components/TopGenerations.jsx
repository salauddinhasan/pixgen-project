import React from "react";
import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-project-seven.vercel.app/data.json", {
    cache: "no-store",
  });

  const photos = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Top Generations
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Explore AI-generated creative images
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {photos.slice(0, 8).map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default TopGenerations;
