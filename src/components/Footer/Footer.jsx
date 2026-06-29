import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.jsx";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-slate-50 border border-t-2 border-t-[#21f1a8] border-b-[#21f1a8]">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 mx-auto items-center">
                <Logo width="100px" />
              </div>
              <img src="/logo.jpg" alt="logo" className="w-100 mx-auto" />
              <div>
                <p className="text-sm text-[#2a2312]">
                  &copy; Copyright 2026. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-[#2a2312] hover:text-[#2bee34] transition-all duration-300 ease-in-out"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
