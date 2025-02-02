import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import Link from "next/link";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">
          D V
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-6"
          />
          devapande66@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>Copyright &copy; 2025 Pande Deva. All rights reserved</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link target="_blank" href={"https://github.com/pandedeva"}>
              Github
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/pande-deva-74b728220/"}
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"https://x.com/k1llopps"}>
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
