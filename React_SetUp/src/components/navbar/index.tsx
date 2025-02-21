import { getSidebarMenu, useDarkMode } from "@/utils/sideMenu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React from "react";
import { Sidebar } from "./sidebar";
import { useNavigate, useLocation } from "react-router-dom";

type NavItemProps = {
  id?: string;
  key: string;
  icon: React.ReactNode;
  route?: string;
};
export const WithSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const onSideBarChange = (data: NavItemProps) => {
    if (data?.route) {
      navigate(data?.route);
    }
  };

  const getIcon = (key: string) => {
    switch (key) {
      case "Dashboard":
        return <DashboardIcon />;
      case "page2":
        return <LooksTwoIcon />;
      case "student":
        return <PeopleAltIcon />;
      case "admin":
        return <PersonIcon />;
      case "page3":
        return <Looks3Icon />;
      default:
        return <CloseRoundedIcon />;
    }
  };

  const defaultItems = React.useMemo(
    () =>
      getSidebarMenu()?.map((item) => ({
        ...item,
        icon: getIcon(item?.key),
      })),
    []
  );

  return (
    <div>
      <Sidebar
        items={defaultItems}
        activeKey={location.pathname}
        onSideBarChange={onSideBarChange}
        onPressColorMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};
