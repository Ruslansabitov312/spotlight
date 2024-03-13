"use client"

import cls from './adminUserForm.module.css'
import {useFormState} from "react-dom";
import {addUser} from "@/lib/action";

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined)

    return (
        <form action={formAction} className={cls.container}>
            <h1>Add new User</h1>
            <input required type="text" name={"username"} placeholder={"Username"} />
            <input required type="email" name={"email"} placeholder={"Email"} />
            <input required type="password" name={"password"} placeholder={"Password"} />
            <input type="img" name={"img"} placeholder={"Img link"} />
            <select required name="isAdmin" id="isAdmin">
                <option value={"false"}>Is Admin?</option>
                <option value={"false"}>No</option>
                <option value={"true"}>Yes</option>
            </select>
            <button>Add</button>
            {state?.error && <span className={cls.error}>{state?.error}</span>}
        </form>
    )
}

export default AdminUserForm