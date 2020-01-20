///// REGULAR EXPRESSIONS - SPECIAL CHARACTERS

//// FLAGS - or - MODIFIERS
/// Regular expressions have five optional flags or modifiers. Let's discuss the two most important flags:

// g - global search, don't return after the first match
// i - case-sensitive search

// var regexGlobal = /abc/g;
// console.log(regexGlobal.test('abc abc')); //will return TRUE

// var regexInsensitive = /abc/i;
// console.log(regexInsensitive.test('Abc')); //will return TRUE because it don't matter in case insensitive search

// var regexGlobal = new RegExp('abc','g');
// console.log(regexGlobal.test('abc abc'));

// var regexInsensitive = new RegExp('abc','i');
// console.log(regexInsensitive.test('Abc'));



//// CHARACTER GROUPS:



/// Character set [xyz]

//A character set is a way to match different characters in a single position. 
//It matches any single character in the string from characters present inside the brackets.
//Note — All the special characters except for caret (^) lose their special meaning inside the character set.

// var regex = /[bt]ear/;
// console.log(regex.test('fear')); //returns true


/// Negated character set [^xyz] - It matches anything that is not enclosed in the brackets.

// var regex = /[^bt]ear/;
// console.log(regex.test('fear'));
// console.log(regex.test('bear'));
// console.log(regex.test('tear'));


/// Ranges [a-z] - Suppose we want to match all of the letters of an alphabet in a single position.

// We could write all the letters inside the brackets, but there is an easier way and that is ranges.
// For example: [a-h] will match all the letters from a to h. 
// Ranges can also be digits like [0-9] or capital letters like [A-Z].
// var regex = /[a-z]ear/;
// console.log(regex.test('fear'));
// console.log(regex.test('tear'));

//// Meta-characters

///Meta-characters are characters with a special meaning. 
///There are many meta character but I am going to cover the most important ones here.

// \d — Match any digit character ( same as [0-9] ).
// \w — Match any word character. A word character is any letter, digit, and underscore. (Same as [a-zA-Z0–9_] ) i.e alphanumeric character.
// \s — Match a whitespace character (spaces, tabs etc).
// \t — Match a tab character only.
// \b — Find a match at beginning or ending of a word. Also known as word boundary.
// . — (period) Matches any character except for newline.
// \D — Match any non digit character (same as [^0–9]).
// \W — Match any non word character (Same as [^a-zA-Z0–9_] ).
// \S — Match a non whitespace character.



///// QUANTIFIERS
//// Quantifiers are symbols that have a special meaning in a regular expression.

///( + — ) Matches the preceding expression 1 or more times.
// var regex = /\d+/;
// console.log(regex.test('8')); //true because \d = any digit

///( * ) Matches the preceding expression 0 or more times.
var regex = /go*d/;
// console.log(regex.test('gd'));
console.log(regex.test('gd'));



















