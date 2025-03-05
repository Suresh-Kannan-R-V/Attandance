import {
  DashboardIcon,
  LooksOneIcon,
  LooksTwoIcon,
  PeopleAltIcon,
  PersonIcon,
} from "@/assets/icons";
import { useInitialSetUp } from "@/context/initialSetUp";
import { getSidebarMenu, useDarkMode } from "@/utils/sideMenu";
import React from "react";
import { NavItemProps, Sidebar } from "./sidebar";
import { googleLogout } from "@react-oauth/google";

export const WithSideBar = () => {
  const { navigateTo, userLoginData, setUserLoginData } = useInitialSetUp();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const onSideBarChange = (data: NavItemProps) => {
    if (data?.route) {
      navigateTo(data?.route);
    }
  };

  console.log(userLoginData, "jshdgjhaj");

  const handleLogOut = () => {
    googleLogout();
    setUserLoginData({});
    navigateTo("/signIn");

  };

  const getIcon = (key: string) => {
    switch (key) {
      case "Dashboard":
        return <DashboardIcon />;
      case "page1":
        return <LooksOneIcon />;
      case "student":
        return <PeopleAltIcon />;
      case "admin":
        return <PersonIcon />;
      case "page2":
        return <LooksTwoIcon />;
      default:
        return <></>;
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
    <>
      <Sidebar
        items={defaultItems}
        onSideBarChange={onSideBarChange}
        onPressColorMode={toggleDarkMode}
        onPressLogout={handleLogOut}
        isDarkMode={isDarkMode}
        profileImage={userLoginData?.picture}
        userName={userLoginData?.name}
        Email={userLoginData?.email}
      />
    </>
  );
};
