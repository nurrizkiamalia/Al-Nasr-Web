import { ReactNode } from "react";

interface BtnProps{
    onClick?: () => void;
    children?: JSX.Element | ReactNode;
    className?: string;
}

const Button: React.FC<BtnProps> = ({onClick, children, className}) =>{
    return (
        <button className={` font-bold border-transparent border-[1px] bg-dspYellow text-dspBtn px-12 py-5 rounded-xl hover:bg-dspBlack hover:text-dspYellow ${className}`} onClick={onClick}>{children} </button>
    )
}

export default Button