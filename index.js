for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {

    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

  document.addEventListener("keydown",function(event)
  {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key){
    switch (key) {
      case "w":
          var drum1=new Audio("sounds/tom-1.mp3");
          drum1.play();
          break;
      case "a":
          var drum2=new Audio("sounds/tom-2.mp3");
          drum2.play();
          break;
      case "s":
          var drum3=new Audio("sounds/tom-3.mp3");
          drum3.play();
          break;
      case "d":
          var drum4=new Audio("sounds/tom-4.mp3");
          drum4.play();
          break;
      case "j":
          var snare=new Audio("sounds/snare.mp3");
          snare.play();
          break;
      case "k":
          var crash=new Audio("sounds/crash.mp3");
          crash.play();
          break;
      case "l":
          var kick=new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
      default:
          console.log(buttonInnerHTML);

    }
  }

  function buttonAnimation(keyPress){
      var activeButton =document.querySelector("."+ keyPress);
      activeButton.classList.add("pressed");

      setTimeout(function(){activeButton.classList.remove("pressed")},100)
  }
}
