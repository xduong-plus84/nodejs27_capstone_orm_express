import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card/Card";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../redux/actions/actionsTrangLoading";
import { serviceHinhAnh } from "../services/serviceHinhAnh";

export default function TrangChuSearch() {
  const search = useLocation().search;
  const tenHinh = new URLSearchParams(search).get("tenHinh");
  console.log(tenHinh);

  const [hinhAnhArr, setHinhAnhArr] = useState([]);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingOnAction());
    serviceHinhAnh
      .timKiemHinhAnh(tenHinh)
      .then((res) => {
        dispatch(setLoadingOffAction());
        // console.log(res.data);
        setHinhAnhArr(res.data);
      })
      .catch((err) => {
        dispatch(setLoadingOffAction());
        console.log(err);
      });
  }, []);

  // let data = {
  //   ten_nguoi_dung: "duong",
  //   id_anh: 1,
  //   duong_dan: "1679104016696_hinh01.jpg",
  // };

  const renderHinhAnh = () => {
    console.log(hinhAnhArr);
    return hinhAnhArr.map((data, index) => {
      return <Card key={index} props={data} />;
    });
  };

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{renderHinhAnh()}</div>
        </div>
      </section>
    </div>
  );
}
