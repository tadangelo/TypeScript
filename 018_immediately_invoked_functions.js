// So immediately invoked functions are exactly how they sound, they're immediately invoked.
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName('Tania', 'DAngelo'));
var names = ['Tania', 'Joseph', 'Aarik', 'Jayden', 'Emma'];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
//# sourceMappingURL=018_immediately_invoked_functions.js.map