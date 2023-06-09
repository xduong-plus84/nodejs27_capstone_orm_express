import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { localStorage } from "../services/localStorage";
import { serviceNguoiDung } from "../services/serviceNguoiDung";

export default function TrangDangNhap() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      mat_khau: "",
    },
    onSubmit: (thongTinDangNhap) => {
      // serviceNguoiDung
      //   .dangNhap(thongTinDangNhap)
      //   .then((res) => {
      //     let result = res.data.content;
      //     onSuccess(); // hien thong bao
      //     serviceLocalStorage.user.set(result); // luu data localStorage
      //     dispatch(dangNhapAction(result)); // thay doi du lieu tren store
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     onFail();
      //   });
      serviceNguoiDung
        .dangNhap(thongTinDangNhap)
        .then((res) => {
          console.log(res);
          let result = res.data.content;
          localStorage.user.set(result);
          alert(res.data.message);
          setTimeout(() => {
            navigate("/");

            // history.back();
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          // alert(err.response.data.message);
        });
    },
  });
  return (
    <div>
      <section className="bg-white">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage: 'url("https://dummyimage.com/700x700")',
            }}
          ></div>
          <div className="flex flex-col items-center justify-between w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <Link to={"/"} className="mb-8">
              <svg
                class="gUZ GjR U9O kVc"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                aria-label=""
                role="img"
              >
                <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
              </svg>
            </Link>

            <div className="w-full">
              <h1 className="mb-8 text-2xl font-bold text-center">
                WELCOME TO MY PICTURE
              </h1>
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-1 text-sm">
                  <label className="mb-2 block text-gray-600">Email</label>
                  <input
                    onChange={formik.handleChange}
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800"
                  />
                </div>
                <div className="space-y-1 text-sm mt-2">
                  <label className="mb-2 block text-gray-600">Password</label>
                  <input
                    onChange={formik.handleChange}
                    type="password"
                    name="mat_khau"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800"
                  />
                  <div className="flex justify-end text-xs text-gray-600">
                    <a rel="noopener noreferrer" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button className="block w-1/2 mx-auto mt-6 p-3 text-center rounded-md text-gray-50 bg-gray-600 hover:opacity-50 duration-300">
                  Sign in
                </button>
              </form>
            </div>
            <div className="w-full">
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300" />
                <p className="px-3 text-sm text-gray-600">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300" />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
                  </svg>
                </button>
                <button
                  aria-label="Log in with Twitter"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
                  </svg>
                </button>
                <button
                  aria-label="Log in with GitHub"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                  </svg>
                </button>
              </div>
              <p className="text-center">or</p>
              <Link to={"/sign-up"}>
                <button className="block w-1/2 mx-auto mt-2 p-3 text-center rounded-md text-gray-50 bg-green-600 hover:opacity-50 duration-300">
                  Create an account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
