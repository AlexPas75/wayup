const tabs = document.getElementById("tabs"); // обращаемся к элементу с id="tabs"
// const content = document.querySelectorAll(".content"); обращаемся к элементу с class="content"

const changeClass = el => {                             
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

tabs.addEventListener("click", e => {
//   const currTab = e.target.dataset.btn;
  changeClass(e.target);
});
