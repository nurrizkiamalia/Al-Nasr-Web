import ContentContainer from "./ContentContainer"
import Image from "next/image"
import textlogo from "@/public/assets/alhajj.png"
import Link from "next/link"
import { FaInstagramSquare, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer: React.FC = () => {
    return(
        <>
        <ContentContainer className="bg-dspGreen text-white pt-[60px] pb-[28px] font-nunito flex flex-col gap-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-5 xl:gap-10">
                <div className="flex flex-col gap-5">
                    <div className="bg-white py-2 px-5 rounded-xl">
                        <Image 
                        src={textlogo}
                        alt="logo" />
                    </div>
                    <p>Comfortable and Quiet Worship, Our Service No. 1 in Indonesia</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Quick Links</h3>
                    <ul className="flex flex-col gap-2 text-[14px] md:text-pLg ">
                        <li className="hover:text-dspYellow"><Link href="/">About Us</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Flight Accommodation</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Facilities</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Gallery</Link></li>
                    </ul>
                </div>
                <div>
                <h3 className="font-bold text-lg">Package Umrah</h3>
                    <ul className="flex flex-col gap-2 text-[14px] md:text-pLg ">
                        <li className="hover:text-dspYellow"><Link href="/">Al Nasr Umrah Bronze</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Al Nasr Umrah Silver</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Al Nasr Umrah Gold</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Al Nasr Umrah Priority</Link></li>
                    </ul>
                </div>
                <div>
                <h3 className="font-bold text-lg">Package Hajj</h3>
                    <ul className="flex flex-col gap-2 text-[14px] md:text-pLg ">
                        <li className="hover:text-dspYellow"><Link href="/">Al Nasr Hajj Diamond</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Al Nasr Hajj Platinum</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Al Nasr Hajj Priority</Link></li>
                    </ul>
                </div>
                <div>
                <h3 className="font-bold text-lg">Office Place</h3>
                    <ul className="flex flex-col gap-2 text-[14px] md:text-pLg ">
                        <li className="hover:text-dspYellow"><Link href="/">Indonesia</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Saudi Arabia</Link></li>
                        <li className="hover:text-dspYellow"><Link href="/">Uni Emirates Arab</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row gap-5 justify-between">
                <p className="text-[14px] md:text-pLg ">Copyright &copy; 2006 - 2023 Al Nasr Travel | All Reserved</p>
                <div className="flex  gap-3">
                    <Link href="" className=" bg-white hover:bg-dspLightGreen p-2 rounded-xl"> <FaInstagramSquare className=" text-dspGreen " /> </Link>
                    <Link href="" className=" bg-white hover:bg-dspLightGreen p-2 rounded-xl"> <FaFacebook className=" text-dspGreen " /> </Link>
                    <Link href="" className=" bg-white hover:bg-dspLightGreen p-2 rounded-xl"> <FaTwitter className=" text-dspGreen " /> </Link>
                    <Link href="" className=" bg-white hover:bg-dspLightGreen p-2 rounded-xl"> <FaYoutube className=" text-dspGreen " /> </Link>
                </div>
            </div>
        </ContentContainer>
        </>
    )
}

export default Footer