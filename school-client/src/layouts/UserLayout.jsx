import { Outlet } from "react-router";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Navigation from "../components/home/Navigation";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navigation></Navigation>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
