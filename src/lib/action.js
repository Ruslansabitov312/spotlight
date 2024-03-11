"use server"

import { connectToDb } from "@/lib/utils";
import {Post, User} from "@/lib/models";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/lib/auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData)

    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })

        await newPost.save()
        console.log("saved to db")
        revalidatePath("/blog")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong.."}
    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb()

        await Post.findByIdAndDelete(id)
        console.log("deleted from db")
        revalidatePath("/blog")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong.."}
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
}

export const handleLogout = async () => {
    "use server"
    await signOut()
}

export const register = async (formData) => {
    const { username, email, password, confirmPassword, img } = Object.fromEntries(formData)

    if (password !== confirmPassword) {
        return "Passwords do not match"
    }

    try {
        await connectToDb()

        const user = await User.findOne({ username })
        if (user) {
            return "username already exists"
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img
        })

        await newUser.save()
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!"}
    }
}

export const login = async (formData) => {
    const {username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", { username, password})
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong!"}
    }
}