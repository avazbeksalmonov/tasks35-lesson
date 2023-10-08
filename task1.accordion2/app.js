const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let btn = item.querySelector("i");
    btn.addEventListener("click", () => {
        let text = item.querySelector(".text");
        item.classList.toggle("open");
        if (item.classList.contains("open")) {
            item.querySelector("i").textContent = "Yopish";
        } else {
            item.querySelector("i").textContent = "Yopish";
        }
        removeOpen(index);
    });
});

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open");
            item2.querySelector("i").textContent = "Ochish";
        }
    });
}