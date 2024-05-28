import { ReactNode } from "react";

interface ContainerProps{
    className?: string;
    children?: JSX.Element | ReactNode;
}

const ContentContainer: React.FC<ContainerProps> = ({className, children}) =>{
    return(
        <div className={`px-5  md:px-10 lg:px-16 xl:px-[100px] ${className} `}>{children} </div>
    )
}

export default ContentContainer