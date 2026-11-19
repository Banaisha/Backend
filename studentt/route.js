// let  students = [
//     {
//         id:1,
//         name: "John Doe",
//         age: 20
//     },
//     {
//         id:2,
//         name: "Jane Smith",
//         age: 22
//     }
// ];
// export function GET() {
//     return Response.json(students);
// }
// export async function POST(request) {
//     const data = await request.json();
//     const newStudent = {
//         id: students.length + 1,
//         name: data.name,
//         age: data.age
//     };
//     students.push(newStudent);
//     return Response.json(newStudent);
// }
// export async function PUT(request) {
//     const data = await request.json();
//     const student = students.find(
//         student => student.id == data.id 
//     );
//     if (!student) {
//         return Response.json({ error: "Student not found" }, { status: 404 });
//     }

//     student.name = data.name;
//     student.age = data.age;

//     return Response.json(student);
// }
// export async function DELETE(request) {
//     const data = await request.json();
//     const studentExists = students.some(
//         student => student.id == data.id
//     );
//     if (!studentExists) {
//         return Response.json({ error: "Student not found" }, { status: 404 });
//     }
//     students = students.filter(student => student.id != data.id);
//     return Response.json({ message: "Student deleted successfully" });
// }


// let students = {
//     1: "John Doe",
//     2: "Jane Smith"
// };
// export async function POST(request, { params }) {
//     const {id} = await params;
//     const data = await request.json();
//     students[id] = data.name;
//     return Response.json({ message: "Student updated successfully", id: id, name: data.name });
// }