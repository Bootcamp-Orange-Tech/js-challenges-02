const clumsy = num => {
    let k = num;
    let result = 0, temp = 1, i = 0;
    while (k > 0) {
        temp = k;
        
        if (k - 1 > 0) {
            temp *= (k - 1);
        }
        if (k - 2 > 0) {
            temp /= (k - 2);
        }
        if (k - 3 > 0) {
            if (k === num) {
                temp += (k - 3);
            } else {
                temp -= (k - 3);
            }
        }
        if (k === num) {
            result = temp;
        } else {
            result = result - temp;
        }
        k = k - 4;
    }
    return result;
};
console.log(parseInt(clumsy(4)));
console.log(parseInt(clumsy(16)));
