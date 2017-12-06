// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Tania', 'DAngelo'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Joseph', 'DAngelo');
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map