import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import "../../styles/styles.scss";

const Layout: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <div className="flex flex-col">
          <span className="absolute mt-32 left-16 font-la-belle-aurore lg:left-52 lg:mt-16">
            &lt;body&gt;
          </span>
          <Sidebar />
          <div className="flex p-7 mt-60 mb-20 lg:ml-32 lg:mt-50">
            <Outlet />
          </div>
        </div>
        <div className="flex-col">
          <span className="bottom-0 left-0 mb-5 ml-16 font-la-belle-aurore xl:absolute lg:ml-52 lg:mb-5 xl:bottom-12 xl:left-0">
            &lt;/body&gt;
            <br />
          </span>
          <span className="bottom-0 left-0 mb-5 ml-5 font-la-belle-aurore xl:absolute lg:ml-60 xl:bottom-0 xl:left-0">
            &lt;/html&gt;
          </span>
        </div>
      </div>
    </>
  );
};

export default Layout;
