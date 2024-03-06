import Links from "@/components/navbar/links/Links";
import cls from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={cls.container}>
            <div className={cls.logo}>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar