let parentDiv = document.getElementById("parent");
let buttons = ["Click me", "enter", "back", "forward"];
let splited = buttons.toString();
let cards = [];
for (let i = 1; i <= 24; i++) {
  let but = '<div class="button"><p>' + [i] + "</p></div>";
  cards = cards + but;
}
parentDiv.innerHTML = cards;
