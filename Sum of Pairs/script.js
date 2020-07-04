var sum_pairs = function(ints, s) {
    if (ints.length < 2) return undefined;
    let newSet = new Set()
    newSet.add(ints[0]);
    for (let i = 1; i < ints.length; i++) {
        let need = s - ints[i];
        if (newSet.has(need)) {
            return [need, ints[i]];
        }
        newSet.add(ints[i]);
    }
    return undefined;
}