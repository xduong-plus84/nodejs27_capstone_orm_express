import { https } from "./configURL";

export const serviceNguoiDung = {
  dangNhap: (thongTinDangNhap) => {
    let uri = "/api/quan-ly-nguoi-dung/dang-nhap";
    return https.post(uri, thongTinDangNhap);
  },
  dangKy: (thongTinDangKy) => {
    let uri = "api/quan-ly-nguoi-dung/dang-ky";
    return https.post(uri, thongTinDangKy);
  },
};
