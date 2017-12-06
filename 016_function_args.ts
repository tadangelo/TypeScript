function printAddress(street: string, streetTwo?: string, city = 'Pheonix', state = 'AZ', zip?: number) {
  console.log(street);

  if (streetTwo) {
    console.log(streetTwo);
  }

  // if (city) {
  //   console.log(city);
  // }

  console.log(city);

  console.log(state);

  if (zip) {
    console.log(zip);
  }

}
printAddress('123 Any St');
printAddress('123 Any St', 'Suite 540');
printAddress('123 Any St', 'Suite 540', 'Lehi', 'UT');
printAddress('123 Any St', 'Suite 540', 'Lehi', 'UT', 77077);

function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');