const check = document.getElementById("changer");
  check.addEventListener('change',e => {
    e.preventDefault;
   document.body.classList.toggle("dark-theme");
  })
