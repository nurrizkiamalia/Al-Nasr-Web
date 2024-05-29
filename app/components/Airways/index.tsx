
import Image from "next/image"
import garuda from "@/public/assets/garuda-indonesia.svg"
import qatar from "@/public/assets/qatar-airways.svg"
import emirates from "@/public/assets/fly-emirates.svg"
import saudi from "@/public/assets/saudi-air.svg"
import lion from "@/public/assets/lion-air.svg"
import { FaStar } from "react-icons/fa"

const airways = [
    garuda, qatar, emirates, saudi, lion
]

const Airways: React.FC = () => {
    return(
        <>
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 p-5 lg:p-10 md:p-20 xl:pl-[100px] w-full xl:py-[100px] xl:items-center justify-between overflow-hidden ">
            <div className="flex flex-col gap-5">
                <h3 className="font-kufam font-bold text-[32px] ">Airways Accomodation</h3>
                <p className="text-pLg md:text-pXL lg:text-pText">We cooperate with several airlines for Umrah and Hajj </p>
                <p className=" text-dspGreen bg-dspLightGreen py-2 px-4 w-fit rounded-xl flex gap-5 items-center text-pXL "> <FaStar className="text-dspYellow text-pText" /> 5.0 Rating </p>
            </div>
            <div className=" airways self-center grid grid-cols-1 md:grid-cols-2 lg:flex items-center lg:flex-row overflow-x-hidden lg:overflow-x-scroll gap-5 lg:gap-10 xl:gap-20  ">
                {airways.map((item, index) => (
                    <div key={index} className="min-w-max max-w-max">
                        <Image src={item} alt="airways" width={200} height={200} />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Airways