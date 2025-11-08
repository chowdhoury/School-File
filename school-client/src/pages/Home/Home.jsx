import Header from "../../components/home/Header";
import LatestNews from "../../components/home/LatestNews";
import Navigation from "../../components/home/Navigation";
import NoticeBoard from "../../components/home/NoticeBoard";
import Slider from "../../components/home/Slider";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <LatestNews></LatestNews>
            <div className="max-w-11/12 w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 pt-5 mb-10">
                <Slider></Slider>
                <NoticeBoard></NoticeBoard>
            </div>
        </div>
    );
};

export default Home;