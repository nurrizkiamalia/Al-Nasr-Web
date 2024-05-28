import Button from "@/components/Button"

const LeftContent: React.FC = () => {
    return (
        <>
        <div className="flex flex-col gap-5 w-fit items-start">
            <p className="subtitle text-pXL lg:text-pText text-dspGreen bg-dspLightGreen py-[14px] px-10 w-fit rounded-xl ">No. 1 in Indonesia</p>
            <h1 className=" text-heading3 lg:text-heading2 xl:text-heading font-bold font-kufam text-dspBlack">Make it easy for your Umrah worship with Al Nasr Travel</h1>
            <p className=" text-pLg md:text-pXL lg:text-pText text-dspDarkGray">Facilitate your Umrah pilgrimage with us, we already have hundreds of thousands of customers, you can go for Umrah to Mecca and Medina</p>
            <Button className="text-dspBtn text-pXL ">Contact Us</Button>
        </div>
        </>
    )
}

export default LeftContent