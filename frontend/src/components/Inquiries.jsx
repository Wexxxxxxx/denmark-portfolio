import React from "react";
import img from "../assets/img/logo22.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Inquiries = () => {
  return (
    
    <>
      {/* Hire Us */}
      <div id="inquiries" className="flex flex-row justify-center items-center w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-slate-50">
        {/* Grid */}
        <div className="max-w-[85rem] ">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-7xl lg:leading-tight ">
                Let’s Talk About Everything!
              </h1>
              <p className="mt-1 md:text-lg text-gray-800 ">
                If you have any concerns just fill in the form.
              </p>
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-800 ">
                  What can you expect?
                </h2>
                <ul className="mt-2 space-y-2">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-600 "
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-600 ">
                      Industry-leading design
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-600 "
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-600 ">
                      Developer community support
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-600 "
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-600 0">
                      Simple and affordable
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Col */}
            <div className="relative">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 border-gray-700 shadow-lg shadow-neutral-700/50">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  Fill in the form
                </h2>
                <form>
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-firstname-hire-us-1"
                          className="block text-sm text-gray-700 font-medium "
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-hire-us-1"
                          id="hs-firstname-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-50 bg-zinc-700 dark:border-gray-700 "
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hs-lastname-hire-us-1"
                          className="block text-sm text-gray-700 font-medium "
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="hs-lastname-hire-us-1"
                          id="hs-lastname-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-zinc-700 dark:border-gray-700 "
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-1"
                        className="block text-sm text-gray-700 font-medium "
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-1"
                        id="hs-work-email-hire-us-1"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-zinc-700 dark:border-gray-700 "
                      />
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-company-hire-us-1"
                          className="block text-sm text-gray-700 font-medium "
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          name="hs-company-hire-us-1"
                          id="hs-company-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-zinc-700 dark:border-gray-700"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hs-company-website-hire-us-1"
                          className="block text-sm text-gray-700 font-medium "
                        >
                          Company Website
                        </label>
                        <input
                          type="text"
                          name="hs-company-website-hire-us-1"
                          id="hs-company-website-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-zinc-700 dark:border-gray-700"
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="hs-about-hire-us-1"
                        className="block text-sm text-gray-700 font-medium "
                      >
                        Details
                      </label>
                      <textarea
                        id="hs-about-hire-us-1"
                        name="hs-about-hire-us-1"
                        rows={4}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-zinc-700 dark:border-gray-700 "
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  {/* Checkbox */}
                  <div className="mt-3 flex">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        By submitting this form I have read and acknowledged the{" "}
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium"
                          href="#"
                        >
                          Privact policy
                        </a>
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    >
                      Send inquiry
                    </button>
                  </div>
                </form>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hire Us */}
      </div>
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="text-center flex flex-col justify-center items-center">
          <img src={img} alt="" className="w-28" />

          {/* End Col */}
          <div className="mt-3">
            <p className="text-gray-500">
              Thanyou for visiting my{" "}
              <a
                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                href="#"
              >
                Wex
              </a>{" "}
              page.
            </p>
            <p className="text-gray-500">
              © Denmark Dorado. 2023. All rights reserved.
            </p>
          </div>
          {/* Social Brands */}
          <div className="mt-3 space-x-2">
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="https://www.facebook.com/denmarkdrd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="https://www.instagram.com/wsssswsw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
              href="https://github.com/Wexxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
      </footer>
    </>
  );
};

export default Inquiries;
