# _I'm Sorry Dave_

#### _Application will get an  number input from user, anything greater than 0. Between 0 and user inputed Number it will check to see if number contains certain numbers. If it does it will replace it with text. January 25th 2019._

#### By _Nate Wessels, with direction from Epicodus._

## Description

* _The Main functionality of this application is to take a set of inputs from user and return something different based of the users inputs. Some of the questions will include:
  1. Input a number that is greater than zero.
  2. What is your Name?
  3. What direction? Forward or Reverse?_
* _After each question is answered the user will be prompted to press the "Submit" Button. After Submit button is pressed a function will be called within the Javascript that will do some of the following:
  1. Create an array of numbers. And in the array it will add every number between zero and the number entered by user.
  2. It will than determine if the order should be Forward or Reverse. Forward starts with 0. And Reverse starts with number user inputted.
  3. For numbers that contain the number "1". It will replace the number with text "Beep!".
  4. For numbers that contain the number "2". It will replace the number with the text "Boop!".
  5. For numbers that contain the number "3". It will replace the number with the text "I'm sorry, Dave. I'm afraid I can't do that."
  6. For Numbers in the array of numbers the function will replace all numbers divisible by 3 with "I'm Sorry,(What name user inputted). I'm afraid I can't do that".
  7. It will prioritize certain parts of the above differently. If a number is divisible by 3 it will always say "I'm Sorry,(What name user inputted). I'm afraid I can't do that". If the number is not divisible by 3 than it moves to the next. If the number contains the number 3 it will result in "I'm sorry Dave. I'm afraid I can't do that". And than will move to numbers containing 2. And than numbers containing 1._

## Setup/Installation Requirements

* _This applicaation is stored on GitHub for each access. There are a couple things you must first do to access it.

  1. Open your terminal on your device. Make sure that it has the Git Library installed on it.
  2. Once complete type in "cd ~" to get into your home directory.
  3. Next type in "cd Desktop" to get to your desktop directory.
  4. Now we need to clone this project from the GitHub repository. To do that type in "git clone https://github.com/ngwessels/imSorryDave"
  5. Now go into the directory by typing "cd I-m-Sorry-Dave"
  6. And last step type in "git remote -v" to see what name had been given to the repository"

## Known Bugs

_There are no known bugs at this time_

## _Support and contact details_

_Please Email Nate Wessels at nwessels16@gmail.com for any questions_

## Technologies Used

_Technologies used include iMac, atom_

### License

Copyright (c) 2019 Nate Wessels, Epicodus

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
