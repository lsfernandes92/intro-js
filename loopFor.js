console.log("# Working with for\n");

const myDestinations = new Array("SP", "RJ", "SAL");

const readLine = require("readline");

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('The available destination are: ');

for (let i = 0; i < myDestinations.length; i++) {
  console.log(`* ${myDestinations[i]}`);
}

reader.question('\nWhich destination do you want to go? ', function (answer) {
  let destinationAvailable = false;

  for (let i = 0; i < myDestinations.length; i++) {
    if (answer == myDestinations[i]) {
      destinationAvailable = true;
      myDestinations.splice(i, 1);
    }
  }

  if (destinationAvailable) {
    console.log(`Your book to ${answer} suceed! Thank you!`);
  } else {
    console.log(`\nWe're currently not covering the destination ${answer}. Sorry :(`);
  }
  console.log(`\nThe destinations available are: ${myDestinations}`);

  reader.close();
});