"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Navlist from "./Navlist";
import Button from "../Button";
import ContentContainer from "@/components/ContentContainer";

const Header: React.FC = () => {

  return (
    <>
      <ContentContainer className="py-10 hidden lg:block">
        <div className="flex justify-between items-center">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="text-pLg flex gap-11">
            <Navlist className="" />
          </div>
          <Button>Contact Us</Button>
        </div>
      </ContentContainer>
    </>
  );
};

export default Header;
