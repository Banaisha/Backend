import {cookies} from "next/headers";
import {redirect} from "next/navigation";
export default async function Dashboard(){
    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value;
    if(!username){
        redirect("/");
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {username}!</p>
            <form action="/api/logout" method="POST">
                <button type="submit">Logout</button>
            </form>
        </div>
    )
}