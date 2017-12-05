var x : number = 0;

while (x < 10) {
  console.log(x);
  x++;
}

let players : number[] = [3, 10, 4, 5, 1];
console.log(players)

// for in iterates and simply provides the index values for whatever collection we're going in

console.log("For/In");
for (let player in players) {
  console.log(player);
}

// for of statement on the other hand actually gives us the values

console.log("For/Of");
for (let player of players) {
  console.log(player);
}

