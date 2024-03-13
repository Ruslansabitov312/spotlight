import cls from './about.module.css';
import Image from 'next/image';

export const metadata = {
    title: 'About page',
    description: 'About description',
};

const AboutPage = () => {
    return (
        <div>
            <div className={cls.container}>
                <div className={cls.textContainer}>
                    <h2 className={cls.subtitle}>About Agency</h2>
                    <h1 className={cls.title}>
                        We create digital ideas that are bigger, bolder, braver
                        and better.
                    </h1>
                    <p className={cls.descr}>
                        We create digital ideas that are bigger, bolder, braver
                        and better. We believe in good ideas flexibility and
                        precission We’re world’s Our Special Team best
                        consulting & finance solution provider. Wide range of
                        web and software development services.
                    </p>
                    <div className={cls.boxes}>
                        <div className={cls.box}>
                            <h1>10 K+</h1>
                            <p>Year of experience</p>
                        </div>
                        <div className={cls.box}>
                            <h1>234 K+</h1>
                            <p>People reached</p>
                        </div>
                        <div className={cls.box}>
                            <h1>5 K+</h1>
                            <p>Services and plugins</p>
                        </div>
                    </div>
                </div>
                <div className={cls.imgContainer}>
                    <Image
                        className={cls.img}
                        src={'/about.png'}
                        alt={'About Image'}
                        fill
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
