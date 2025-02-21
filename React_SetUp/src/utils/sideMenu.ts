import React from "react";

const isStudent: boolean = false;

interface SidebarItem {
    key: string;
    route: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getSidebarMenu = (): SidebarItem[] =>
    isStudent
        ? [
            { key: "Dashboard", route: `/student-dashboard`, },
            { key: "page2", route: "/teacher-dashboard" },
            { key: "student", route: "" },
        ]
        : [
            { key: "Dashboard", route: "/dashboard", },
            { key: "page3", route: "/page3" },
            { key: "admin", route: "/admin-dashboard", },
        ];

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(
        () => localStorage.getItem("theme") === "dark" ? true : false
    );

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return { isDarkMode, toggleDarkMode };
};


export const isClientApp = (): boolean => {
    return true;
};
