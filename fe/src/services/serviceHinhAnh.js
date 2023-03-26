import { https } from "./configURL";

export const serviceHinhAnh = {
  layTatCaHinhAnh: () => {
    let uri = "api/hinh-anh/lay-tat-ca-hinh-anh";
    return https.get(uri);
  },
  timKiemHinhAnh: (search) => {
    let uri = `api/hinh-anh/tim-hinh/?tenHinh=${search}`;
    return https.get(uri);
  },
  layChiTietAnh: (hihAnhID) => {
    let uri = `/api/hinh-anh/chi-tiet-hinh/${hihAnhID}`;
    return https.get(uri);
  },
};
