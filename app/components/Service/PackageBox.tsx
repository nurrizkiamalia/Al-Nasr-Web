
import Image from "next/image"
import { packagesdata } from "@/data/data"
import iconplane from "@/public/assets/icon-plane.png"
import iconticket from "@/public/assets/icon-ticket.png"
import iconhotel from "@/public/assets/icon-hotel.png"
import iconvisa from "@/public/assets/icon-visa.png"
import iconfeed from "@/public/assets/icon-feed.png"
import Button from "@/components/Button"


const icon = [
    iconplane,
    iconticket,
    iconhotel,
    iconvisa,
]

const PackageBox: React.FC = () =>{
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 xl:gap-20">
            {packagesdata.map((item) => (
                <div key={item.id} className=" relative flex flex-col gap-5 items-start p-6 shadow-shadow1 rounded-xl shadow-gray-300 ">
                    <div className="rounded-xl overflow-hidden">
                        <Image 
                        src={`/assets/${item.image}`} 
                        width={311}
                        height={238}
                        alt="image"
                        className="hover:scale-110 transition-all ease-in-out"/>
                    </div>
                    <div className=" self-stretch flex justify-between items-center w-full ">
                        <p className="text-dspYellow text-pLg" >{item.type} </p>
                        <p className=" absolute right-0 mt-2 text-dspGreen bg-dspLightGreen rounded-s-full py-2 px-5 " >{item.isBestSeller ? "Best Seller" : item.isSpecialSeller ? "Special Seller" : item.isLongTrip ? "Long Trip" : item.isSpecialOffering ? "Special Offering" : ""}  </p>
                    </div>
                    <div className="flex flex-col gap-1">    
                        <h3 className="font-kufam font-bold text-pLg ">{item.title}</h3>
                        <p className="font-kufam font-bold text-pXL ">$ {item.price} / <span className="text-dspGreen ">person</span> </p>
                    </div>
                    <div className="flex gap-3">
                        {icon.concat(item.isFeed ? [iconfeed] : []).map((icon, index) => (
                            <div key={index} className="bg-dspLightGreen p-2 rounded-xl">
                                <Image 
                                src={icon}
                                width={20}
                                height={20}
                                alt="icon"/>
                            </div>
                        ))}
                    </div>
                    <Button className="bg-transparent text-dspYellow !border-dspYellow text-pSm py-2 ">View Detail</Button>
                </div>
            ))}
            <div className="relative flex flex-col gap-5 items-start p-6 shadow-shadow1 rounded-xl shadow-gray-300">
                <div className="self-stretch flex justify-center items-center w-full h-full">
                    <h3 className="font-kufam font-bold text-pLg text-dspGreen ">Soon Program</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default PackageBox