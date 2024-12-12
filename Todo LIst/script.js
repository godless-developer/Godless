{
  /* <div class="todoList">
          <div class="title">
            <div class="circle"></div>
            <h2>To do</h2>
            <p class="count">5</p>
          </div>
          <div class="list">
            <div class="listItem"
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
            <div class="listItem">
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
          </div>
        </div> */
}

const containerItems = [
  {
    title: "To do",
    count: 1,
    color: "white",
    id: "todo",
  },
  {
    title: "In progress",
    count: 1,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 1,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 1,
    color: "red",
    id: "blocked",
  },
];
let listItem = [
  // {
  //   paragraph: "mashin hudaldaj awah",
  //   option1: "In Progress",
  //   option2: "Done",
  //   state: "todo",
  // },
  // {
  //   paragraph: "bond awah",
  //   option1: "In Progress",
  //   option2: "Done",
  //   state: "todo",
  // },
  // {
  //   paragraph: "dubai ywah",
  //   option1: "In Progress",
  //   option2: "Done",
  //   state: "todo",
  // },
  // {
  //   paragraph: "content hiih",
  //   option1: "In Progress",
  //   option2: "Done",
  //   state: "blocked",
  // },
  // {
  //   paragraph: "code bicih",
  //   option1: "In Progress",
  //   option2: "Done",
  //   state: "blocked",
  // },
  // {
  //   paragraph: "vape soroh",
  //   option1: "In Progress",
  //   option2: "Done",
  //   state: "done",
  // },
];

// listItems.filter((item) => {
//   addTaskList.listItem(item.paragraph, item.option1, item.option2);
// });

const clearContainers = () => {
  const container = document.getElementsByClassName("listItems");
  container[0].innerHTML = null;
  container[1].innerHTML = null;
  container[2].innerHTML = null;
  container[3].innerHTML = null;
};

function addTaskList(title, color, count, id) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const count1 = document.createElement("p");
  count1.setAttribute("class", "count");
  count1.innerText = count;
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  const listItems = document.createElement("div");
  listItems.setAttribute("class", "listItems");
  listItems.setAttribute("id", id);
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(count1);
  taskContainer2.appendChild(todoList);
  todoList.appendChild(listItems);
}
const deleteTodo = (index) => {
  listItem.splice(index, 1);
  clearContainers();
  listItem.map((item, index) => {
    addTodosList(item.paragraph, item.state, index);
  });
};
function addTodosList(paragraph, state, index) {
  const listItems = document.getElementById(state);
  const listItem = document.createElement("div");
  listItem.setAttribute("class", "listItem");
  listItems.appendChild(listItem);
  const p = document.createElement("p");
  listItem.appendChild(p);
  p.innerText = paragraph;
  p.setAttribute("class", "paragraph");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.setAttribute("id", index);
  deleteButton.addEventListener("click", () => {
    deleteTodo(index);
  });
  listItem.appendChild(deleteButton);
}

containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id);
});
listItem.map((set, index) => {
  addTodosList(set.paragraph, set.state, index);
});
const addTask = () => {
  if (input.value) {
    listItem.push({
      paragraph: input.value,
      state: "blocked",
    });
    input.value = null;
    clearContainers();
    listItem.map((item, index) => {
      addTodosList(item.paragraph, item.state, index);
    });
  }
};

const input = document.getElementById("input");
const addButton = document.getElementById("button");
addButton.addEventListener("click", addTask);

// addTaskList(
//   containerItems[0].title,
//   containerItems[0].color,
//   containerItems[0].count
// );
// const item2 = document.createElement("select");
// item2.setAttribute("class", "select");
// listItem.appendChild(item2);
// item2.innerText = "option";
// const choice1 = document.createElement("option");
// item2.appendChild(choice1);
// choice1.innerText = option1;
// const choice2 = document.createElement("option");
// item2.appendChild(choice2);
// choice2.innerText = option2;
