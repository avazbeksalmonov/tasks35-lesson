const wrapper = document.querySelector(".wrapper");
const buttons = document.querySelectorAll("button");
const items = document.querySelectorAll(".item");

buttons.forEach((btn, btnIndex) => {
  if (btnIndex === 0) {
    btn.addEventListener("click", () => {
      items[0].remove();
    });
  } else if (btnIndex === 1) {
    btn.addEventListener("click", () => {
      items[1].remove();
    });
  } else if (btnIndex === 2) {
    btn.addEventListener("click", () => {
      items[2].remove();
    });
  }
});
