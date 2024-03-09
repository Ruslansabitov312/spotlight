import cls from './singlePost.module.css'
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from 'react'
import { getPost } from "@/lib/data";

// !!!FETCH DATA WITH API!!!
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//
//     if(!res) {
//         throw new Error("Something went wrong")
//     }
//
//     return res.json()
// }

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    // const post = await getData(slug)
    const post = await getPost(slug)

    return (
        <div className={cls.container}>
            <div className={cls.imgContainer}>
                <Image
                    className={cls.img}
                    src={"https://images.pexels.com/photos/20264139/pexels-photo-20264139.jpeg"}
                    alt={""}
                    fill
                />
            </div>
            <div className={cls.textContainer}>
                <h1 className={cls.title}>{post.title}</h1>
                <div className={cls.detail}>
                    <Image
                        className={cls.avatar}
                        src={"https://images.pexels.com/photos/20264139/pexels-photo-20264139.jpeg"}
                        alt={""}
                        width={50}
                        height={50}
                    />
                    <Suspense fallback={<p>Loading...</p>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={cls.detailText}>
                        <span className={cls.detailTitle}>Published</span>
                        <span className={cls.detailValue}>03.08.2024</span>
                    </div>
                </div>
                <div className={cls.content}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage