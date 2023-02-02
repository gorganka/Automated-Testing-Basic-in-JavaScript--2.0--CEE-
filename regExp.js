//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const str = 'ahb acb aeb aeeb adcb axeb';
const re = /a[a-z,.!@#$%^&*-_+=:'";\\/\(\)\{\}\/]b/gi;
console.log(str.match(re));

//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const strinf = '2 + 3 223 2223';
const regul = /2 \+ 3/g;
console.log(strinf.match(regul));

//Get the day, month and year of the current date and output it to the console separately

let now = new Date();
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
