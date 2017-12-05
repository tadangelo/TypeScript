// Boolean (true or false value)
var paidAccount = true;
var nonPaidaccount = false;
console.log(paidAccount, nonPaidaccount);
// Number (number will determine whether the value is number regardless if number or float)
var age = 33;
var taxRate = 7.5;
console.log(age, taxRate);
// String
var fullName = "Tania D'Angelo";
console.log(fullName);
// Array
var ages = [33, 28, 11];
console.log(ages);
// Tuple
var player;
player = [3, 'Corerra', .333, 33];
console.log(player);
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
var possibleJob = ApprovalStatus.Approved;
var lostJob = ApprovalStatus.Rejected;
console.log(job, possibleJob, lostJob);
// Any
var apiData = [123, 'Jordan', false];
console.log(apiData);
// void
function printout(msg) {
    console.log(msg);
}
//# sourceMappingURL=007_types.js.map