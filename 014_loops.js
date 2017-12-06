var x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
var players = [3, 10, 4, 5, 1];
console.log(players);
// for in iterates and simply provides the index values for whatever collection we're going in
console.log("For/In:");
for (var player in players) {
    console.log(player);
}
// for of statement on the other hand actually gives us the values
console.log("For/Of:");
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player);
}
//# sourceMappingURL=014_loops.js.map