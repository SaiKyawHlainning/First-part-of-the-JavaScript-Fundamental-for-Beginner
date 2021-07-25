// Comments
// One line Comment

// Multi-Line Comments

/* var firstName = 'Steven';
var lastName = 'Smith';
var age = 22; */

// var firstName = 'Steven';
// var lastName = 'Smith';
// var age = 22;

/* Variables */
// var a = 10;
// var b = 2;
// var c = a + b;
// console.log(c);

// var firstName = 'Steven';
// var lastName = 'Smith';
// var age = 22;

// var firstName = 'Jhon';

// var text = firstName + ' ' + lastName + ' ' + 'is' + ' ' + age;

// console.log(text);

/* Let */
// let firstName;
// firstName = 'Steven';
// let lastName = 'Smith';
// let age = 22;

// firstName = 'Jhon';

// let text = firstName + ' ' + lastName + ' ' + 'is' + ' ' + age;

// console.log(text);

/* Const */
// const firstName = 'Steven';
// const lastName = 'Smith';
// const age = 22;

// const firstName = 'Sara';

// const text = firstName + ' ' + lastName + ' ' + 'is' + ' ' + age;

// console.log(text);

/* Operator */
// =	  x = y	    x = y
// +=	  x += y	  x = x + y
// -=	  x -= y	  x = x - y
// *=	  x *= y	  x = x * y
// /=	  x /= y	  x = x / y
// %=	  x %= y	  x = x % y
// **=	x **= y	  x = x * y

// let x = 7;
// // let y = x;
// let y = 5;

// // x += y; // x = x + y
// // x -= y;

// console.log(x);

// let text = 'Hello ';
// text += 'Steven Smith';

// console.log(text);

// ==	  equal to
// ===	  equal value and equal type
// !=	  not equal
// !==	  not equal value or not equal type
// >	    greater than
// <	    less than
// >=	  greater than or equal to
// <=	  less than or equal to
// ?	    ternary operator
// &&	  logical and
// ||	  logical or
// !	  logical not

/* Arithmetic */
// +	  Addition
// -	  Subtraction
// *	  Multiplication
// **	  Exponentiation (ES2016)
// /	  Division
// %	  Modulus (Remainder)
// ++	  Increment
// --	  Decrement

// let x = 3;
// // x++;
// x--;
// x--;
// x--;

// console.log(x);

/* Data Types */
// let x;
// // x = 3;
// // x = 'Steven';
// // x = true;
// // x = null;
// // x = { firstName: 'Steven', lastName: 'Smith' };
// x = ['Mango', 'Apple', 'Banana'];

// console.log(typeof x);

/*************************************************************/

/* Strings */
// const text = `I don't hate you but "it didn't mean I love you!"`;

// console.log(text);

// const x = (3).toString();

// console.log(typeof x);

/* String Methods */

// const text = 'Seven Smith is 22';

// Length (length start count from 1)
// console.log(text.length);

//  Slice
// console.log(text.slice(6));
// console.log(text.slice(6, 11));
// console.log(text.slice(-11));
// console.log(text.slice(-11, -3));

// Substring
// console.log(text.substr(6, 5)); // starting point and continue numbers (start zero)
// console.log(text.substr(6));
// console.log(text.substr(-11));

// Replace
// const stringText = 'Steven Smith is 22. Steven live in Thailand.';

// console.log(stringText.replace('Steven', 'John'));
// console.log(stringText.replace('STEVEN', 'John'));
// console.log(stringText.replace(/STEVEN/gi, 'jOJn'));

// To Upper Case
// console.log(stringText.toUpperCase());

// To Lower Case
// console.log(stringText.toLowerCase());

// Concat
// const fullName = 'Steven Smith';
// const text = 'Are you ok?';

// console.log(fullName.concat(', ', text));

// // Trim
// const text = '        Hey! Steven Smith Oh!          ';

// console.log(text.trim());

// Pad star and Pad end
// const text = '3';

// console.log(text.padStart(7, 5));
// console.log(text.padEnd(5, 2));

/* Searching String */
// const text = 'Steven Smith is 22. Steven Smith live in VEE Thailand.';

// console.log(text.indexOf('Steven'));
// console.log(text.lastIndexOf('Steven'));
// console.log(text.charAt('3'));
// console.log(text.match(/ve/g));
// console.log(text.match(/VE/gi));
// console.log(text.includes('ev'));
// console.log(text.includes('g'));

/* String Templates */
// const text = `
// I don't hate you
// but
// "it didn't mean I love you!"
// `;

// console.log(text);

// const firstName = 'Steven';
// const lastName = 'Smith';
// // const text = 'My full name is ' + firstName + ' ' + lastName;
// const text = `My full name is ${firstName} ${lastName}`;

// console.log(text);

// const pen = 3;
// const price = 10;

// // const totalPrice = 'Total price: ' + pen * price;
// // const totalPrice = `Total price: ${pen * price}`;

// console.log(totalPrice);

/********************************************************************/

/* Number Methods */

// toString
// const a = 7;
// console.log(a.toString());
// console.log((7).toString());
// console.log((7 + 3).toString());

// To Fixed
// const b = 19.8744;
// console.log(b);
// console.log(b.toFixed(0)); // can rounded
// console.log(b.toFixed(1));
// console.log(b.toFixed(3));
// console.log(b.toFixed(10));

// To Precision
// const c = 19.8744;
// console.log(c.toPrecision());
// console.log(c.toPrecision(3));
// console.log(c.toPrecision(5));
// console.log(c.toPrecision(10));

// Value of
// const d = 19.8744;
// console.log(d.valueOf());
// console.log((100).valueOf());
// console.log((1 + 23).valueOf());

// console.log(Number(true)); // returns 1
// console.log(Number(false)); // returns 0
// console.log(Number('10')); // returns 10
// console.log(Number('  10')); // returns 10
// console.log(Number('10  ')); // returns 10
// console.log(Number(' 10  ')); // returns 10
// console.log(Number('10.33')); // returns 10.33
// console.log(Number('10,33')); // returns NaN
// console.log(Number('10 33')); // returns NaN
// console.log(Number('John')); // returns NaN

// console.log(parseInt('-10')); // returns -10
// console.log(parseInt('-10.33')); // returns -10
// console.log(parseInt('10')); // returns 10
// console.log(parseInt('10.33')); // returns 10
// console.log(parseInt('10 20 30')); // returns 10
// console.log(parseInt('30 10 20 ')); // returns 30
// console.log(parseInt('10 years')); // returns 10
// console.log(parseInt('years 10')); // returns NaN

// console.log(parseFloat('10')); // returns 10
// console.log(parseFloat('10.33')); // returns 10.33
// console.log(parseFloat('30 10 20 ')); // returns 10
// console.log(parseFloat('10 years')); // returns 10
// console.log(parseFloat('years 10')); // returns NaN

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.NaN);

// const x = 3 / 'Steven';
// console.log(x);
// console.log(3 / 'Steven');

/*************************************************************************/

