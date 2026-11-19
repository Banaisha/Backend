export default function StudentDetails() {
  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      age: 20,
      course: "Computer Science",
      subjects: ["Programming", "Data Structures", "Algorithms"],
    },
    {
      id: 2,
      name: "Maya Patel",
      age: 21,
      course: "Information Technology",
      subjects: ["Networking", "Web Development", "Cybersecurity"],
    },
    {
      id: 3,
      name: "Jordan Lee",
      age: 19,
      course: "Mathematics",
      subjects: ["Algebra", "Calculus", "Statistics"],
    },
  ];

  return (
    <div>
      <h1>Student Details</h1>
      <div>
        {students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
            <h3>Subjects</h3>
            <div>
              <ul>
                {student.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}