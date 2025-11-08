import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img3.jpg";
import img5 from "../../assets/img/img3.jpg";
import img6 from "../../assets/img/img3.jpg";

const GalleryImagePreview = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="w-full lg:max-w-3xl p-4 bg-white border border-[#013223] rounded-xl shadow-lg">

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.slice(0, 6).map((img, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                    >
                        <img
                            src={img}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-36 md:h-44 lg:h-52 object-cover rounded-lg transition-all duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center text-white font-medium">
                            View Image
                        </div>
                    </div>
                ))}
            </div>

            {/* "See More" Button */}
            <div className="flex justify-end mt-6">
                <a
                    href="/"
                    className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300 font-semibold cursor-pointer"
                >
                    See More →
                </a>
            </div>
        </div>
    );
};

export default GalleryImagePreview;








// // 🔴 Reserve code
// const GalleryImagePreview = () => {
//     // Sample image data — replace with your real images
//     const images = [
//         "/gallery/img1.jpg",
//         "/gallery/img2.jpg",
//         "/gallery/img3.jpg",
//         "/gallery/img4.jpg",
//         "/gallery/img5.jpg",
//         "/gallery/img6.jpg",
//     ];

//     return (
//         <div className="w-full lg:max-w-3xl p-4 bg-white border border-[#013223] rounded-xl shadow-lg">
//             {/* Image Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {images.slice(0, 6).map((img, index) => (
//                     <div
//                         key={index}
//                         className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
//                     >
//                         <img
//                             src={img}
//                             alt={`Gallery image ${index + 1}`}
//                             className="w-full h-36 md:h-44 lg:h-52 object-cover rounded-lg transition-all duration-300 group-hover:scale-110"
//                         />

//                         {/* Overlay effect on hover */}
//                         <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center text-white font-medium">
//                             View Image
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* "See More" Button */}
//             <div className="flex justify-end mt-6">
//                 <a
//                     to="/gallery"
//                     className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300 font-semibold cursor-pointer"
//                 >
//                     See More →
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default GalleryImagePreview;
