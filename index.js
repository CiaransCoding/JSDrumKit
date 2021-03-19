var elementList = document.querySelectorAll(".drum");

elementList.forEach(element => {
    element.addEventListener("click", () => {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    })
});