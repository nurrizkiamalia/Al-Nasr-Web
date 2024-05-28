import ContentContainer from "@/components/ContentContainer"
import LeftContentHero from "./LeftContentHero"
import RightContentHero from "./RightContentHero"

const Hero: React.FC = () => {
    return(
        <>
            <ContentContainer className="flex flex-col w-full lg:flex-row gap-5 pb-[100px] pt-20 ">
                <div className=" lg:w-[55%] ">
                    <LeftContentHero />
                </div>
                <div className=" lg:w-[45%] ">
                    <RightContentHero />
                </div>
            </ContentContainer>
        </>
    )
}

export default Hero