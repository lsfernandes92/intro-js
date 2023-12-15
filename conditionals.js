console.log("# Working with conditionals\n");

const myDestinations = new Array("SP", "RJ", "SAL");

const readLine = require("readline");

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("How old are you? ", function (ageAnswer) {
  if (ageAnswer >= 18) {
    console.log("Ok, you are able to buy your destination ticket!");

    reader.question(
      "\nPlease choose one of the following: 1 - SP, 2 - RJ or 3 - SAL: ",
      function (destinationAnswer) {
        console.log(`\nAight! You choose: ${destinationAnswer}.`);
        console.log(
          `The destination will be: ${myDestinations[destinationAnswer - 1]}.`
        );
        console.log("Thanks for buying with us!");

        myDestinations.splice(destinationAnswer - 1, 1);

        console.log(`\nAvailable destinations: ${myDestinations}.`);
        reader.close();
      }
    );
  } else {
    console.log("Sorry, only people above 18 years old can buy tickets :(");
    reader.close();
  }
});
