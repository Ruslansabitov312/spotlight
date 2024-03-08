import cls from './postCard.module.css'
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={cls.container}>
             <div className={cls.top}>
                 <div className={cls.imgContainer}>
                     <Image src={"https://images.pexels.com/photos/20264139/pexels-photo-20264139.jpeg"} alt={""} fill className={cls.img} />
                 </div>
                 <span className={cls.date}>01.01.2024</span>
             </div>
            <div className={cls.bottom}>
                <h1 className={cls.title}></h1>
                <p className={cls.descr}>Description</p>
                <Link className={cls.link} href={"/blog/post"}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard