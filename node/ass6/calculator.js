function addition(a, b) {
  console.log("The sum of " + a + " & " + b + " is: " + (a + b));
}

function subtraction(a, b) {
  console.log("The subtraction of " + a + " & " + b + " is: " + (a - b));
}

function multiplication(a, b) {
  console.log("The multiplication of " + a + " & " + b + " is: " + a * b);
}

function division(a, b) {
  console.log("The division of " + a + " & " + b + " is: " + a / b);
}

module.exports.add = addition;
module.exports.sub = subtraction;
module.exports.mul = multiplication;
module.exports.div = division;
