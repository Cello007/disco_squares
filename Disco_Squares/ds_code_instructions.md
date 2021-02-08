h1
container with four buttons 
buttons have color for on state and a color for off state and black color for fail.

Winning = continuing the game
Losing = all squares go black and a low noise plays when fails

...extra stretch goal keeping score [counting an array to tally score]
current score (visual on page)
high score (visual on page)
countdown timer (visual on page)

___________________________________________________________________________


const pink (buttons)
const green (buttons)
const blue (buttons)
const yellow (buttons)

create a function that tests "light up" squares.  - lightUp - 
(have one function ligthUp as an argument to the function)

once you have lightUp, then call the function to test and make sure it works.
i.e. - lightUp(pink)

***commit work

how long should the button lightUp?
    classOn // classOn.remove

write a function to remove "on"
    lightUp and use timeOut to remove classOn

test timeOut

___________________________________________________________

****Managing time is hard part of entire code
time managment.

create a methodology controller function that keeps track of what is going on. Application states = Are we in pre game mode? Are we displaying the sequence? are we waiting for the player(input) mode? 

controller -called everytime a job gets done.  what the state is.  called FROM an event listner.  when there is a task that has been complete the controller will be called. One contoller.  



____________________________________________________________



MVC - model view controller - 

view - hmtl / css (anything the user sees and can interact with)
controller - brains of the operation.  event listeners.  application logic. 
model - data structure(s) and its creation and manipulation