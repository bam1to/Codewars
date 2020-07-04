function deleteNth(arr, n) {
    var count = {};
    return arr.filter(function(x) {
        count[x] = (count[x] || 0) + 1;
        return count[x] <= n;
    });
}