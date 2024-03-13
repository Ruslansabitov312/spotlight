"use server"

import { connectToDb } from "@/lib/utils";
import {Post, User} from "@/lib/models";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "@/lib/auth";
import bcrypt from "bcryptjs";

// Add post
export const addPost = async (previousState, formData) => {
    const { title, desc, slug, userId, img } = Object.fromEntries(formData)

    try {
        await connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
            img
        })

        await newPost.save()
        console.log("saved to db")
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong.."}
    }
}

// Delete post
export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        await connectToDb()

        await Post.findByIdAndDelete(id)
        console.log("deleted from db")
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong.."}
    }
}

// Add user
export const addUser = async (previousState, formData) => {
    const { username, email, password, img  } = Object.fromEntries(formData)

    try {
        await connectToDb()
        const newUser = new User({
            username,
            email,
            password,
            img
        })

        await newUser.save()
        console.log("saved to db")
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong.."}
    }
}

// Delete user
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        await connectToDb()

        await Post.deleteMany({ userId: id})
        await User.findByIdAndDelete(id)
        console.log("deleted from db")
        revalidatePath("/admin")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong.."}
    }
}

// Login with GITHUB
export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
}

// Logout
export const handleLogout = async () => {
    "use server"
    await signOut()
}

// Registration
export const register = async ( previousState, formData) => {
    const { username, email, password, confirmPassword, img } = Object.fromEntries(formData)

    if (password !== confirmPassword) {
        return { error: "Passwords do not match." }
    }

    try {
        await connectToDb()

        const user = await User.findOne({ username })
        if (user) {
            return { error: "The username already exists." }
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
        return { success: true }
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong."}
    }
}

// Login with credentials(username, password)
export const login = async (previousState, formData) => {
    const {username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", { username, password})
    } catch (err) {
        console.log(err)

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password."}
        }

        throw err
    }
}