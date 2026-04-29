import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-eta.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Top Generations
        </h1>
        <p className="mt-2 text-lg text-gray-500  text-center">
          Explore the most stunning and high-quality AI-generated images created
          by our community today.
        </p>
        <div className="h-1.5 w-20 bg-primary rounded-full mt-4 mx-auto lg:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
