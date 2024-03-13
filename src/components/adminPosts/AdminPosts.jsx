import cls from './adminPosts.module.css'
import {getPosts} from "@/lib/data";
import Image from "next/image";
import {deletePost} from "@/lib/action";

const AdminPosts = async () => {
    const posts = await getPosts()

    return (
        <div className={cls.container}>
            <h1>Posts</h1>
            {posts.map(post => (
                <div className={cls.post} key={post.id}>
                    <div className={cls.detail}>
                        <Image
                            src={post.img || "/noAvatar.png"}
                            alt={"postImg"}
                            width={50}
                            height={50}
                        />
                        <span className={cls.postTitle}>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name={"id"} value={post.id} />
                        <button className={cls.deletePostBtn}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default AdminPosts