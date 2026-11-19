// export default function Students(){
//     const students = [
//         {id: 1, name: "John Doe", age: 20, course: "Computer Science"},
//         {id: 2, name: "Jane Smith", age: 22, course: "Mathematics"},
//         {id: 3, name: "Michael Johnson", age: 21, course: "Physics"},
//     ];
//     return (
//         <div>
//             <h1 className="text-2xl font-bold">Students</h1>
//             <div className="text-2xl space-y-3">
//                 {students.map((student) => 
//                 <div key={student.id} className="border p-4 rounded shadow-md">
//                     <h2 className="text-xl font-semibold">{student.name}</h2>
//                     <p>Age: {student.age}</p>
//                     <p>Course: {student.course}</p>
//                     <Link href={`/students/${student.id}`} className="text-blue-500 hover:underline">
//                         View Details
//                     </Link>
//                 </div>
//                 )}
//             </div>
//         </div>
//     )
// }

"use client";
import {useSearchParams, useSearchParams} from "next/navigation";
export default function Students() {
    const searchParams = useSearchParams();
    const role = searchParams.get("role");
    function addStudent(){
        alert("Student added successfully!");
    }
    function deleteStudent(){
        alert("Student deleted successfully!");
    }
    function viewStudent(){
        alert("Viewing student details!");
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">Students Management</h1>
            <p>logged in as: <b>{role}</b></p>
            <button onClick={viewStudent}>View Student</button><br></br>
            {role === "admin" && (
                <>
                    <button onClick={addStudent}>Add Student</button><br></br>
                    <button onClick={deleteStudent}>Delete Student</button>
                </>
            )}
        </div>
    )
}
