import { ReactNode } from "react";

interface ContainerProps{
    className?: string;
    children?: JSX.Element | ReactNode;
    id?: string
}

const ContentContainer: React.FC<ContainerProps> = ({className, children, id}) =>{
    return(
        <div className={`px-5  md:px-10 lg:px-16 xl:px-[100px] ${className} `} id={id}>{children} </div>
    )
}

export default ContentContainer