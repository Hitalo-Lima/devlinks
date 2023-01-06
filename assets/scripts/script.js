const btnToggler = document.querySelector("#toggler");

btnToggler.addEventListener("click", () =>{
   document.documentElement.classList.toggle("light-mode")
})