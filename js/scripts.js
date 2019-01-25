var text = "";



function isOne() {

  text = text + "Beep!, ";
}

function isTwo() {
  text = text + "Boop!, ";
}
function isThree() {
  text = text + "I'm sorry, Dave. I'm agraid I can't do that., "
}
function neither(input) {
  text = text + input + ", ";
}

function spliting(number) {
  alert(number);
  debugger;
  newNumber = number.split(" ");
  var numberLength = newNumber.length;
  var haveOne = 0;
  var haveTwo = 0;
  var haveThree = 0;
  for (var a = 0; a < numberLength; a++) {
    if (newNumber == 1) {
      haveOne = 1;
      haveTwo = 0;
      haveThree = 0;
    }
    if (newNumber == 2) {
      haveOne = 0;
      haveTwo = 1;
      haveThree = 0;
    }
    if (newNumber == 3) {
      haveOne = 0;
      haveTwo = 0;
      haveThree = 1;
    }
  }
  if (haveOne == 1) {
    isOne();
  }
  if (haveTwo == 2) {
    isTwo();
  }
  if(haveThree == 2) {
    isThree();
  }
  if(haveOne != 1 || haveTwo != 1 || haveThree != 1) {
    neither()
  }


}









$(document).ready(function() {
  $("form#form").submit(function(event) {
    debugger;
    var input = parseInt($("input#inputNumber").val());
    var numberArray = [];

    for(var a = 0; a <= input; a++) {
      numberArray[a] = a;
    }
    var arrayLength = numberArray.length;
    for(var a = 0; a <= arrayLength; a++) {
      var b = numberArray[a];
      alert(numberArray);
      spliting(b);
    }
    alert(text);
    event.preventDefault(event);



  });
});
