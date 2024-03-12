"use client"

import { useFormState } from "react-dom";
import cls from './registerForm.module.css'
import {register} from "@/lib/action";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {toast} from "react-toastify";

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter()

    useEffect(() => {
        if (state?.success) {
            toast.success("Your account has been created.")
            router.push("/login")
        }
    }, [state?.success, router])

    return (
        <form action={formAction} className={cls.form}>
            <input required type="text" placeholder={"username"} name={"username"} />
            <input required type="email" placeholder={"email"} name={"email"} />
            <input required type="password" placeholder={"password"} name={"password"} />
            <input required type="password" placeholder={"confirm password"} name={"confirmPassword"} />
            <button>Register</button>
            <span className={cls.error}>{state?.error}</span>
            <Link href={"/login"}>Have an account? <b>Login</b></Link>
        </form>

    )
}

export default RegisterForm