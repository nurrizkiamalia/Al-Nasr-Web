import Image from "next/image";
import makkah from "@/public/assets/hero-img.png";
import review1 from "@/public/assets/review1.png";
import review2 from "@/public/assets/review2.png";
import playbtn from "@/public/assets/Play.png";

const RightContent: React.FC = () => {
  return (
    <>
      <div className="relative flex items-center justify-center text-dspDarkGray">
        <div className="absolute h-[250px] w-full bg-dspGreen -z-10 rounded-xl "></div>
        <div className=" h-full w-full relative flex justify-center items-center ">
            <div className="overflow-hidden rounded-xl">
                <Image src={makkah} alt="makkah" className="hover:scale-110 transition-all ease-linear rounded-xl" />
            </div>
            <Image src={playbtn} alt="play" className="absolute z-10 cursor-pointer hover:animate-bounce transition-all ease-in-out "/>
          <div className="absolute top-5 right-0 bg-white border-[1px] border-dspYellow rounded-xl flex gap-3 p-2 items-center justify-between hover:scale-105 transition-all ease-linear">
            <Image src={review1} alt="reviewer" />
            <div>
              <p className="text-pSm font-semibold">“Let's worship as good Muslims”.</p>
              <p className="font-kufam text-pSm font-semibold">Ali Qualadeini</p>
            </div>
          </div>
          <div className="absolute -bottom-14 left-0 bg-white border-[1px] border-dspGreen rounded-xl flex gap-3 p-2 items-center justify-between hover:scale-105 transition-all ease-linear">
            <Image src={review2} alt="reviewer" />
            <div>
              <p className="text-pSm font-semibold">“The most amazing city of Mecca”.</p>
              <p className="font-kufam text-pSm font-bold">Mohammad Qassem</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContent;
