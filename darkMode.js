// const check = document.getElementById("changer");
//   check.addEventListener('change',e => {
//     e.preventDefault;
//    document.body.classList.toggle("dark-theme");
//   })

const toggleClick = document.querySelector(".toggler");
slider = document.querySelector(".slider");

function darkMode() {
  toggleClick.classList.toggle("dark-theme");
  slider.classList.toggle("dark-theme");
  document.body.classList.toggle("dark-theme");
}
