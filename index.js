let numberOfDrums = document.querySelectorAll(".drum");

for (i = 0; i < numberOfDrums.length; i++) {
  numberOfDrums[i].addEventListener("click", function () {
    this.style.color = "green";

    let buttonInnerHtml = this.innerHTML;
    keyButton(buttonInnerHtml)
    animationButton(buttonInnerHtml)
  });
}

document.addEventListener("keypress", (e) => {
  keyButton(e.key)
  animationButton(e.key)
})

function keyButton(key) {
    switch (key) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default: console.log(key)
        
    } 
}

function animationButton(currentKey) {
  let activeKey = document.querySelector("." + currentKey)
  activeKey.classList.add("pressed")

  setTimeout(() => {
    activeKey.classList.remove("pressed")
  }, 100);
}
