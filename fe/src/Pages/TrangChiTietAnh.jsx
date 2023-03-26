import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../redux/actions/actionsTrangLoading";
import { serviceHinhAnh } from "../services/serviceHinhAnh";

export default function TrangChiTietAnh() {
  let dispatch = useDispatch();
  let { hinhAnhID } = useParams();
  let [hinhAnh, setHinhAnh] = useState({});
  let { ten_hinh, mo_ta, duong_dan } = hinhAnh;

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(setLoadingOnAction());
    serviceHinhAnh
      .layChiTietAnh(hinhAnhID)
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setHinhAnh(res.data);
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOffAction());
      });
  }, []);

  return (
    <section className="w-11/12 mx-auto">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div
          className="w-full lg:w-1/3"
          style={{
            backgroundImage: `url(${
              "http://localhost:8080/public/img/" + duong_dan
            })`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <div className="flex justify-start">
            <h2 className="text-3xl font-semibold leading-none mr-4">
              {ten_hinh}
            </h2>
            <button className="self-start px-3 py-1 font-medium rounded-3xl bg-red-600 text-white hover:opacity-50 duration-300">
              Lưu hình
            </button>
            <button className="self-start px-3 py-1 font-medium rounded-3xl bg-red-600 text-white hover:opacity-50 duration-300">
              Đã lưu
            </button>
          </div>
          <p className="mt-4 mb-8 text-sm">{mo_ta}</p>
        </div>
      </div>
    </section>
  );
}
