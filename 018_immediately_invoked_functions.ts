// So immediately invoked functions are exactly how they sound, they're immediately invoked.

function fullName(first : string, last : string) {
  return first + " " + last;
  }

 console.log(fullName('Tania', 'DAngelo'))

 var names : string[] = ['Tania', 'Joseph', 'Aarik', 'Jayden', 'Emma']
 var counter : number = 0;

 (function() {
   for(let name in names) {
     counter++;
   }
 })();

 console.log(counter)