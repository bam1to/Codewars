// write the function isAnagram
var isAnagram = function(test, original) {
    let lower = test.toLowerCase().split('').sort();
    let origLow = original.toLowerCase().split('').sort();

    if (!(test.length == original.length)) {
        return false;
    }

    for (let i = 0; i < original.length; i++) {
        if (lower[i] !== origLow[i]) {
            return false;
        }
    }
    return true;

};