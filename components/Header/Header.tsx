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

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <ContentContainer className=" relative flex justify-between items-center py-10 w-full">
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
          onClick={handleClick}
          className="border-[1px] bg-dspGreen border-white shadow-shadow1 shadow-gray-300 rounded-xl lg:hidden p-5 "
        >
          <FaBars className="text-white" />
        </button>
        <div
          className={`w-full absolute lg:hidden top-0 left-0 ${
            isOpen ? "hidden" : "lg:block"
          }`}
        >
          <div
            className={` p-5 h-screen bg-dspGreen w-full flex flex-col items-start gap-5 `}
          >
            <button
              onClick={handleClick}
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
