const { gets, print } = require('./aux_function');

let result = gets();
let input = []

function palindromeCheck(input) {
    var compare = result.split('').reverse('').join('')
    if (compare === result) {
        return 'TRUE';
    } else {
        return 'FALSE';
    }
}

print(palindromeCheck(input));