$(() => {

const pink = $("#pink");
const green = $("#green");
const blue = $("#blue");
const yellow = $("#yellow");

//settings

const lightOnDuration = 1000; //1000ms = 1s
const lightOffDuration = 500;


//application variables
const sequence = [pink, yellow, pink, green, blue];
var sequenceIndex = 0;
var appState = "sequence";

// Logic / Controller
function controller(){
	if (appState === "sequence") showSequence();
  	//else if (appState === "playerTurn") {}
}

function showSequence(){
    if (sequenceIndex >= sequence.length) {
      sequenceIndex = 0;
        appState = "playerTurn";
        controller();
  }
    else {
      lightOn(sequence[sequenceIndex]);
        sequenceIndex++;
  }
}

//ACTIONS
function lightOn(button){
	button.addClass("on");
  	setTimeout(lightOff, lightOnDuration); //wait 1 second then call the lightOff function
}
      
function lightOff(){
	$("main button.on").removeClass("on");
  	setTimeout(controller, lightOffDuration);
}

//TESTING
//lightOn(green);
controller();

}); //end of jQuery ready() wrapper