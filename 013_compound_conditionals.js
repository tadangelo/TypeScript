// AND &&
var email = 'test@test.com';
if (password == 'asdfasdf') {
    console.log('Password id correct');
}
else {
    console.log('Permission denied');
}
var email = 'test@test.com';
var password = 'asdfasdf';
if (password == 'asdfasdf' && email == 'test@test.com') {
    console.log('You are authorized');
}
else {
    console.log('Permission denied');
}
// OR ||
var email = 'test@test.com';
var password = 'asdfasdf';
if (password == 'asdfasdf' || password == 'zxcvzxcv') {
    console.log('You are authorized');
}
else {
    console.log('Permission denied');
}
// NOT (!(test == 'test'))
var email = 'test@test.com';
if (!(email == 'test1@test.com')) {
    console.log('You are authorized');
}
var email = 'test1@test.com';
if (!(email == 'test1@test.com')) {
    console.log('You are authorized');
}
else {
    console.log('Permission denied');
}
//# sourceMappingURL=013_compound_conditionals.js.map