import Image from "next/image"
import gallery1 from "@/public/assets/arab1.png"
import gallery2 from "@/public/assets/arab2.png"
import gallery3 from "@/public/assets/arab3.png"
import gallery4 from "@/public/assets/arab4.png"
import gallery5 from "@/public/assets/arab5.png"
import ContentContainer from "@/components/ContentContainer"

const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5
]

const Gallery: React.FC = () => {
    return(
        <>
            <ContentContainer className="w-full bg-dspBgGreen flex flex-col items-center gap-10 py-[50px] xl:py-[100px] ">
                <div className="text-center xl:w-[80%] ">
                    <h1 className=" font-kufam font-bold text-heading3 lg:text-heading2 xl:text-heading " >Gallery Footage In Saudi Arabia</h1>
                    <p className=" font-semibold text-pLg md:text-pXL lg:text-pText ">We provide comfort for our customers, with the various facilities we provide that we provide</p>
                </div>
                <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 ">
                    {images.map((item, index) => (
                        <div key={index} className={` rounded-xl overflow-hidden relative ${index === 0 ? "lg:col-span-2 lg:row-start-1 lg:row-span-2" : ""}`}>
                            <Image 
                            src={item}
                            alt="image gallery"
                            width={500}
                            height={1000}
                            style={{
                                height: "100%",
                                width: "100%"
                            }}
                            className="hover:scale-110 transition-all ease-in-out overflow-hidden rounded-xl"/>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </>
    )
}

export default Gallery