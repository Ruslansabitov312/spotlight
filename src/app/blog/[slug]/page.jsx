import cls from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.desc,
    };
};

// const getData = async (slug) => {
//     const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
//         next: {revalidate: 3600}
//     })
//
//     if(!res.ok) {
//         throw new Error("Something went wrong")
//     }
//
//     return res.json()
// }

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    // const post = await getData(slug)
    const post = await getPost(slug);

    return (
        <div className={cls.container}>
            <div className={cls.imgContainer}>
                {post.img && (
                    <Image className={cls.img} src={post.img} alt={''} fill />
                )}
            </div>
            <div className={cls.textContainer}>
                <h1 className={cls.title}>{post.title}</h1>
                <div className={cls.detail}>
                    <Suspense fallback={<p>Loading...</p>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={cls.detailText}>
                        <span className={cls.detailTitle}>Published</span>
                        <span className={cls.detailValue}>
                            {post.createdAt.toString().slice(0, 10)}
                        </span>
                    </div>
                </div>
                <div className={cls.content}>{post.desc}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;
