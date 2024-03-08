import cls from './blog.module.css'
import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
    return (
        <div className={cls.container}>
            <div className={cls.post}>
                <PostCard />
            </div>
            <div className={cls.post}>
                <PostCard />
            </div>
            <div className={cls.post}>
                <PostCard />
            </div>
            <div className={cls.post}>
                <PostCard />
            </div>
            <div className={cls.post}>
                <PostCard />
            </div>
        </div>
    )
}

export default BlogPage