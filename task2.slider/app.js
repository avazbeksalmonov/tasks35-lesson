const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll("img");

let index = 0;

function changeImgae() {
  if (index > img.length - 3) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 3;
  }
  imgs.style.transform = `translateX(${-index * 325}px)`;
}
nextBtn.addEventListener("click", () => {
  index++;

  changeImgae();
  console.log(index);
});
prevBtn.addEventListener("click", () => {
  index--;

  changeImgae();
});
