import cls from './Links.module.css'
import NavLink from "@/components/navbar/links/NavLink/NavLink";

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: '/',
        },
        {
            title: "About",
            path: '/about',
        },
        {
            title: "Contact",
            path: '/contact',
        },
        {
            title: "Blog",
            path: '/blog',
        },
    ]

    // temporary
    const session = true
    const isAdmin = true

    return (
        <div className={cls.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.path} />
            ))}
            {
                session ? (
                    <>
                        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
                        <button className={cls.logoutBtn}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )
            }
        </div>
    )
}

export default Links