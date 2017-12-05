// Boolean (true or false value)
let paidAccount : boolean = true;
let nonPaidaccount : boolean = false;

console.log(paidAccount, nonPaidaccount);

// Number (number will determine whether the value is number regardless if number or float)
let age: number = 33
var taxRate : number = 7.5;

console.log(age, taxRate);

// String
var fullName : string = "Tania D'Angelo";

console.log(fullName);

// Array
var ages : number[] = [33, 28, 11];

console.log(ages);

// Tuple
let player : [number, string, number, number];
player = [3, 'Corerra', .333, 33];

console.log(player);

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;
let possibleJob : ApprovalStatus = ApprovalStatus.Approved;
let lostJob : ApprovalStatus = ApprovalStatus.Rejected;

console.log(job, possibleJob, lostJob);

// Any
var apiData : any[] = [123, 'Jordan', false];

console.log(apiData);

// void
function printout(msg: string) : void {
  console.log(msg);
}