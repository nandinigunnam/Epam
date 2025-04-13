// 1. Define Task interface
interface Task {
    id: number;
    title: string;
    description: string;
    status: "pending" | "completed";
  }
  
  // 2. Tasks array
  let tasks: Task[] = [];
  
  // 3. Add a new task
  function addTask(id: number, title: string, description: string): void {
    const newTask: Task = {
      id,
      title,
      description,
      status: "pending",
    };
    tasks.push(newTask);
    console.log(`Task added:`, newTask);
  }
  
  // 4. Mark task as completed
  function completeTask(id: number): void {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.status = "completed";
      console.log(`Task completed:`, task);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // 5. Delete a task
  function deleteTask(id: number): void {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      const removed = tasks.splice(index, 1);
      console.log(`Task deleted:`, removed[0]);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // 6. List all tasks
  function listTasks(): void {
    console.log("\nTo-Do List:");
    if (tasks.length === 0) {
      console.log("No tasks found.");
      return;
    }
    tasks.forEach((task) => {
      console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
    });
  }
  
  // 7. Example usage
  addTask(1, "Buy groceries", "Milk, Eggs, Bread");
  addTask(2, "Finish project", "Complete by tonight");
  listTasks();
  completeTask(1);
  deleteTask(2);
  listTasks();
  