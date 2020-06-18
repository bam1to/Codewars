function tribonacci(signature, n) {
    let Arr = [],
        newArr = Arr.concat(signature),
        c = 0;
     if (n == 0) return Arr;
     if (n < signature.length) {
       for(let i = 0; i < n; i++) {
         Arr.push(signature[i]);
       }
       return Arr;
     };
    while (newArr.length < n) {
        let sum = 0
        for (let i = newArr.length - 1; i >= c; i--) {
            sum += newArr[i];
        }
        newArr.push(sum);
        c++;
    }
    return newArr;
}

alert(tribonacci([1,1,1],10));