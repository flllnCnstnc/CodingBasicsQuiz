//An event listener that will apply one event to multiple functions
['click'].forEach( evt =>
   document.getElementById("demo").addEventListener(evt, timer, start)
);

//Will start the round of questions
function start() {
  document.getElementById("demo").innerHTML = "_ Start! _";
};

// Should count down from one minute and subtract time for wrong answers
function timer() {

};

//where my array of questions will go
const questions = [

]

