var a = Number(prompt('Enter "a" greater than 0'));
var b = Number(prompt('Enter "b" greater than 0'));
var c = Number(prompt('Enter "c" greater than 0'));


function quadratic(a, b, c) {
  var result;
  var d = Math.pow(b, 2) - (4*a*c); // b2 — 4ac

  
  if (d > 0) {
    var result1 = (-b + Math.sqrt(d)) / (2*a);
    var result2 = (-b - Math.sqrt(d)) / (2*a);
    result = result1 + ' and ' + result2;
  }
  
  else if (d === 0) {
    result = -b / (2*a);
  }
  
  else if (d < 0) {
    result = 'The equation has no real roots!';
  }

  return result;
}


var calcQuadratic = quadratic(a, b, c);


var message = '<p>The result is: <strong>' + calcQuadratic + ' </strong></p>';
document.write(message);