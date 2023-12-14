console.log('# Assigning variables\n');

const age = 31;
const firstName = 'Lucas';
const lastName = 'Fernandes';
const fullName = firstName + ' ' + lastName;
let name = 'Lucas';

console.log('Given those variables:');
console.log("const age = 31;");
console.log("const firstName = 'Lucas';");
console.log("const lastName = 'Fernandes';");
console.log("const fullName = firstName + ' ' + lastName;");
console.log("let name = 'Lucas';");
console.log('-----------------------------');

console.log('\nInterpolation on JS can be done like');
console.log("console.log(name + ' ' + lastName);");

console.log('\nOr like this');
console.log("console.log(name, lastName);");

console.log('\nThe above will both return: ' + fullName);
console.log('-----------------------------');

console.log('\nWe can also interpolate variable into a string like this:');
console.log("`My name is ${fullName}`");

console.log('\nAnd we got this in return: ');
console.log(`My name is ${fullName}`);
console.log('-----------------------------');

console.log("\nUnlike the 'const' reserved word, we can declare a variable using 'let'");
console.log("Doing so we can re-assign our variable(bad practice). Like so:");

console.log("\nlet name = 'Lucas';");
console.log("name = 'Foo';");
name = 'Foo';
console.log(`The result for the 'name' variable is: ${name}`);

