import Image from "next/image";
import cls from './about.module.css'

const AboutPage = () => {
    return (
        <div>
            <div className={cls.imgContainer}>
                <Image src={"/about.png"} alt={""} fill />
            </div>
        </div>
    )
}

export default AboutPage