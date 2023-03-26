import { createBrowserRouter } from "react-router-dom";
import LayoutDesktop from "../Components/Layout/LayoutDesktop";
import TrangChiTietAnh from "../Pages/TrangChiTietAnh";
import TrangChu from "../Pages/TrangChu";
import TrangChuSearch from "../Pages/TrangChuSearch";
import TrangDangKy from "../Pages/TrangDangKy";
import TrangDangNhap from "../Pages/TrangDangNhap";

const routesDefault = [
  {
    path: "/",
    element: <LayoutDesktop Component={TrangChu} />,
  },
  {
    path: "/tim-hinh",
    element: <LayoutDesktop Component={TrangChuSearch} />,
  },
  {
    path: "/login",
    element: <TrangDangNhap />,
  },
  {
    path: "/sign-up",
    element: <TrangDangKy />,
  },
  {
    path: "/trang-chi-tiet-anh/:hinhAnhID",
    element: <LayoutDesktop Component={TrangChiTietAnh} />,
  },
  {
    path: "*",
    element: <LayoutDesktop Component={TrangChu} />,
  },
];

export const rootRoute = createBrowserRouter(routesDefault);
