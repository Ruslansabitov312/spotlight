import { Suspense } from 'react';
import cls from './admin.module.css';
import AdminPosts from '@/components/adminPosts/AdminPosts';
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';
import AdminUsers from '@/components/adminUsers/AdminUsers';
import AdminUserForm from '@/components/adminUserForm/AdminUserForm';
import { auth } from '@/lib/auth';

export const metadata = {
    title: 'Admin page',
    description: 'Admin description',
};

const AdminPage = async () => {
    const session = await auth();

    return (
        <div className={cls.container}>
            <div className={cls.row}>
                <div className={cls.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={cls.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPostForm userId={session.user.id} />
                    </Suspense>
                </div>
            </div>
            <div className={cls.row}>
                <div className={cls.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={cls.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUserForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
