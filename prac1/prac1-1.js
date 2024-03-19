"use strict";


let hight = window.prompt("身長を入力してください。");
let boo = true;

// window.alert(hight);

if (hight === "") {

    window.alert("入力がないと判定できません。")
    boo = false;

} else if (isNaN(hight)) {

    window.alert("半角数字で入力してください。")
    boo = false;

}

if (boo) {
    fun(hight);
}

function fun(hight) {
    if (hight >= 100) {
        let ticket = window.confirm(`プレミアムチケットを持っていますか？\n持っていればOK\n持っていなければキャンセル`);
        if (ticket) {
            window.alert("プレミアムシートに乗車可能です。");
        } else {
            window.alert("通常のシートに乗車可能です。");
        }
    } else if (hight >= 90) {
        window.alert("付き添いありで乗車可能です。");
    } else {
        window.alert("乗車できません。")
    }
}