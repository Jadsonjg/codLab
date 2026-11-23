const inputTask = document.getElementById("input-task");
const buttonAdd = document.getElementById("button-add");
const taskList = document.getElementById("task-list");
let tasks = []

buttonAdd.addEventListener("click", function() {
    if (inputTask.value.trim() === "") {
return alert(`O campo de tarefas está vazio, preencha antes de clicar em "Adicionar"`)
    }

tasks.push(inputTask.value);
localStorage.setItem("task", JSON.stringify(tasks));
const newTask = document.createElement("li");


newTask.textContent = inputTask.value;

taskList.appendChild(newTask);

inputTask.value = ""

});