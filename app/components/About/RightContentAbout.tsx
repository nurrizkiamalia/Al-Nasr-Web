import Button from "@/components/Button"
import Image from "next/image"
import { aboutData } from "@/data/data"

const RightContentAbout: React.FC = () => {
    return(
        <>
        <div className="flex flex-col gap-5">
            <h2 className="text-heading3 lg:text-heading2 xl:text-heading font-bold font-kufam text-dspBlack">A Wonderful Agency To Fulfill your Dreams</h2>
            <p className="text-pLg md:text-pXL lg:text-pText text-dspDarkGray">The Hajj and Umrah pilgrimages are smooth, the heart is clean. we have been trusted since 2006 and have obtained a license from SAUDI ARABIA to become this travel agency.</p>
            
                {aboutData.map((item, index) => (
                    <ul key={index} className="">
                        <li className="flex gap-5 items-center">
                            <div className="bg-dspLightGreen p-2 rounded-xl">
                            <Image 
                                src={`/assets/${item.icon}`}
                                alt="icon"
                                width={20}
                                height={20}
                            />
                            </div>
                            <p className="text-pLg md:text-pXL lg:text-pText text-dspDarkGray">{item.text}</p>
                        </li>
                    </ul>
                ))}
            <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                <Button>Learn More</Button>
                <Button className="bg-transparent text-dspYellow !border-dspYellow">Contact Us</Button>
            </div>
        </div>
        </>
    )
}

export default RightContentAbout