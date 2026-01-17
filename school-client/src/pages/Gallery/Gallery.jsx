import React, { useState } from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import schoolImage from "../../assets/img/schoolImage.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery data with categories
  const galleryData = [
    {
      id: 1,
      src: img1,
      category: "events",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫",
      date: "১৫ ডিসেম্বর ২০২৫",
    },
    {
      id: 2,
      src: img2,
      category: "campus",
      title: "বিদ্যালয় ক্যাম্পাস দৃশ্য",
      date: "১০ জানুয়ারি ২০২৬",
    },
    {
      id: 3,
      src: img3,
      category: "events",
      title: "সাংস্কৃতিক অনুষ্ঠান",
      date: "২০ নভেম্বর ২০২৫",
    },
    {
      id: 4,
      src: schoolImage,
      category: "campus",
      title: "প্রধান ভবন",
      date: "০৫ জানুয়ারি ২০২৬",
    },
    {
      id: 5,
      src: img1,
      category: "achievements",
      title: "বিজ্ঞান মেলা বিজয়ীগণ",
      date: "২৮ অক্টোবর ২০২৫",
    },
    {
      id: 6,
      src: img2,
      category: "events",
      title: "স্বাধীনতা দিবস উদযাপন",
      date: "১৬ ডিসেম্বর ২০২৫",
    },
    {
      id: 7,
      src: img3,
      category: "campus",
      title: "গ্রন্থাগার বিভাগ",
      date: "১২ জানুয়ারি ২০২৬",
    },
    {
      id: 8,
      src: schoolImage,
      category: "achievements",
      title: "জাতীয় পুরস্কার অনুষ্ঠান",
      date: "২৫ সেপ্টেম্বর ২০২৫",
    },
    {
      id: 9,
      src: img1,
      category: "events",
      title: "শিক্ষক দিবস উদযাপন",
      date: "০৫ সেপ্টেম্বর ২০২৫",
    },
    {
      id: 10,
      src: img2,
      category: "campus",
      title: "কম্পিউটার ল্যাব",
      date: "০৮ জানুয়ারি ২০২৬",
    },
    {
      id: 11,
      src: img3,
      category: "achievements",
      title: "আন্তঃবিদ্যালয় প্রতিযোগিতা",
      date: "১৮ নভেম্বর ২০২৫",
    },
    {
      id: 12,
      src: schoolImage,
      category: "events",
      title: "বার্ষিক অনুষ্ঠান",
      date: "৩০ ডিসেম্বর ২০২৫",
    },
  ];

  const categories = [
    { id: "all", label: "সব ছবি" },
    { id: "events", label: "অনুষ্ঠান" },
    { id: "campus", label: "ক্যাম্পাস" },
    { id: "achievements", label: "সাফল্য" },
  ];

  // Category name mapping for badges
  const categoryNamesBangla = {
    events: "অনুষ্ঠান",
    campus: "ক্যাম্পাস",
    achievements: "সাফল্য",
  };

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === selectedCategory);

  // Open lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
          ফটো গ্যালারি
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-emerald-500 hover:text-emerald-600 hover:scale-105 shadow-sm"
              }`}
            >
              <span className="li-font">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl cursor-pointer transform transition-all duration-500 bg-white border border-gray-100 hover:border-emerald-200"
            >
              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Gradient Overlay - Always visible but subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Hover Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-base mb-1.5 li-font drop-shadow-lg">
                      {image.title}
                    </p>
                    <div className="flex items-center gap-2 text-white/90 text-xs">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="li-font">{image.date}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg li-font transform group-hover:scale-110 transition-transform duration-300">
                  {categoryNamesBangla[image.category]}
                </div>

                {/* View Icon */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-sm font-bold text-gray-800 mb-2 li-font line-clamp-2 leading-relaxed group-hover:text-green-600 transition-colors duration-300">
                  {image.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs li-font">{image.date}</p>
                  </div>
                  <div className="text-green-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2 li-font">
              কোন ছবি পাওয়া যায়নি
            </h3>
            <p className="text-gray-500 poppins-font">
              অনুগ্রহ করে অন্য ক্যাটাগরি নির্বাচন করুন
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-3"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[90vh] w-full"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            {/* Image Info */}
            <div className="bg-white/10 backdrop-blur-md text-white p-4 rounded-b-lg mt-2">
              <h3 className="text-xl font-bold mb-1 li-font">
                {selectedImage.title}
              </h3>
              <p className="text-sm opacity-90 li-font">
                {selectedImage.date} •{" "}
                <span>{categoryNamesBangla[selectedImage.category]}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
