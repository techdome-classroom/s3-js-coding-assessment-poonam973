/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Dictionary to store the matching pairs of parentheses
    const matchingBrackets = {
        ')': '(', 
        '}': '{', 
        ']': '['
    };

    // Stack to store the opening brackets
    const stack = [];

    // Loop through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (matchingBrackets[char]) {
            // Pop the top of the stack if it's not empty, otherwise assign a dummy value '#'
            const topElement = stack.length > 0 ? stack.pop() : '#';

            // Check if the top element matches the corresponding opening bracket
            if (matchingBrackets[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // Return true if the stack is empty (all brackets were matched), otherwise return false
    return stack.length === 0;
};

module.exports = { isValid };
