// if

var password : string = 'abcabc';

if(password == 'abcabc') {
  console.log('Yes, abcabc is the password');
}

// else

var password : string = 'abcdabc';

if(password == 'abcabc') {
  console.log('Yes, abcabc is the password');
} else {
  console.log('Sorry, permission denied');
}

// else if
var password : string = 'abcdabc';

if(password == 'abcabc') {
  console.log('Yes, abcabc is the password');
} else if(password == 'abcdabc') {
  console.log('Yes, abcdabc is the password');
} else {
  console.log('Sorry, permission denied');
}