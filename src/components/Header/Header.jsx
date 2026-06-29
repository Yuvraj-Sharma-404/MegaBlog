import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 fixed w-full z-100 transition-all duration-300 top-0 bg-brand-base/70 dark:bg-brand-dark/70 backdrop-blur-lg shadow-sm border-b border-brand-dark/5 dark:border-white/5 text-[#bcd1e9]">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <img src="\logo2.png" alt="logo" className="w-25 h-15" />
            </Link>
          </div>
          <ul className="flex ml-auto my-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 xl:text-[13px] min-[1400px]:text-[17px] font-bold uppercase tracking-widest hover:text-[#001621] hover:bg-[#bcd1e928] hover:rounded-xl"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null,
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
