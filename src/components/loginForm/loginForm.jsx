"use client"

import { useFormState } from "react-dom";
import cls from './loginForm.module.css'
import {login} from "@/lib/action";
import {useRouter} from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined)
    const router = useRouter()

    // useEffect(() => {
    //     if (state?.success) {
    //         toast.success("Your account has been created.")
    //         router.push("/login")
    //     }
    // }, [state?.success, router])

    return (
        <form action={formAction} className={cls.form}>
            <input required type="text" placeholder={"username"} name={"username"} />
            <input required type="password" placeholder={"password"} name={"password"} />
            <button>Login</button>
            {state?.error && <span className={cls.error}>{state?.error}</span>}
            <Link href={"/register"}>{"Don't have an account?"} <b>Register</b></Link>
        </form>

    )
}

export default LoginForm