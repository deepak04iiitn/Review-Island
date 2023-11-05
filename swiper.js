const infinity = document.querySelector(".infinity");
firstImg = infinity.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".swiper-image i");

let isDragStart = false, prevPageX, prevScrollLeft;



const showHideIcons = () => {
    let scrollWidth = infinity.scrollWidth - infinity.clientWidth;
    arrowIcons[0].style.display = infinity.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = infinity.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        infinity.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const dragStart = () => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = infinity.scrollLeft;
}

const dragging  = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    infinity.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    infinity.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    infinity.classList.remove("dragging");
}

infinity.addEventListener("mousedown",dragStart);
infinity.addEventListener("touchstart",dragStart);

infinity.addEventListener("mousemove",dragging);
infinity.addEventListener("touchmove",dragging);

infinity.addEventListener("mouseup",dragStop);
infinity.addEventListener("mouseleave",dragStop);
infinity.addEventListener("touchend",dragStop);