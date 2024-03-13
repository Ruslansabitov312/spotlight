'use client';

import cls from './navLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link
            href={item.path}
            className={`${cls.container} ${pathName === item.path && cls.active}`}
        >
            {item.title}
        </Link>
    );
};

export default NavLink;
