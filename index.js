var numberOfDrums = document.querySelectorAll(".drum").length;

console.log(numberOfDrums);

for (var i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        console.log("hello");
    })

};