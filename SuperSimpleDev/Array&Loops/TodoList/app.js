// const todoList = [];

// const todoP2 = [];

// function addTodop2() {
//   const inputP2 = document.querySelector(".js-name-input");

//   var name2 = inputP2.value;
//   todoP2.push(name2);
//   document.querySelector(".show-here").innerHTML = `${todoP2}`;
// }

const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

renderToDoList();

function renderToDoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `<div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderToDoList();">Delete</button>`; //generating the html
    todoListHtml += html;
  }

  console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-due-date-input ");

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  console.log(todoList);

  inputElement.value = ""; // to make the input section clear again

  renderToDoList();
}
