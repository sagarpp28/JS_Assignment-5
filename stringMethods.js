// concat
let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2));

//endswith
let str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));

//includes
let str= "Hello world"
let s= str.includes('world')
console.log(s);

//indexOf
let str='Hai hellow'
let s= str.indexOf('e')
console.log(s);

////lastindexOf
let str='Hai hellow'
let s= str.lastIndexOf('e')
console.log(s);

//match
let str='helloo'
let s= str.match('loo')
console.log(s);

//matchall
let str= "Hello , Hello welcome";
let s= str.matchAll("Hello");
console.log(Array.from(s));

//padend
let s = "5";
s = s.padEnd(4,"0");
console.log(s);

//padstart
let s = "5";
s = s.padStart(4,"0");
console.log(s);

//repeat
let str= "Hoe are you, ";
let s= str.repeat(2)
console.log(s);

//replace
let str= "Hello, how was your day";
let s= str.replace("Hello","Haiiii");
console.log(s);

//search
let str= "Hello, how was your day";
let s= str.search("your");
console.log(s);

//slice
let str= "Hello, how was your day";
console.log(str.slice(0,5));

//split
let str = 'Hai how are you';
let s= str.split(' ');
console.log(s[3]);

//startwith
let str = 'Hai how are you';
let s= str.startsWith("Hai");
console.log(s);

//substr
let str = 'Hai how are you';
let s= str.substr(0,3);
console.log(s);
let s2= str.substr(4);
console.log(s2);

//substring
let str = 'Hai how are you';
let s= str.substring(4,13);
console.log(s)

//tolowercase
let str = 'Hai hoW aRe yoU';
let s= str.toLowerCase();
console.log(s);

//touppercase
let str = 'Hai hoW aRe yoU';
let s= str.toUpperCase();
console.log(s);

//trim
let s = '   Hello world!   ';
console.log(s.trim())

//trimend
let s = '   Hello world!   ';
console.log(s.trimEnd())

//trimstart
let s = '   Hello world!   ';
console.log(s.trimStart())

//charAt
let str = 'Hai how are you';
let s= str.charAt(4);
console.log(s);

//CharCodeAt
let str = 'Hai how are you';
let s= str.charCodeAt(4);
console.log(s);