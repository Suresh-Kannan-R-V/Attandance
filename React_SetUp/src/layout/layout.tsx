import { WithSideBar } from "@/components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex md:block">
      <div>
        <WithSideBar />
      </div>
      <div className="w-full h-screen overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-blue-200">
        <div className="bg-background-foreground p-4">Header</div>
        <div className="p-10 bg-background">
          <>
            <Outlet />
          </>
        </div>
      </div>
    </div>
  );
};

export default Layout;
