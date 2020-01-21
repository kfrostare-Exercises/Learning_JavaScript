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
// var regex = /go*d/;
// console.log(regex.test('gd'));
// console.log(regex.test('god'));
// console.log(regex.test('good'));
// console.log(regex.test('goood'));

/// ( ? ) Matches the preceding expression 0 or 1 time, that is preceding pattern is optional.
// var regex = /goo?d/;
// console.log(regex.test('god'));
// console.log(regex.test('good'));
// console.log(regex.test('goood'));

/// ( ^ ) Matches the beginning of the string, the regular expression that follows it should be at the start of the test string. 
//i.e the caret (^) matches the start of string.
// var regex = /^g/;
// console.log(regex.test('good'));
// console.log(regex.test('bad'));
// console.log(regex.test('tag'));

/// ( $ ) Matches the end of the string, that is the regular expression that precedes it should be at the end of the test string. 
//The dollar ($) sign matches the end of the string.
// var regex = /.com$/;
// console.log(regex.test('test@testmail.com'));
// console.log(regex.test('test@testmail'));

/// {N} Matches exactly N occurrences of the preceding regular expression.
// var regex = /go{2}d/;
// console.log(regex.test('good'));
// console.log(regex.test('god'));

/// {N,} Matches at least N occurrences of the preceding regular expression.
// var regex = /go{2,}d/;
// console.log(regex.test('good'));
// console.log(regex.test('goood'));
// console.log(regex.test('gooood'));

/// {N,M} Matches at least N occurrences and at most M occurrences of the preceding regular expression (where M > N).
// var regex = /go{1,2}d/;
// console.log(regex.test('god'));
// console.log(regex.test('good'));
// console.log(regex.test('goood'));

/// Alternation X|Y - Matches either X or Y. For example:
// var regex = /(green|red) apple/;
// console.log(regex.test('green apple'));
// console.log(regex.test('red apple'));
// console.log(regex.test('blue apple'));

/// Note — If you want to use any special character as a part of the expression, 
// say for example you want to match literal + or ., then you have to escape them with backslash ( \ ).
// For example:
// var regex = /a+b/;  // This won't work
// var regex = /a\+b/; // This will work
// console.log(regex.test('a+b')); // true



///// ADVANCED

//// ( x ) - Matches x and remembers the match. These are called capturing groups. 
/// This is also used to create sub expressions within a regular expression. For example :-
// var regex = /(foo)bar\1/;
// console.log(regex.test('foobarfoo')); //true
// console.log(regex.test('foobar')); //false
//\1 remembers and uses that match from first subexpression within parentheses.

//// ( ?:x ) - Matches x and does not remember the match. These are called non capturing groups. 
//Here \1 won’t work, it will match the literal \1.
// var regex = /(?:foo)bar\1/;
// console.log(regex.test('foobarfoo')); // false
// console.log(regex.test('foobar')); // false
// console.log(regex.test('foobar\1')); // true

//// ( ?=y ) - Matches x only if x is followed by y. Also called positive look ahead. 
/// For example:
// var regex = /Red(?=Apple)/;
// console.log(regex.test('RedApple')); // true
// In the above example, match will occur only if Redis followed by Apple.


