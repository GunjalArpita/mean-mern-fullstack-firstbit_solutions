//***************STRING FUNCTION**************/

//1.length-returns length of the string.also counts whitespaces.
console.log('***********FUNCTION 1***********')
let message='HELLO , WORLD!';
console.log(message.length);

//2.charAt(index)-returns character at the specific index.
console.log('***********FUNCTION 2***********')
console.log(message.charAt(1));
console.log(message.charAt(8));

//3.charcodeAt-returns unicode of the character at the specified index.
console.log('***********FUNCTION 3***********')
console.log(message.charCodeAt(0));

//4.concat-combines next two or more strings and returns new string.
console.log('***********FUNCTION 4***********')
let message2='STRING CONCATINATION ';
console.log(message2.concat(message));

///5.includes-determines whether a string contain the character or specified string.
console.log('***********FUNCTION 5***********')
console.log(message.includes("WORLD!"));
console.log(message.includes("WELCOME"));

//6.indexof-returns position of the first found occurrence of a specified value in a string.
console.log('***********FUNCTION 6***********')
console.log(message.indexOf("WORLD!"));

//7.lastIndexOf-returns position of the last found occurrence of a specified value in string.
console.log('***********FUNCTION 7***********')
console.log(message.lastIndexOf("O"));

//8.slice-extractsa section of a string and returns it as a new string.
console.log('***********FUNCTION 8***********')
console.log(message.slice(0,5));

//9.substring-returns the part of the string between start and end indexes.
console.log('***********FUNCTION 9***********')
console.log(message.substring(0,13));

//10.toLowerCase-converts s string to lowercase letters .
console.log('***********FUNCTION 10***********')
console.log(message.toLocaleLowerCase());

//11.toUpperCase-converts s string to uppercase letters .
console.log('***********FUNCTION 11***********')
let str='arpita gunjal!';
console.log(str.toUpperCase());

//12.trim-removes whitespace from both ends of string.
console.log('***********FUNCTION 12***********')
let string='    Hello World!   ';
console.log(string.trim());

//13.replace-replaces first occurance value of a specified value with another value in string.
console.log('***********FUNCTION 13***********')
console.log(message.replace("WORLD!","EVERYONE!"));

//14.split-splits string into an array of substring.
console.log('***********FUNCTION 14***********')
let string1='Hello World!';
console.log(string1.split(" "));

// 15.repeat-return a string contain specified number of copies of string.
console.log('***********FUNCTION 15***********')
message.repeat(10);
console.log(message);

// 16.stratsWith-check string starts with a specified substring.
console.log('***********FUNCTION 16***********')
console.log(string1.startsWith('Hello'));
console.log(string1.startsWith("World!"));
console.log(string1.startsWith('ello',1));   //check starts with 'ello' from position 1.

// 17.endsWith-check string ends with specified substring.
console.log('***********FUNCTION 17***********')
console.log(string1.endsWith('Hello'));
console.log(string1.endsWith("World!"));
console.log(string1.endsWith('World!',12));

// 18.match-used to retrive matches when matching a string against regular expression.
console.log('***********FUNCTION 18***********')
const result=string1.match(/World!/);
console.log(result);

// 19.search-search for match between regular expression and a string.-1 if no found
console.log('***********FUNCTION 19***********')
const index=string1.search(/World/);
console.log(index);

// 20.replaceAll-replace all occurrences of substring within a string.
console.log('***********FUNCTION 20***********')
const str2='hello,world! hello,everyone';
const str3=str2.replaceAll("hello","hii");
console.log(str3);

// 21.padStart
console.log('***********FUNCTION 21***********')

// 22.padEnd
console.log('***********FUNCTION 22***********')

// 23.localeCompare
console.log('***********FUNCTION 23***********')

