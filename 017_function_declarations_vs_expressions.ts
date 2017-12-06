// function declaration (javascript hoisting)  it's going to be invoked and it can be invoked at any time 

function fullName(first : string, last : string) : string {
  return first + " " + last;
}

// function expression (better and stronger for javascript based and angular applications than declarations) this one's going to have different behavior and it has to be defined before we can call it

var otherFullname : (first : string, last : string) => string;

otherFullname = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullname : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;  
}

console.log(fullName('Tania', 'DAngelo'));
console.log(otherFullname('Tania', 'DAngelo'));
console.log(thirdFullname('Tania', 'DAngelo'));