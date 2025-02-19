import { Navigate } from "react-router-dom";

import { PATH } from "./path";
import { SignIn } from "@/pages";
import { StudentDashboard } from "@/pages/studentDashboard/page";
import { TeacherDashboard } from "@/pages/teacherDashboard/page";
import { AdminDashboard } from "@/pages/adminDashboard/page";

// export const pathSlicer = (path, sliceStart = 1) => path?.slice(sliceStart);

const privateRoutes = [
  {
    path: "/",
    element: <Navigate to={PATH.SignUp} />,
  },
  {
    path: PATH.StudentDashboard,
    element: <StudentDashboard />,
  },
  {
    path: PATH.TeachersDashboard,
    element: <TeacherDashboard />,
  },
  {
    path: PATH.AdminDashboard,
    element: <AdminDashboard />,
  },
  // {
  //   path: PATH.Setting,
  //   element: "",
  // },
];

const publicRoutes = [
  {
    path: PATH.SignUp,
    element: <SignIn />,
  },
];

export { privateRoutes, publicRoutes };
