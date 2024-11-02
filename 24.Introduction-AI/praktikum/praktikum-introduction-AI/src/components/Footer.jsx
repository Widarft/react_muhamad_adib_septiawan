import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="h-[339.19px] w-[1440px] pl-[80px] pt-[60px] pr-[82px] pb-[30px]">
        <div className="text-white-footer footer-content mb-[30px] container mx-auto flex justify-between items-start flex-wrap">
          <div className="text-[14px] w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-[28px] text-blue-bg-hero font-semibold">
              ARSHA
            </h2>
            <p className="pb-10 pr-20">
              A108 Adam Street, New York, NY 535022, United States
            </p>
            <p>
              <b>Phone:</b> +1 5589 55488 55
            </p>
            <p>
              <b>Email:</b> info@example.com
            </p>
          </div>
          <div className="text-[14px] w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-[16px] text-blue-bg-hero font-semibold pb-[19px]">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-bs-blue">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bs-blue">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bs-blue">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bs-blue">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bs-blue">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="text-[14px] w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-[16px] text-blue-bg-hero font-semibold pb-[19px]">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="text-[14px] w-full md:w-1/4">
            <h4 className="text-[16px] text-blue-bg-hero font-semibold pb-[19px]">
              Our Social Networks
            </h4>
            <p className="pb-[17px]">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex space-x-[7.64px]">
              <div className="w-10 h-10 bg-blue-hover-btn rounded-full"></div>
              <div className="w-10 h-10 bg-blue-hover-btn rounded-full"></div>
              <div className="w-10 h-10 bg-blue-hover-btn rounded-full"></div>
              <div className="w-10 h-10 bg-blue-hover-btn rounded-full"></div>
              <div className="w-10 h-10 bg-blue-hover-btn rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>

      <div className="font-openSans h-[81px] w-[1440px] text-[14px] bg-blue-bg-hero text-white py-[31px] pl-[93px] pr-[81px] flex justify-between items-center">
        <p>
          &copy; Copyright <b>Arsha</b>. All Rights Reserved
        </p>
        <p>
          Design by
          <span className="text-blue-hover-btn"> BootstrapMade</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
