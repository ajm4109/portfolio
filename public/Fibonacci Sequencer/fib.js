function FibonacciSequencer(n) {

  n = document.getElementById('userInput').value;

  var sequence = [0, 1];
  if (n == 0) {
    sequence.pop(0,1);
  } else if (n == 1) {
    sequence.pop(1);
  } else if (n == 1){
    sequence;
  } else {
    for (var i = 2; i < n; i++) {
      sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
    }
  }
  var fibSeq = sequence.join(', ');
  document.getElementsByClassName('answerText')[0].innerHTML=fibSeq;
}



function FibonacciNumber(n) {

  n = document.getElementById('userInput').value;

  var sequence = [0, 1];
  if (n == 0) {
    sequence.pop(0,1);
  } else if (n == 1) {
    sequence.pop(1);
  } else if (n == 1){
    sequence;
  } else {
    for (var i = 2; i < n; i++) {
      sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1])
      ;
    }
  }
  var fibNum = sequence[sequence.length - 1];
  document.getElementsByClassName('answerText')[0].innerHTML = fibNum;
}

var subbtn = document.getElementsByClassName('tron')[0];
subbtn.addEventListener('click',FibonacciSequencer);

var userInputArea = document.getElementById('userInput')
userInputArea.addEventListener('keyup',function(event){
  if(event.keycode == 13){subbtn.click()}
});

// function HideAnswer(){
//   var answerBG = document.
// }
