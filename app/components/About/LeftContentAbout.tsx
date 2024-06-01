import Image from "next/image";
import aboutImg from "@/public/assets/about-img.svg";
import aboutBg from "@/public/assets/about-bg.svg";
import review1 from "@/public/assets/review3.png";
import review2 from "@/public/assets/review4.png";
import textlogo from "@/public/assets/alhajj.png";
import { FaStar } from "react-icons/fa";

const LeftContentAbout: React.FC = () => {
  return (
    <>
      <div className="relative w-full h-full flex">
        <div className="">
          <Image src={aboutBg} alt="about background" />
        </div>
        <div className=" absolute top-0 ">
          <Image src={aboutImg} alt="about image" className=" " />
        </div>
        <div className=" absolute md:top-14 right-0 flex gap-5 items-center bg-white border-[1px] border-dspYellow p-2 rounded-xl w-fit ">
          <Image src={review1} alt="reviewer" />
          <div className="">
            <p>Ali Humairah</p>
            <p className="flex gap-5">
              {" "}
              <FaStar className="text-dspYellow" /> 4.8{" "}
            </p>
          </div>
        </div>
        <div className=" absolute bottom-[15%] md:bottom-[25%] right-0 flex gap-5 items-center bg-white border-[1px] border-dspGreen p-2 rounded-xl w-fit ">
          <Image src={review2} alt="reviewer" />
          <div className="">
            <p>Sahrul Alqani</p>
            <p className="flex gap-5">
              {" "}
              <FaStar className="text-dspYellow" /> 4.9{" "}
            </p>
          </div>
        </div>
        <div className="absolute -bottom-8 left-16 shadow-md shadow-gray-300 bg-white p-2 rounded-xl ">
            <Image
            src={textlogo}
            alt="logo" />
        </div>
      </div>
    </>
  );
};

export default LeftContentAbout;
