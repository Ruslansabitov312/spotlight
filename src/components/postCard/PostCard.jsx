import cls from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className={cls.container}>
            <div className={cls.top}>
                <div className={cls.imgContainer}>
                    {post.img && (
                        <Image
                            src={post.img}
                            alt={''}
                            fill
                            className={cls.img}
                        />
                    )}
                </div>
                <span className={cls.date}>01.01.2024</span>
            </div>
            <div className={cls.bottom}>
                <h1 className={cls.title}>{post.title}</h1>
                <p className={cls.descr}>{post.body}</p>
                <Link className={cls.link} href={`/blog/${post.slug}`}>
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
