(() => {
    // All your code here // 1. Define the Student interface
    interface Student {
        id: number;
        name: string;
        age: number;
        course: string;
    }
    
    // 2. Initialize an array of students
    let students: Student[] = [];
    
    // 3. CREATE - Add a new student
    function addStudent(student: Student): void {
        students.push(student);
        console.log(`Student added:`, student);
    }
    
    // 4. READ - Display all students
    function displayStudents(): void {
        console.log("All Students:");
        students.forEach((student) => {
        console.log(student);
        });
    }
    
    // 5. UPDATE - Update a student's details by ID
    function updateStudent(id: number, updatedStudent: Partial<Student>): void {
        const index = students.findIndex((s) => s.id === id);
        if (index !== -1) {
        students[index] = { ...students[index], ...updatedStudent };
        console.log(`Student updated:`, students[index]);
        } else {
        console.log(`Student with ID ${id} not found.`);
        }
    }
    
    // 6. DELETE - Delete a student by ID
    function deleteStudent(id: number): void {
        const index = students.findIndex((s) => s.id === id);
        if (index !== -1) {
        const removed = students.splice(index, 1);
        console.log(`Student removed:`, removed[0]);
        } else {
        console.log(`Student with ID ${id} not found.`);
        }
    }
    
    // 7. Example Usage
    addStudent({ id: 1, name: "Alice", age: 20, course: "Math" });
    addStudent({ id: 2, name: "Bob", age: 22, course: "Physics" });
    displayStudents();
    updateStudent(2, { name: "Robert", age: 23 });
    deleteStudent(1);
    displayStudents();
    

})();
      