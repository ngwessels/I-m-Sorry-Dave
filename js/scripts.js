
function isOne(text) {
  text = text + "Beep!, ";
  return text;
}
function isTwo(text) {
  text = text + "Boop!, ";
  return text;
}
function isThree(text) {
  text = text + "I'm sorry, Dave. I'm afraid I can't do that., ";
  return text;
}
function neither(input, text) {
  text = text + input + ", ";
  return text;
}
// For numbers divisible by 3
function divi3(input, text, name) {
  text = text + "I'm sorry, " + name + ". I'm afraid I can't do that., ";
  return text;
}
function spliting(number, text, name) {
  // For numbers divisible by 3
  var isDivi = 0;
  if ((number % 3) == 0 && number != 0) {
    isDivi = 1;
  }
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
  if (isDivi == 1) {
    text = divi3(number, text, name);
  }else if (haveThree == 1) {
    text = isThree(text);
  } else if (haveTwo == 1) {
    text = isTwo(text);
  }else if(haveOne == 1) {
    text = isOne(text);
  } else if(isDivi != 1){
    text = neither(number, text);
  }
  return text;

}





$(document).ready(function() {
  $("form#form").submit(function(event) {
    var name = "";
    var text = "";
    var input = parseInt($("input#inputNumber").val());
    name = $("#name").val();
    var direction = $("#direction").val();
    // If statements will check to see if there was a input.
    if(input) {
      if(input >= 0) {
        if(name) {
          if(direction == "Forward") {
            var numberArray = [];
            for(var a = 0; a <= input; a++) {
              numberArray[a] = a;
            }
            var arrayLength = numberArray.length;
            for(var a = 0; a < arrayLength; a++) {
              var b = numberArray[a].toString();
              text = spliting(b, text, name);
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
              text = spliting(b, text, name);
          }
        }
          // Will return results to HTML
          $("#result").text(text);
        } else {
          // If Name was not input
          $("#result").text("I'm sorry but it doesnt appear you enter your name. Please reload page and try again");
        }
      } else {
        // If Negative Number or 0 was input
        $("#result").text("I'm sorry, but it appears you enterd a negative number or ZERO. All numbers must be greater than zero. Try again!");
      }
    } else {
      // IF number was not input
      $("#result").text("Im sorry. But it doesn't appear that you entered any number. Please refresh page and enter number and than press submit!. Thankyou!");
  }
    event.preventDefault(event);

  });
});
