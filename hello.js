'use strict';

let message = 'Hello World';
// console.log(message);


function greet(name) {
  console.log('greet, ' + name);
}

module.exports = {
  greet: greet
};
