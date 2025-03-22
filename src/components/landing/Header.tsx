import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-[42px] max-sm:py-5">
      <div className="flex items-center gap-[100px] max-md:gap-[50px] max-sm:gap-5">
        <div className="flex items-end gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96fd91d340b3d148508a313885b4b754d8490825"
            alt="KWS Logo"
            className="w-[36px] h-[40px]"
          />
          <div className="text-white text-3xl font-semibold leading-[31px]">
            KWS
          </div>
        </div>
        <nav className="flex items-center gap-[27px] max-sm:hidden">
          <Link to="/" className="text-white text-lg font-medium leading-5">
            HOME
          </Link>
          <div className="flex items-center gap-[5px] cursor-pointer">
            <span className="text-white text-lg font-medium leading-5">
              PROJECT
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.3681 11.6565L9.8188 7.20473C9.9196 7.10394 10.056 7.04732 10.199 7.04732C10.341 7.04732 10.478 7.10394 10.579 7.20473C10.68 7.30551 10.736 7.44221 10.736 7.58474C10.736 7.72727 10.68 7.86397 10.579 7.96476L5.7481 12.7954C5.6983 12.8454 5.639 12.8851 5.5738 12.9121C5.5086 12.9392 5.4387 12.9531 5.3681 12.9531C5.2975 12.9531 5.2276 12.9392 5.1624 12.9121C5.0972 12.8851 5.0379 12.8454 4.9881 12.7954L0.1574 7.96476C0.0566 7.86397 0 7.72727 0 7.58474C0 7.44221 0.0566 7.30551 0.1574 7.20473C0.2582 7.10394 0.3949 7.04732 0.5374 7.04732C0.68 7.04732 0.8166 7.10394 0.9174 7.20473L5.3681 11.6565Z"
                fill="white"
              />
            </svg>
          </div>
          <Link
            to="/contact"
            className="text-white text-lg font-medium leading-5"
          >
            CONTACT
          </Link>
          <div className="flex items-center gap-[5px] cursor-pointer">
            <span className="text-white text-lg font-medium leading-5">
              COMPANY
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.3681 11.6565L9.8188 7.20473C9.9196 7.10394 10.056 7.04732 10.199 7.04732C10.341 7.04732 10.478 7.10394 10.579 7.20473C10.68 7.30551 10.736 7.44221 10.736 7.58474C10.736 7.72727 10.68 7.86397 10.579 7.96476L5.7481 12.7954C5.6983 12.8454 5.639 12.8851 5.5738 12.9121C5.5086 12.9392 5.4387 12.9531 5.3681 12.9531C5.2975 12.9531 5.2276 12.9392 5.1624 12.9121C5.0972 12.8851 5.0379 12.8454 4.9881 12.7954L0.1574 7.96476C0.0566 7.86397 0 7.72727 0 7.58474C0 7.44221 0.0566 7.30551 0.1574 7.20473C0.2582 7.10394 0.3949 7.04732 0.5374 7.04732C0.68 7.04732 0.8166 7.10394 0.9174 7.20473L5.3681 11.6565Z"
                fill="white"
              />
            </svg>
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-[21px]">
        <button className="w-[37px] h-[37px] flex items-center justify-center">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.97884 14.375H29.5622M23.3955 28.25V23.625M14.1455 28.25H14.1609M18.7705 28.25H18.7859M18.7705 23.625H18.7859M14.1455 23.625H14.1609M23.3955 19H23.4109M18.7705 19H18.7859M14.1455 19H14.1609M12.9122 32.875H24.6288C26.3557 32.875 27.2191 32.875 27.8787 32.5389C28.4588 32.2434 28.9305 31.7716 29.2261 31.1915C29.5622 30.532 29.5622 29.6685 29.5622 27.9417V10.0583C29.5622 8.33151 29.5622 7.46809 29.2261 6.80853C28.9305 6.22836 28.4588 5.75667 27.8787 5.46107C27.2191 5.125 26.3557 5.125 24.6288 5.125H12.9122C11.1853 5.125 10.3219 5.125 9.66237 5.46107C9.08219 5.75667 8.6105 6.22836 8.3149 6.80853C7.97884 7.46809 7.97884 8.3315 7.97884 10.0583V27.9417C7.97884 29.6685 7.97884 30.532 8.3149 31.1915C8.6105 31.7716 9.08219 32.2434 9.66237 32.5389C10.3219 32.875 11.1853 32.875 12.9122 32.875Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="w-[37px] h-[37px] flex items-center justify-center rounded-[18px] border-[1.5px] border-[rgba(255,255,255,0.7)] max-sm:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="22"
              rx="11"
              stroke="white"
              strokeOpacity="0.7"
              strokeWidth="1.5"
            />
            <path d="M17 8H7" stroke="white" strokeLinecap="round" />
            <path d="M17 12H7" stroke="white" strokeLinecap="round" />
            <path d="M17 16H7" stroke="white" strokeLinecap="round" />
          </svg>
        </button>
        <button className="max-md:hidden max-sm:block">
          <i className="ti ti-menu-2 text-white text-2xl" />
        </button>
      </div>
    </header>
  );
};
