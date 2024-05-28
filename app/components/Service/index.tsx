import ContentContainer from "@/components/ContentContainer"
import PackageBox from "./PackageBox"

const Service: React.FC = () => {
    return(
        <>
        <ContentContainer className=" w-full flex flex-col justify-center items-center py-[100px] gap-[72px] ">
            <div className=" xl:w-[65%] text-center ">
                <h2 className="font-kufam font-bold text-heading3 lg:text-heading2 xl:text-heading text-dspBlack ">Al Nasr Special Umrah and Hajj Packages</h2>
                <p className=" font-semibold text-dspDarkGray text-pLg md:text-pXL lg:text-pText ">Choose your package according to your needs, guaranteed cheap and complete</p>
            </div>
            <div className="">
                <PackageBox />
            </div>
        </ContentContainer>
        </>
    )
}

export default Service