
// Variable set to global scope so that any function can effect it without calling upon another function to store.
var name = "";
var text = "";
function isOne() {
  text = text + "Beep!, ";
}

function isTwo() {
  text = text + "Boop!, ";
}
function isThree() {
  text = text + "I'm sorry, " + name + ". I'm afraid I can't do that., "
}
function neither(input) {
  text = text + input + ", ";
}
function spliting(number) {
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
    name = $("#name").val();
    var direction = $("#direction").val();
    // If statement will check to see if there was a input.
    if(input) {
      if(input > 0) {
        if(name) {
          if(direction == "Smallest to Greatest") {
            var numberArray = [];
            for(var a = 0; a <= input; a++) {
              numberArray[a] = a;
            }
            var arrayLength = numberArray.length;
            for(var a = 0; a < arrayLength; a++) {
              var b = numberArray[a].toString();
              spliting(b);
            }
          } else {
            // Reversed. Will run it the opposite direction
            var numberArray = [];
            for(var a = 0; a <= input; a++) {
              numberArray[a] = a;
            }
            var arrayLength = numberArray.length - 1;
            var i = 0;
            for(var a = arrayLength; a >= i; a--) {
              var b = numberArray[a].toString();
              spliting(b);
          }
        }
          // Will return results to HTML
          $("#result").text(text);
        } else {
          $("#result").text("I'm sorry but it doesnt appear you enter your name. Please reload page and try again");
        }
      } else {
        $("#result").text("I'm sorry, but it appears you enterd a negative number. All numbers must be greater than zero. Try again!");
      }
    } else {
      // IF number was not input
      $("#result").text("Im sorry. But it doesn't appear that you entered any number. Please refresh page and enter number and than press submit!. Thankyou!");
  }
    event.preventDefault(event);

  });
});
