import cls from './Home.module.css'
import Image from "next/image";

const Home = () => {
  return <div className={cls.container}>
    <div className={cls.textContainer}>
      <h1 className={cls.title}>Creative Thoughts Agency.</h1>
      <p className={cls.descr}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reicendis a autem assumenda dolore.</p>
      <div className={cls.btns}>
        <button className={cls.btn}>Learn More</button>
        <button className={cls.btn}>Contact</button>
      </div>
      <div className={cls.brands}>
        <Image className={cls.brandImg} src={"/brands.png"} alt={""} fill />
      </div>
    </div>
    <div className={cls.imgContainer}>
      <Image className={cls.heroImg} src={"/hero.gif"} alt={""} fill />
    </div>
  </div>;
};

export default Home;