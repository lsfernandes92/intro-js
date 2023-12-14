console.log('# Working with arrays\n');

const myDestinations = new Array('SP', 'RJ', 'SAL');

console.log('We can declar an array on JS like this');
console.log("\nconst myDestinations = new Array('SP', 'RJ', 'SAL')");
console.log('console.log(myDestinations)');
console.log(myDestinations);
console.log('-----------------------------');

console.log('\nWe can insert a new item in an array on JS like this');
console.log("myDestinations.push('CTB');");
console.log('console.log(myDestinations);');
myDestinations.push('CTB');
console.log(myDestinations);
console.log('-----------------------------');

console.log('\nWe can delete an item in an array on JS like this');
console.log("myDestinations.splice(0, 1);");
console.log('console.log(myDestinations);');
myDestinations.splice(0, 1);
console.log(myDestinations);