import cls from './blog.module.css'
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

export const metadata = {
    title: 'Blog page',
    description: 'Blog description',
}

const BlogPage =  async () => {
    const posts = await getPosts()

    return (
        <div className={cls.container}>
            {posts && posts.map((post) => (
                <div className={cls.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}

export default BlogPage