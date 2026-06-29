import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 xl:text-[13px] min-[1400px]:text-[17px] font-bold uppercase tracking-widest hover:text-[#001621] hover:bg-[#bcd1e928] hover:rounded-xl"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
