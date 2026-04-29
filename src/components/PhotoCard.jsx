import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const PhotoCard = ({ photo }) => {
  return (
    <div className="group rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          alt={photo.title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Chip
          size="sm"
          className="absolute top-2 right-2 bg-black/40 text-white backdrop-blur-md border border-white/20"
        >
          {photo.category}
        </Chip>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        <h2 className="text-sm font-medium line-clamp-1">{photo.title}</h2>

        {/* Actions */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaHeart className="text-gray-500" />
            <p>{photo.likes}</p>
          </div>

          <div className="flex items-center gap-1">
            <LuDownload />
            <p>{photo.downloads || 0}</p>
          </div>
        </div>
        <Link href={`/all-photos/${photo.id}`}>
        <button className="w-full py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-800 hover:text-white transition-all">
          View
        </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoCard;
