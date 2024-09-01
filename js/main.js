let show = document.querySelector(".show");
let cover = document.querySelector(".cover");
let close = document.querySelector(".close");
let modal = document.querySelector(".modal");
show.addEventListener("click", () => {
  cover.classList.remove("fadeOut")
  cover.classList.add("fadeIn",'active')
  modal.classList.remove("slideUp");
  modal.classList.add("slidedown");
});
close.addEventListener("click",()=>{
  cover.classList.remove("fadeIn")
  cover.classList.add("fadeOut")
  modal.classList.remove("slidedown");
  modal.classList.add("slideUp");

  setTimeout(() => {
    cover.classList.remove("active")
  }, 800);
})
