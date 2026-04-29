import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async ({ searchParams }) => {
  const params = await searchParams;
  const category = params.category;

  const res = await fetch("https://pixgen-eta.vercel.app/data.json", {
    next: { revalidate: 3600 },
  });
  const photos = await res.json();

  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() === category.toLowerCase(),
      )
    : photos;

  return (
    <div className="container mx-auto px-4">
      <div className="py-10 space-y-3">
        <h1 className="text-3xl font-bold my-6 text-center lg:text-left">
        {category ? `Category: ${category}` : "All Photos"}
      </h1>

      <div className="mb-8">
        <Category />
      </div>

      </div>
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No photos found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllPhotosPage;
