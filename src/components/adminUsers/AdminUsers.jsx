import cls from './adminUsers.module.css'
import {getUsers} from "@/lib/data";
import Image from "next/image";
import {deleteUser} from "@/lib/action";

const AdminUsers = async () => {
    const users = await getUsers()

    return (
        <div className={cls.container}>
            <h1>Users</h1>
            {users.map(user => (
                <div className={cls.user} key={user.id}>
                    <div className={cls.detail}>
                        <Image
                            src={user.img || "/noAvatar.png"}
                            alt={"avatar"}
                            width={50}
                            height={50}
                        />
                        <span className={user.isAdmin && cls.admin}>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name={"id"} value={user.id} />
                        <button className={cls.deleteUserBtn}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default AdminUsers