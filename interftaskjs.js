async function loadTasks() {
  const res = await fetch("tasks.json");
  const tasks = await res.json();

  const container = document.getElementById("tasks-window");
  container.innerHTML = "";

  tasks.forEach(t => {
    const item = document.createElement("div");
    item.textContent = (t.done ? "✔️ " : "⏳ ") + t.title;
    container.appendChild(item);
  });
}
