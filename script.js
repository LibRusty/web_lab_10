document.querySelector(".stage").addEventListener("click", (event) => {
    event.preventDefault();

    const targetElement = event.target;
    targetElement.classList.remove("not-interacted");
    targetElement.classList.add("shifted");

    document.querySelector(".illumination").classList.remove("inactive");
});

let toggleState = false;

document.querySelector(".illumination").addEventListener("click", (event) => {
    event.preventDefault();
    const spotlight = document.querySelector(".beam");

    if (toggleState) {
        spotlight.classList.remove("visible-beam");
        spotlight.classList.add("hidden");
        document.querySelector(".center-frame").style.display = "none";
    } else {
        spotlight.classList.remove("hidden");
        spotlight.classList.add("visible-beam");
        document.querySelector(".center-frame").style.display = "grid";
    }
    toggleState = !toggleState;
});

let imageIndex = 0;
const animalImages = ["Bird.png", "Rabbit.png"];
document.querySelector(".primary-animal").addEventListener("click", (event) => {
    event.preventDefault();

    const currentElement = event.target;
    currentElement.classList.add("moving-image");

    setTimeout(() => {
        currentElement.src = animalImages[imageIndex % 2];
        currentElement.classList.remove("moving-image");
        imageIndex++;
    }, 2000);
});
