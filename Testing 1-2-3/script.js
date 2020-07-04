let number = function(array) {
    if (array == []) return array;
    let result = array.map(function(item, index) {
        return `${index + 1}: ${item}`;
    });
    return result;
}