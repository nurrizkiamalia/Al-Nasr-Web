"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Navlist from "./Navlist";
import Button from "../Button";
import ContentContainer from "@/components/ContentContainer";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ContentContainer className="relative flex justify-between items-center py-10">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="text-pLg flex gap-11">
            <Navlist className="hidden lg:block" />
          </div>
          <div>
            <Button className="hidden lg:block">Contact Us</Button>
          </div>
        </div>
        <button
          onClick={handleClickOpen}
          className="border-[1px] bg-dspGreen border-white shadow-shadow1 shadow-gray-300 rounded-xl lg:hidden p-5"
        >
          <FaBars className="text-white" />
        </button>
        <div
          ref={navRef}
          className={` w-full z-50 absolute lg:hidden top-0 left-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div
            className="responsive-nav p-5 h-screen bg-dspGreen w-full flex flex-col items-start gap-5"
          >
            <button
              onClick={handleClickClose}
              className="self-end w-fit border-[1px] bg-dspGreen border-white shadow-shadow1 shadow-gray-300 rounded-xl lg:hidden p-5"
            >
              <IoCloseSharp className="text-white" />
            </button>
            <Navlist className="text-white flex flex-col items-start justify-start gap-3" onClickLink={handleClickClose}  />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Header;
