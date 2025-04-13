// 2. Tasks array
var tasks = [];
// 3. Add a new task
function addTask(id, title, description) {
    var newTask = {
        id: id,
        title: title,
        description: description,
        status: "pending",
    };
    tasks.push(newTask);
    console.log("\u2705 Task added:", newTask);
}
// 4. Mark task as completed
function completeTask(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (task) {
        task.status = "completed";
        console.log("\uD83D\uDFE2 Task completed:", task);
    }
    else {
        console.log("\u274C Task with ID ".concat(id, " not found."));
    }
}
// 5. Delete a task
function deleteTask(id) {
    var index = tasks.findIndex(function (t) { return t.id === id; });
    if (index !== -1) {
        var removed = tasks.splice(index, 1);
        console.log("\uD83D\uDDD1\uFE0F Task deleted:", removed[0]);
    }
    else {
        console.log("\u274C Task with ID ".concat(id, " not found."));
    }
}
// 6. List all tasks
function listTasks() {
    console.log("\n📋 To-Do List:");
    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }
    tasks.forEach(function (task) {
        console.log("ID: ".concat(task.id, ", Title: ").concat(task.title, ", Status: ").concat(task.status));
    });
}
// 7. Example usage
addTask(1, "Buy groceries", "Milk, Eggs, Bread");
addTask(2, "Finish project", "Complete by tonight");
listTasks();
completeTask(1);
deleteTask(2);
listTasks();
