// import {useState} from 'react';
// export default function Home() {
//   const [name, setName] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("hello " + name);
//   }
//   return (
//     <div>
//       <div>
//         <h1>Student form</h1>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//         </form>
//       </div>
//     </div>
//   );
// }




// export default function Home(){
//   return(
//     <div>
//       <form onSubmit={handleSubmit}
//       className="flex flex-col gap-2 w-1/2 mx-auto mt-10">
//         <input type="text" name="name" placeholder="Name" className="border pt-2 mt-2" />
        
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
//       </form>
//     </div>
//   )
// }



// export default function Home() {
//   function handleSubmit(e) {
//     const formData = new FormData(e.target);
//     setStudent({
//       name: formData.get("name"),
//       course: formData.get("course")
//     });
//   }
//   return (
//     <div>
//       <h1>Student Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" />
//         <br />
//         <select name = "course">
//           <option value="math">Math</option>
//           <option value="science">Science</option>
//           <option value="history">History</option>
//         </select>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       { student && (
//         <div>
//           <h2>Student Info</h2>
//           <p>Name: {student.name}</p>
//           <p>Course: {student.course}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// create a form to collect the participation of your college event
// After entering the data in form user should be able to check 



// "use client"
// import {useActionState} from 'react';
// import {greetUser} from './actions';

// export default function Home() {
//   const [state, setState] = useActionState(greetUser);
  
//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     setState(formData);
//   }
  
//   return (
//     <div>
//       <h1>Student Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {state && (
//         <div>
//           <h2>Response</h2>
//           <p>{state}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// suppose there are 5 movies site where 5 movies are present and user want each user should have there own page and dynamically user want that it oprn through dyanamic routing

// / "use client"
// import {useState} from "react";
// export default function Home(){
//   const[name,setName] = useState("")
//   const[email,setEmail] = useState("")
//   const[age,setAge] = useState("")
//   const[password,setPassword] = useState("")
  
//   const[error,setError] = useState("")
//   const[success,setSuccess] = useState("")

//   function handleSubmit(e){
//     e.preventDefault();
//     setError("")
//     setSuccess("")

//     //check empty fields
//     if(!name || !email || !age || !password){
//       setError("ALL FIELDS ARE REQUIRED!!");
//       return;
//     }
//     //check name
//     if(name.length<3){
//       setError("NAME MUST CONTAIN AT LEAST 3 CHARACTERS!!");
//       return;
//     }

//     //check email
//     if(!email.includes("@")){
//       setError("ENTER A VALID EMAIL!!");
//       return;
//     }

//     //check password
//     if(password.length<8){
//       setError("PASSWORD MUST BE OF 8 CHARACTERS!!");
//       return;
//     }

//     //check age
//     if(age<18){
//       setError("AGE MUST BE ABOVE 18");
//       return;
//     }
//     setSuccess("REGISTRATION SUCCESSFULL YEAHHH!!!!!!!!!!")
//   }
//   return(
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-8">
//       <div className="w-full max-w-md rounded-2xl border border-white/60 bg-white p-8 shadow-2xl">
//       <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">REGISTRATION FORM</h1>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//       <label className="block text-sm font-semibold text-slate-700">Name
//       <input className="mt-1 w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" type="text"
//       placeholder="ENTER NAME"
//       value={name}
//       onChange={(e)=>setName(e.target.value)}/>
//       </label>
      
//       <label className="block text-sm font-semibold text-slate-700">Email
//       <input className="mt-1 w-full rounded-lg border border-purple-200 bg-purple-50 px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-200" type="text"
//       placeholder="ENTER EMAIL"
//       value={email}
//       onChange={(e)=>setEmail(e.target.value)}/>
//       </label>
      
//       <label className="block text-sm font-semibold text-slate-700">Password
//       <input className="mt-1 w-full rounded-lg border border-pink-200 bg-pink-50 px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200" type="password"
//       placeholder="ENTER PASSWORD"
//       value={password}
//       onChange={(e)=>setPassword(e.target.value)}/>
//       </label>
      
//       <label className="block text-sm font-semibold text-slate-700">Age
//       <input className="mt-1 w-full rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200" type="number"
//       placeholder="ENTER AGE"
//       value={age}
//       onChange={(e)=>setAge(e.target.value)}/>
//       </label>
      
//       <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white transition hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2" type="submit">
//         REGISTER!!
//       </button>
      
//       </form>

//       {error && <p className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-600">{error}</p>}
//       {success && <p className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-600">{success}</p>}
//       </div>
//     </div>
//   )
// }






// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="home">
//       <h1>College Event Registration</h1>
//       <p>Register now to participate in our college event.</p>

//       <Link href="/register">
//         <button>Register Now</button>
//       </Link>
//     </div>
//   );
// }



// "use client"
// import {useRouter} from "next/navigation";
// export default function Home(){
//     const router = useRouter();
//     async function login(){
//         const response = await fetch("/api/login",{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: "admin"
//             })
//         })
//         if(response.ok){
//             router.push("/dashboard");
//         }
//     }
//      return (
//         <div>
//             <h1>Login Page</h1>
//             <button onClick={login}>Login</button>
//         </div>
       
//     )
//      return response;
// }








// import Image from "next/image";
// export default function Home(){
//     return(
//         <div>
//             <h1>welcome to home page</h1>
//             <Image src="img.jpg" alt="college" width={500} height={500}/>
//         </div>
//     )
// }





// import Image from "next/image";
// export default function Home(){
//     return(
//         <div>
//             <h1>Flower to display</h1>
//             <Image src="https://plus.unsplash.com/premium_photo-1661450278870-0c9a9b9b9b9b" alt="flower" width={500} height={500}/>
//         </div>
//     )
// }



/**
 * Prepare a NEXT.JS application
 *
 * 1. Home page should have minimum 2 products displayed with name and images
 * 2. Layout of all the pages should be same including header and footer and metadata
 * 3. When user will click on one product it should open in as a new route with description of the product
 */
// import Image from "next/image";
// export const metadata = {
//     title: "my website",
//     description: "this is the home page of my website",
//     keywords: ["nextjs", "react", "Web Development"]
// };
// export default function Home(){
//     return(
//         <div>
//             <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="product1" width={500} height={500}/>
//             <Image src="https://images.unsplash.com/photo-1513708922410-1c3f1c3f1c3f" alt="product2" width={500} height={500}/>
//             <h1>Welcome to my website</h1>
//             <p>This is the home page of my website</p>
//         </div>
//     )
// };






"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ProductDetails = dynamic(
  () => import("./ProductDetails"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    const target = document.getElementById("product");

    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1>Online Shopping Website</h1>
      <h2>Welcome!!!!</h2>
      <p>Explore our latest products</p>

      <div style={{ height: "700px" }}>
        <h2>Our Products</h2>
        <p>Scroll down to view product details</p>
      </div>

      <div id="product">
        {show ? (
          <ProductDetails />
        ) : (
          <p>Product details will load here</p>
        )}
      </div>
    </div>
  );
}
