const { gets, print } = require('./aux_function');
const value = gets();
const stack = ['(', ')', '{', '}', '[', ']'];

function isValid(s) {
    let i = 0;
    while (i < (s.length) - 1) {
        if (stack.indexOf(s[i]) != -1) {
            if (stack[stack.indexOf(s[i]) + 1] == s[i + 1]) {
                return true;
            }
        }
        i++;
        return false;
    }
}
print(isValid(value));
