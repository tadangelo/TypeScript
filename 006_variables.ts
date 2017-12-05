// variable name in camelCase : datatype = "String";
// typescript you can not change a constant value.  typescript not as flexible as ruby.
//typescript gives squiggly underline if syntax error.

// var fullName : string = "Tania D'Angelo";
// let paidAccount : boolean = true;
// const versionNumber : number = 1.3;

// fullName = "Joseph D'Angelo";
// paidAccount = false;
// versionNumber = 1.4

// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

function printName(f, l) {
  var greeting : string = "Hi there, ";

  console.log(greeting + f + " " + l);

  var greeting : string = "Hey there, ";

  console.log(greeting + f + " " + l);
}

printName("Tania", "D'Angelo");