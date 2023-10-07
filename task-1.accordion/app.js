const btnIcon = document.querySelector("i");
const content = document.querySelector(".content");
const wrapper = document.querySelector(".wrapper");

btnIcon.addEventListener("click", () => {
  content.classList.toggle("hidden");
  wrapper.classList.toggle("wrapper-height");

  if (content.classList.contains("hidden")) {
    btnIcon.classList.replace("fa-right-long", "fa-down-long");
  } else {
    btnIcon.classList.replace("fa-down-long", "fa-right-long");
  }
});
