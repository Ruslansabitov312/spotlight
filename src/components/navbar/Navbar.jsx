import Links from '@/components/navbar/links/Links';
import cls from './navbar.module.css';
import Link from 'next/link';
import { auth } from '@/lib/auth';

const Navbar = async () => {
    const session = await auth();
    console.log('current session:', session);

    return (
        <div className={cls.container}>
            <Link href={'/'} className={cls.logo}>
                Spotlight
            </Link>
            <div>
                <Links session={session} />
            </div>
        </div>
    );
};

export default Navbar;
