function encrypt(text, n) {
    if (n <= 0 || text == null) {
        return text;
    }
    let newtext = text.split('');
    let arr = [],
        second_arr = [];

    for (let i = 0; i < n; i++) {
        newtext.forEach((item, index) => {
            if (index % 2 == 1 && index !== 0) {
                arr.push(item);
            } else {
                second_arr.push(item);
            }
        })
        newtext = arr.concat(second_arr);
        second_arr = [];
        arr = [];
    }
    return newtext.join('');
};

function decrypt(encryptedText, n) {
    if (n <= 0 || encryptedText == null) {
        return encryptedText;
    }
    let newtext = encryptedText.split('');
    let arr = []
    for (let j = 0; j < n; j++) {
        let arr1 = newtext.slice(0, Math.floor(newtext.length / 2));
        let arr2 = newtext.slice(Math.floor(newtext.length / 2), newtext.length + 1);
        for (let i = 0; i < arr2.length; i++) {
            arr.push(arr2[i]);
            if (arr1[i] == undefined) {
                continue;
            }
            arr.push(arr1[i]);
        }
        newtext = arr;
        arr = [];
    }
    return newtext.join('');
}

let result1 = encrypt(prompt("Введите текст"), prompt("Введите сложность"));
alert(result1)
if (confirm("Хотите дешифровать?")) {
    let result2 = decrypt(prompt("Введите текст"), prompt("Введите сложность"));
    alert(result2);
}