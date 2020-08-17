var numofDrumButtons = document.querySelectorAll(".drum").length;

for(i=0 ; i < numofDrumButtons ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click" , handelClick);


function handelClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
}
document.addEventListener("keypress" , function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(key){
  switch (key) {
    case "w":
        var playSound =new Audio("sounds/tom-1.mp3");
        playSound.play();
        break;

    case "a":
        var playSound =new Audio("sounds/tom-2.mp3");
        playSound.play();
        break;


    case "s":
        var playSound =new Audio("sounds/tom-3.mp3");
        playSound.play();
        break;

    case "d":
        var playSound =new Audio("sounds/tom-4.mp3");
        playSound.play();
        break;

    case "j":
        var playSound =new Audio("sounds/snare.mp3");
        playSound.play();
        break;

    case "k":
        var playSound =new Audio("sounds/crash.mp3");
        playSound.play();
        break;

    case "l":
        var playSound =new Audio("sounds/kick-bass.mp3");
        playSound.play();
        break;

    default:
        console.log(buttonInnerHTML);

  }
}



function buttonAnimation(currentKey){
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);

}
