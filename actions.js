"use server"
export async function greetUser(preState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    if (username === "admin" && password === "password") {
        return { message: `Welcome, ${username}!` };
    } else {
        return { message: "Invalid username or password." };
    }
}