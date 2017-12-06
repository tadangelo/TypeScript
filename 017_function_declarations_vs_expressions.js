// function declaration (javascript hoisting)  it's going to be invoked and it can be invoked at any time 
function fullName(first, last) {
    return first + " " + last;
}
// function expression (better and stronger for javascript based and angular applications than declarations) this one's going to have different behavior and it has to be defined before we can call it
var otherFullname;
otherFullname = function (first, last) {
    return first + " " + last;
};
var thirdFullname = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Tania', 'DAngelo'));
console.log(otherFullname('Tania', 'DAngelo'));
console.log(thirdFullname('Tania', 'DAngelo'));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map