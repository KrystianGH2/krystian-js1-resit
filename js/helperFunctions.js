export { menuButton, menu, menuItem, item1, item2, item3 };

const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menuItem");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const navigation = document.querySelector("#navigation");

const menuButton = () => {
  menu.addEventListener("click", () => {
    item1.classList.toggle("active");
    item2.classList.toggle("active");
    item3.classList.toggle("active");
    navigation.classList.toggle("active");
  });
};
menuButton();
