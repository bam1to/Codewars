'use strict'
function isPangram(string){
    let re = /[\W(\d)]/gm;
    let new_str = string.toLowerCase().split(re).join('');  
    console.log(new_str);
    let obj = new Set();   
    for(let char of new_str){
        obj.add(char);
    }
    console.log(obj)
    if(obj.size == 26) return true;
    return false;
}


function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

var str = "The quick brown fox, jumps over the lazy dog.";
alert(isPangram(str));
