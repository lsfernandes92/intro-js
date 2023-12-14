console.log('# Type conversion\n');

console.log('We can join a text and a integer like so');
console.log("'ano' + 2023 = "  + 'ano' + 2023);

console.log('\nWhen two numbers are represented as string, they are joined together');
console.log("'2' + '2' = " + '2' + '2');

console.log('\nWe can explicitly instruct JS to convert something using parse, for example');
console.log("parseInt('2') + parseInt('2') = " + (parseInt('2') + parseInt('2')));

console.log('\nJS is smart enough to identify certain conversions');
console.log("'10' / '2' = " + '10' / '2');

console.log("\nWhen JS can't implicitly convert something, then we can encounter the 'NaN'(Not-a-Number) error");
console.log("'Lucas' / '2' = " + 'Lucas' / '2');

console.log("\nFloat number are represented with the '.'");
console.log('This is a float number = ' + 6.5);