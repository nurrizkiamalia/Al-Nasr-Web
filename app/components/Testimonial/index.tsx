import ContentContainer from "@/components/ContentContainer";
import TestimonialBox from "./TestimonialBox";
import Button from "@/components/Button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { testimonialdata } from "@/data/data";

const Testimonial: React.FC = () => {
  const halfIndex = Math.ceil(testimonialdata.length / 2);
  const firstHalfData = testimonialdata.slice(0, halfIndex);
  const secondHalfData = testimonialdata.slice(halfIndex);

  return (
    <>
      <ContentContainer className="w-full flex flex-col items-end gap-10 px-10 py-[50px] xl:p-[100px]">
        <div className="w-full gap-5 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-end">
          <Button className="w-fit flex gap-3 items-center">
            {" "}
            <FaArrowLeftLong /> Previous
          </Button>
          <div className="xl:w-[65%] text-right">
            <h2 className="font-kufam font-bold text-heading3 lg:text-heading2 xl:text-heading text-dspBlack">
              Testimonial from our customer
            </h2>
            <p className="font-semibold text-dspDarkGray text-pLg md:text-pXL lg:text-pText">
              Choose your package according to your needs, guaranteed cheap and complete
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 self-start w-full">
          <div className="airways relative flex flex-col items-center lg:flex-row overflow-x-hidden lg:overflow-x-auto py-2 gap-5 lg:gap-10">
            <div className="flex flex-nowrap gap-10">
              <TestimonialBox data={firstHalfData} />
            </div>
          </div>
          <div className="airways hidden relative lg:flex flex-col items-center lg:flex-ro overflow-x-hiddenw lg:overflow-x-auto py-2 gap-5 lg:gap-10">
            <div className="flex flex-nowrap gap-10">
              <TestimonialBox data={secondHalfData} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="flex w-fit gap-3 items-center">
            {" "}
            Next <FaArrowRightLong />
          </Button>
        </div>
      </ContentContainer>
    </>
  );
};

export default Testimonial;