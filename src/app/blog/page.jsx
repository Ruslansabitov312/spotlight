import cls from './blog.module.css'
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

// !!!FETCH DATA WITH API!!!
// const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//
//     if(!res) {
//       throw new Error("Something went wrong")
//     }
//
//     return res.json()
// }

const BlogPage =  async () => {
    // const posts = await getData()
    const posts = await getPosts()

    return (
        <div className={cls.container}>
            {posts.map((post) => (
                <div className={cls.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    )
}

export default BlogPage