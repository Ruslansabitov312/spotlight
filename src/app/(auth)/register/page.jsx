import cls from './register.module.css'
import {register} from "@/lib/action";

const RegisterPage = () => {
    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <form action={register} className={cls.form}>
                    <input type="text" placeholder={"username"} name={"username"} />
                    <input type="text" placeholder={"email"} name={"email"} />
                    <input type="password" placeholder={"password"} name={"password"} />
                    <input type="password" placeholder={"confirm password"} name={"confirmPassword"} />
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage