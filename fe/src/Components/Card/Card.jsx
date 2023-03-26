import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ props }) {
  // console.log(props);
  let { ten_hinh, hinh_anh_id, duong_dan } = props;
  let { ho_ten } = props.nguoi_dung;
  console.log(ho_ten);
  return (
    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 p-4">
      <div className="rounded-md shadow-md bg-gray-50 text-gray-800">
        <div className="flex justify-between items-center p-4">
          <NavLink
            to={`/trang-chi-tiet-anh/${hinh_anh_id}`}
            className="text-sm font-semibold leading-none hover:underline"
            title="Xem chi tiết"
          >
            Hình: {ten_hinh}
          </NavLink>
          <button
            type="button"
            title="Lưu hình ảnh"
            className="bg-red-500 px-3 py-1 rounded-full text-white font-medium hover:opacity-50 duration-300"
          >
            Save
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={"http://localhost:8080/public/img/" + duong_dan}
            alt="hinhanh"
            className="h-72"
          />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="-space-y-1">
                <NavLink
                  to={"/something"}
                  className="text-sm font-semibold leading-none hover:underline"
                >
                  Tác giả: {ho_ten}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
