import Image from "next/image";
import React from "react";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://pixgen-project-seven.vercel.app/data.json", {
    cache: "no-store",
  });

  const photos = await res.json();

  const photo = photos.find((p) => String(p.id) === String(id));

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {" "}
      {/* Container size 5xl theke 3xl kora hoyeche */}
      {/* Image Card */}
      {/* md:aspect-video use kora hoyeche jate width beshi thakleo height boro na hoye jay */}
      <div className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-md group">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Content Section */}
      <div className="mt-6 space-y-4">
        {/* Category & Stats */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
            {photo.category}
          </span>
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1">❤️ {photo.likes}</span>
            <span className="flex items-center gap-1">
              ⬇️ {photo.downloads || 0}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">
          {photo.title}
        </h2>

        {/* Prompt Box */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">
            AI Prompt
          </h3>
          <p className="text-gray-700 leading-relaxed italic">
            {photo.prompt} 
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10">
            Download High-Res
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
