import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotoPage = async () => {
  const res = await fetch("https://pixgen-project-seven.vercel.app/data.json", {
    cache: "no-store",
  });

  const photos = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          All Photos
        </h2>

        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Explore thousands of AI-generated creative images and get inspired by
          unique prompts
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotoPage;
