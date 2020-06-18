let toJadenCase = function (string) {
    let genius = string.split(" ");
    let newGenius = [];
    for (let i = 0; i < genius.length; i++) {
      newGenius.push(genius[i].charAt(0).toUpperCase() + genius[i].slice(1));
    }
    let str = newGenius.join(' ');
    return str;
};

var stri = "How can mirrors be real if our eyes aren't real";
alert(toJadenCase(stri))