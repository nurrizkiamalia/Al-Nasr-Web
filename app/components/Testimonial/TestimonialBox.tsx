import { testimonialdata } from "@/data/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TestimonialBox: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px] lg:min-w-[450px] lg:max-w-[450px] gap-5 p-5 shadow-shadow1 shadow-gray-300 rounded-xl"
        >
          <div className="flex flex-col gap-5">
            <Image
              src={`/assets/${item.image}`}
              alt="reviewer"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="flex w-fit gap-2 items-center justify-center bg-dspLightGreen text-dspGreen px-3 py-1 rounded-xl">
              <FaStar className="text-dspYellow" /> {item.star}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="bg-dspLightGreen text-dspGreen px-3 py-1 rounded-xl w-fit mb-5">{item.packet}</p>
            <p className="font-kufam text-pText font-bold">{item.name}</p>
            <p className="lg:text-pLg">{item.review}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialBox;
