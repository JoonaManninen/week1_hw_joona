import "./styles.css";

const mybutton = document.getElementById("my-button");
const addButton = document.getElementById("add-data");
const textarea = document.getElementById("my-textarea");
let header1 = document.getElementById("header1");
let list = document.getElementById("my-list");

mybutton.addEventListener("click", function () {
  console.log("hello world");
  header1.innerHTML = "My notebook";
});

addButton.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.textContent = textarea.value;
  list.appendChild(listItem);
});
