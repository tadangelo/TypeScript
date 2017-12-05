// a function is a programming mechanism that allows you to encapsulate data behavior things like that and then call it any time and have the function run whatever processes are inside of it


function fullName(first, last) {
  return first + " " + last;
}

console.log(fullName('Tania', 'DAngelo'));

function gradeGenerator(grade: number) : string {
  if (grade < 60) {
    return 'F';
  } else if (grade >= 60 && grade < 70) {
    return 'D';
  } else if (grade >= 70 && grade < 80) {
    return 'C';
  } else if (grade >= 80 && grade < 90) {
    return 'B';
  } else {
    return 'A';
  }
} 

console.log(gradeGenerator(45));
console.log(gradeGenerator(100));
console.log(gradeGenerator(80));