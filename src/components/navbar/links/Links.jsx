'use client';

import cls from './links.module.css';
import NavLink from '@/components/navbar/links/NavLink/NavLink';
import { useState } from 'react';
import Image from 'next/image';
import { handleLogout } from '@/lib/action';

const links = [
    {
        title: 'Homepage',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

const Links = ({ session }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={cls.container}>
            <div className={cls.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.path} />
                ))}
                {session?.user ? (
                    <>
                        {session?.user?.isAdmin && (
                            <NavLink
                                item={{ title: 'Admin', path: '/admin' }}
                            />
                        )}
                        <form action={handleLogout}>
                            <button className={cls.logoutBtn}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
                )}
            </div>
            {!open ? (
                <Image
                    className={cls.menuButton}
                    src={'/menu.png'}
                    alt={''}
                    width={30}
                    height={30}
                    onClick={() => setOpen((prev) => !prev)}
                />
            ) : (
                <Image
                    className={cls.menuButton}
                    src={'/close.png'}
                    alt={''}
                    width={30}
                    height={30}
                    onClick={() => setOpen((prev) => !prev)}
                />
            )}
            {open && (
                <div className={cls.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.path} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
