import { Button, cn, Divider } from "@heroui/react";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export type NavItemProps = {
  id?: string;
  key: string;
  icon: React.ReactNode;
  route?: string;
};

export type SidebarProps = {
  items?: NavItemProps[]; // Sidebar items
  activeKey?: string; // Active key for selected item
  onSideBarChange: (data: NavItemProps) => void; // Callback for navigation change
  onPressColorMode?: () => void; // Toggle dark mode callback
  onPressLogout?: () => void; // Logout callback
  profileImage?: string; // Profile image URL
  isColorMode?: boolean;
  isDarkMode?: boolean;
  className?: string;
};

export const Sidebar = (props: SidebarProps) => {
  const {
    className,
    activeKey = "",
    items = [],
    onSideBarChange = () => {},
    onPressColorMode = () => {},
    onPressLogout = () => {},
    profileImage,
    isColorMode,
    isDarkMode,
  } = props;

  const location = useLocation();

  // Sidebar action items (e.g., logout, dark mode toggle)
  const actionItems = useMemo(
    () =>
      [
        !isColorMode && {
          key: "colorMode",
          icon: isDarkMode ? <LightModeIcon /> : <DarkModeIcon />,
          onPress: onPressColorMode,
        },
        { key: "logout", icon: "", onPress: onPressLogout },
      ].filter(Boolean) as {
        key: string;
        icon: React.ReactNode;
        onPress?: () => void;
      }[],
    [onPressLogout, onPressColorMode]
  );

  return (
    <div
      className={cn(
        "h-screen gap-3 bg-background-foreground w-[4rem] flex flex-col items-center",
        className
      )}
    >
      {/* Sidebar Logo */}
      <div className="px-2 pb-1.5 pt-3 shrink-0">
        <img
          src={""}
          alt="L"
          className="w-[46px] h-[46px] rounded-full bg-secondary bg-opacity-35 "
        />
      </div>

      {/* Sidebar Navigation Items */}
      <div className="grow flex flex-col items-center gap-3">
        <Divider className="mb-1" />
        {items.map((item) => (
          <div className="relative" key={item.key}>
            <div
              className={cn(
                "rounded-xl h-[2.75rem] w-[2.7rem] flex justify-center items-center text-content1",
                location.pathname === item.route && "bg-secondary bg-opacity-35"
              )}
              onClick={() => onSideBarChange(item)}
              role="button"
            >
              {item.icon}
            </div>
            <div
              className={cn(
                "absolute bg-secondary w-3.5 h-3.5 rounded-full top-[40%] right-0 translate-x-[18px] hidden",
                location.pathname === item.route && "block"
              )}
            ></div>
          </div>
        ))}
      </div>

      {/* Sidebar Action Items */}
      <div>
        <Divider />
        <div className="w-full py-3 flex flex-col items-center gap-4">
          {actionItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl h-[2.75rem] w-[2.7rem] flex justify-center items-center bg-secondary bg-opacity-35 text-content1"
              onClick={() => item?.onPress?.()}
              role="button"
            >
              {item.icon}
            </div>
          ))}
          <Divider />
        </div>
        {/* Profile Image */}
        <div className="py-3.5">
          <img
            src={profileImage}
            alt="P"
            className="rounded-full w-[46px] h-[46px] bg-secondary bg-opacity-35"
          />
        </div>
      </div>
    </div>
  );
};
