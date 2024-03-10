import cls from './contact.module.css'
import Image from "next/image";

export const metadata = {
    title: 'Contact page',
    description: 'Contact description',
}

const ContactPage = () => {
    return (
        <div className={cls.container}>
            <div className={cls.imgContainer}>
                <Image src={"/contact.png"} alt={""} className={cls.img} fill />
            </div>
            <div className={cls.formContainer}>
                <form
                    action=""
                    className={cls.form}
                >
                    <input type="text" placeholder={"Name and Surname"} />
                    <input type="text" placeholder={"Email Address"} />
                    <input type="text" placeholder={"Phone Number (optional)"} />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder={"message"}
                    ></textarea>
                    <button type={"button"} className={cls.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage