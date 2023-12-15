console.log("# Working with while\n");

const myDestinations = new Array("SP", "RJ", "SAL");

const readLine = require("readline");

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('The available destination are: ');

let i = 0;
while (i < myDestinations.length) {
  console.log(`* ${myDestinations[i]}`);
  i++;
}

reader.question('\nWhich destination do you want to go? ', function (answer) {
  let iterator = 0;
  let destinationAvailable = false;

  while (iterator < myDestinations.length) {
    if (answer == myDestinations[iterator]) {
      destinationAvailable = true;
      break;
    }
    iterator++;
  }

  if (destinationAvailable) {
    console.log(`Your book to ${answer} suceed! Thank you!`);
    myDestinations.splice(iterator, 1);
  } else {
    console.log(`\nWe're currently not covering the destination ${answer}. Sorry :(`);
  }
  console.log(`\nThe destinations available are: ${myDestinations}`);

  reader.close();
});