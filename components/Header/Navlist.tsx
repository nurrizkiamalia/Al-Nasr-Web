import Link from "next/link"

interface NavProps{
    className?: string
}

const path = [
    { pathTo: "Home", path: "/" },
    { pathTo: "About Us", path: "/#about" },
    { pathTo: "Package", path: "/#service" },
    { pathTo: "Facilities", path: "/#facilities" },
    { pathTo: "Contact Us", path: "/#footer" },
]

const Navlist: React.FC<NavProps> = ({className}) => {

    const handleClick = () => {
        document.body.style.overflow = "visible"
    }
    return(
        <>
        {path.map((item) => (
            <ul key={item.pathTo} className={` font-medium text-pLg font-nunito ${className}`}>
                <li><Link href={item.path} onClick={handleClick} className="hover:text-dspYellow">{item.pathTo}</Link></li>
            </ul>
        ))}
        </>
    )
}

export default Navlist