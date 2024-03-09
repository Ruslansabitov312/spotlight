import cls from './postUser.module.css'
import {getUser} from "@/lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
    const user = await getUser(userId)

    return (
        <div className={cls.container}>
            <Image
                className={cls.avatar}
                src={user.img ? user.img : "/noavatar.png"}
                alt={"avatar"}
                width={50}
                height={50}
            />
            <div className={cls.texts}>
                <span className={cls.title}>Author</span>
                <span className={cls.username}>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser