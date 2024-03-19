"use strict";

let answer = Math.floor(Math.random() * 101);
let number = window.prompt("数当てゲーム！数字を入力してください。");

window.alert(answer);

while(answer !== number){
    if(answer > number){
        window.alert("残念！もっと大きいです");
    }else{
        window.alert("残念！もっと小さいです");
    }

    number = window.prompt("数字を入力してください。");
}

window.alert("あたり！");