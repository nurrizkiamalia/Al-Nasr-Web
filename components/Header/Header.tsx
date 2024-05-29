"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Navlist from "./Navlist";
import Button from "../Button";
import ContentContainer from "@/components/ContentContainer";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleClickOpen = () => {
    setIsOpen(false);
    document.body.style.overflow = "hidden";
  };
  
  const handleClickClose = () => {
    setIsOpen(true);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <ContentContainer className=" relative flex justify-between items-center py-10 ">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="text-pLg flex gap-11">
            <Navlist className="hidden lg:block" />
          </div>
          <div className="">
            <Button className="hidden lg:block">Contact Us</Button>
          </div>
        </div>
        <button
          onClick={handleClickOpen}
          className="border-[1px] bg-dspGreen border-white shadow-shadow1 shadow-gray-300 rounded-xl lg:hidden p-5 "
        >
          <FaBars className="text-white" />
        </button>
        <div
          className={`w-full z-50 absolute lg:hidden top-0 left-0 ${
            isOpen ? "hidden" : "lg:block"
          }`}
        >
          <div
            className={` responsive-nav p-5 h-screen bg-dspGreen w-full flex flex-col items-start gap-5 `}
          >
            <button
              onClick={handleClickClose}
              className=" self-end w-fit border-[1px] bg-dspGreen border-white shadow-shadow1 shadow-gray-300 rounded-xl lg:hidden p-5 "
            >
              {" "}
              <IoCloseSharp className="text-white" />{" "}
            </button>
            <Navlist className=" text-white flex flex-col items-start justify-start gap-3 " />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Header;
