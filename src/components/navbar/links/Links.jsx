"use client"

import cls from './links.module.css'
import NavLink from "@/components/navbar/links/NavLink/NavLink";
import {useState} from "react";
import Image from "next/image";

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

const Links = () => {
    const [open, setOpen] = useState(false)

    // temporary
    const session = true
    const isAdmin = true

    return (
        <div className={cls.container}>
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
            {!open ? (
                <Image
                    className={cls.menuButton}
                    src={"/menu.png"}
                    alt={""}
                    width={30}
                    height={30}
                    onClick={() => setOpen((prev) => !prev)}
                />
            ) : (
                <Image
                    className={cls.menuButton}
                    src={"/close.png"}
                    alt={""}
                    width={30}
                    height={30}
                    onClick={() => setOpen((prev) => !prev)}
                />
            )
            }
            {
                open && <div className={cls.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.path} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Links