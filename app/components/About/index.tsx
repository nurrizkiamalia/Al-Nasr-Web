import ContentContainer from "@/components/ContentContainer"
import LeftContentAbout from "./LeftContentAbout"
import RightContentAbout from "./RightContentAbout"

const About: React.FC = () => {
    return(
        <>
        <ContentContainer className="flex flex-col-reverse w-full lg:flex-row lg:items-center gap-5 py-[100px] bg-dspBgGreen">
            <div className="lg:w-[45%] ">
                <LeftContentAbout />
            </div>
            <div className="lg:w-[55%] ">
                <RightContentAbout />
            </div>
        </ContentContainer>
        </>
    )
}

export default About