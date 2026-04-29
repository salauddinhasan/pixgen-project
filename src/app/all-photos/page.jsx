import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotoPage = async () => {
  const res = await fetch("https://pixgen-project-seven.vercel.app/data.json");

  const photos = await res.json();

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-5">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default AllPhotoPage;
