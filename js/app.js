let btn = document.querySelector("#bars");
let nav_items = document.querySelector(".nav-items");
btn.addEventListener("click", function () {
  //   alert("hi");
  nav_items.classList.toggle("show");
  btn.classList.toggle("fa-times");
});
