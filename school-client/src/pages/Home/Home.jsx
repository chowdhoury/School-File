import GalleryImagePreview from "../../components/home/GalleryImagePreview";
import Header from "../../components/home/Header";
import History from "../../components/home/History";
import ImportantLinks from "../../components/home/ImportantLinks";
import LatestNews from "../../components/home/LatestNews";
import Message from "../../components/home/Message";
import Navigation from "../../components/home/Navigation";
import NoticeBoard from "../../components/home/NoticeBoard";
import SlideGalleryImage from "../../components/home/SlideGalleryImage";
import Slider from "../../components/home/Slider";

const Home = () => {
    return (
        <div>
            <Header></Header>

            {/* Sticky Navigation */}
            <div className="sticky top-0 z-50 bg-white shadow-md">
                <Navigation></Navigation>
            </div>

            <LatestNews></LatestNews>

            <div className="max-w-11/12 w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-10 py-10">
                <Slider></Slider>
                <NoticeBoard></NoticeBoard>
            </div>

            <Message></Message>

            <div className="max-w-11/12 w-full mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 py-10">
                <History></History>
                <ImportantLinks></ImportantLinks>
            </div>

            <section>
                <h1 className="text-2xl md:text-3xl font-bold text-center pb-7">Moments & Memories — Media Gallery</h1>
                <div className="max-w-11/12 w-full mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 pb-10">
                    <SlideGalleryImage></SlideGalleryImage>
                    <GalleryImagePreview></GalleryImagePreview>
                </div>
            </section>

        </div>
    );
};

export default Home;