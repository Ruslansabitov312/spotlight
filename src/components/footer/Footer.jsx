import cls from './Footer.module.css'

const Footer = () => {
    return (
        <div className={cls.container}>
            <div className={cls.logo}>Spotlight</div>
            <div className={cls.text}>Spotlight creative thoughts agency © All rights reserved. </div>
        </div>
    )
}

export default Footer