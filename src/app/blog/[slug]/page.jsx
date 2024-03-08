import cls from './singlePost.module.css'
import Image from "next/image";

const SinglePostPage = () => {
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
                <h1 className={cls.title}>Title</h1>
                <div className={cls.detail}>
                    <Image
                        className={cls.avatar}
                        src={"https://images.pexels.com/photos/20264139/pexels-photo-20264139.jpeg"}
                        alt={""}
                        width={50}
                        height={50}
                    />
                    <div className={cls.detailText}>
                        <span className={cls.detailTitle}>Author</span>
                        <span className={cls.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={cls.detailText}>
                        <span className={cls.detailTitle}>Published</span>
                        <span className={cls.detailValue}>03.08.2024</span>
                    </div>
                </div>
                <div className={cls.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur corporis eius maiores mollitia quas quia, voluptatibus? Alias at cupiditate facere iure perspiciatis quas, quibusdam repellat sapiente sunt voluptatem!
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage