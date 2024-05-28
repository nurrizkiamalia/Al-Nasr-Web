import ContentContainer from "@/components/ContentContainer"
import Image from "next/image"
import { facilitiesdata } from "@/data/data"

const Facilities: React.FC = () => {
    return(
        <>
        <ContentContainer className="w-full bg-dspBgGreen flex flex-col items-center gap-10 py-[100px] ">
            <div className="text-center xl:w-[70%] ">
                <h1 className=" font-kufam font-bold text-heading3 lg:text-heading2 xl:text-heading " >Facilities We Provide For You</h1>
                <p className=" font-semibold text-pLg md:text-pXL lg:text-pText ">We provide comfort for our customers, with the various facilities we provide that we provide</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                {facilitiesdata.map((item, index) => (
                    <div key={index} className="facility flex gap-5 justify-center p-5 items-start bg-white shadow-shadow1 shadow-gray-300 rounded-xl">
                        <div className="bg-dspLightGreen p-2 rounded-xl">
                            <Image 
                                src={`/assets/${item.icon}`}
                                alt="icon"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div>
                            <p className=" font-kufam font-semibold text-pLg " >{item.title} </p>
                            <p className=" font-nunito text-[14px] font-medium " >{item.text} </p>
                        </div>
                    </div>
                ))}
            </div>
        </ContentContainer>
        </>
    )
}

export default Facilities