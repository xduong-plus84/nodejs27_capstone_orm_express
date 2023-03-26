import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  let inputSearch = useRef(null);
  let userInfor = undefined;
  // let userInfor = { email: "test1@gmail.com", name: "duong" };

  const handelSearch = () => {
    // alert("Research");
    navigate(`/tim-hinh/`);
  };

  let handleLogOut = () => {
    // serviceLocalStorage.user.remove();
    // dispatch(dangXuatAction());
    // window.location.href = "/trangDangNhap";
    alert("LogOut");
  };

  let renderUserNav = () => {
    if (!userInfor) {
      console.log(userInfor);
      return (
        <>
          <div className="flex items-center">
            <ul className="items-stretch hidden space-x-4 lg:flex">
              <li className="flex">
                <a className="flex items-center px-4 cursor-pointer hover:text-red-500 duration-300">
                  Giới thiệu
                </a>
              </li>
              <li className="flex">
                <a className="flex items-center px-4 cursor-pointer hover:text-red-500 duration-300">
                  Blog
                </a>
              </li>
              <li className="flex">
                <NavLink
                  to={`/login`}
                  className="flex items-center px-4 cursor-pointer hover:text-red-500 duration-300"
                >
                  Đăng nhập
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to={`/sign-up`}
                  className="flex items-center px-4 py-2 cursor-pointer rounded border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 duration-300"
                >
                  Đăng ký
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex items-center">
            <ul className="items-stretch hidden space-x-8 lg:flex">
              <li className="flex">
                <button className="text-2xl">
                  <i class="fa-solid fa-bell"></i>
                </button>
              </li>
              <li className="flex">
                <button className="text-2xl">
                  <i class="fa-solid fa-comments"></i>
                </button>
              </li>
              <li className="flex">
                <button className="text-2xl">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt
                    className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300 ring-2 ring-offset-2 ring-gray-300"
                  />
                </button>
              </li>
            </ul>
          </div>
        </>
      );
    }
  };
  return (
    <header className="py-4 px-20 text-gray-800 font-semibold text-base">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <NavLink
          to={`/`}
          className="bg-black text-white py-2 px-3 rounded-full hover:opacity-50 duration-300"
        >
          Trang Chủ
        </NavLink>
        <form className="flex-1 mx-8">
          <div className="pseudo-search flex justify-between">
            <input
              type="text"
              placeholder="What are you looking?"
              name="tenHinh"
              className="flex-1 p-3 px-5 rounded-l-full focus:outline-red-500 bg-zinc-100"
              ref={inputSearch}
            />
            <button
              className="rounded-r-full bg-red-500 text-white px-4 hover:opacity-50 duration-300"
              type="submit"
              onClick={() => {
                handelSearch();
              }}
            >
              Search
            </button>
          </div>
        </form>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderUserNav()}
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
