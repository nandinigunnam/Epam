var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 2. Initialize an array of students
var students = [];
// 3. CREATE - Add a new student
function addStudent(student) {
    students.push(student);
    console.log("Student added:", student);
}
// 4. READ - Display all students
function displayStudents() {
    console.log("All Students:");
    students.forEach(function (student) {
        console.log(student);
    });
}
// 5. UPDATE - Update a student's details by ID
function updateStudent(id, updatedStudent) {
    var index = students.findIndex(function (s) { return s.id === id; });
    if (index !== -1) {
        students[index] = __assign(__assign({}, students[index]), updatedStudent);
        console.log("Student updated:", students[index]);
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
    }
}
// 6. DELETE - Delete a student by ID
function deleteStudent(id) {
    var index = students.findIndex(function (s) { return s.id === id; });
    if (index !== -1) {
        var removed = students.splice(index, 1);
        console.log("Student removed:", removed[0]);
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
    }
}
// 7. Example Usage
addStudent({ id: 1, name: "Alice", age: 20, course: "Math" });
addStudent({ id: 2, name: "Bob", age: 22, course: "Physics" });
displayStudents();
updateStudent(2, { name: "Robert", age: 23 });
deleteStudent(1);
displayStudents();
