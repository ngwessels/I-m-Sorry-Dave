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
  debugger;
  var string = number.toString();
  var newNumber = string.split("");

  var numberLength = number.toString().length;;
  var haveOne = 0;
  var haveTwo = 0;
  var haveThree = 0;

  for (var a = 0; a < numberLength; a++) {
    if (newNumber[a] == 1) {
      haveOne = 1;
    }
    if (newNumber[a] == 2) {
      haveTwo = 1;
    }
    if (newNumber[a] == 3) {
      haveThree = 1;
    }
  }
  if (haveThree == 1) {
    isThree();
  } else if (haveTwo == 1) {
    isTwo();
  }else if(haveOne == 1) {
    isOne();
  } else {
    neither(number);
  }
}









$(document).ready(function() {
  $("form#form").submit(function(event) {
    var input = parseInt($("input#inputNumber").val());
    var numberArray = [];

    for(var a = 0; a <= input; a++) {
      numberArray[a] = a;
    }
    var arrayLength = numberArray.length;
    for(var a = 0; a < arrayLength; a++) {
      var b = numberArray[a].toString();
      spliting(b);
    }
    alert(text);
    event.preventDefault(event);



  });
});
