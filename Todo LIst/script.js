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
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    title: "In progress",
    count: 1,
    color: "yellow",
    id: "in-progress",
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    title: "Done",
    count: 1,
    color: "green",
    id: "done",
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    title: "Blocked",
    count: 1,
    color: "red",
    id: "blocked",
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
];

const listItems = [
  {
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
  {
    paragraph: "[loan-managament] - Add card component",
    option1: "In Progress",
    option2: "Done",
  },
];
// listItems.filter((item) => {
//   addTaskList.listItem(item.paragraph, item.option1, item.option2);
// });

function addTaskList(title, color, count, paragraph, option1, option2) {
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
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(count1);
  listItems.map((item) => {
    const lists = document.createElement("div");
    taskContainer2.appendChild(todoList);
    todoList.appendChild(lists);
    lists.setAttribute("class", "list");
    const listItem = document.createElement("div");
    lists.appendChild(listItem);
    listItem.setAttribute("class", "listItem");
    const item1 = document.createElement("p");
    listItem.appendChild(item1);
    item1.innerText = paragraph;
    const item2 = document.createElement("select");
    item2.setAttribute("class", "select");
    listItem.appendChild(item2);
    item2.innerText = "option";
    const choice1 = document.createElement("option");
    item2.appendChild(choice1);
    choice1.innerText = option1;
    const choice2 = document.createElement("option");
    item2.appendChild(choice2);
    choice2.innerText = option2;
  });
}
containerItems.map((item) => {
  addTaskList(
    item.title,
    item.color,
    item.count,
    item.paragraph,
    item.option1,
    item.option2
  );
});
// addTaskList(
//   containerItems[0].title,
//   containerItems[0].color,
//   containerItems[0].count
// );
