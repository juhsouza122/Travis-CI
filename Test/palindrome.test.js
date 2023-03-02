const isPalindrome = require('../palindrome');

test('racecar is a polindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('hello is not a polindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
});