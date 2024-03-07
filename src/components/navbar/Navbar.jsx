import Links from "@/components/navbar/links/Links";
import cls from "./navbar.module.css"
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={cls.container}>
            <Link  href={"/"} className={cls.logo}>Spotlight</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar