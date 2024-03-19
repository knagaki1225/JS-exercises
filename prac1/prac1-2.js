"use strict";

let result = window.prompt(`目的の駅を入力してください。\n1:A駅\n2:B駅\n3:C駅`);

if(result === "1"){
    window.alert("快速電車が止まります。");
}else if(result === "2"){
    window.alert("快速電車と急行電車が止まります。");
}else if(result === "3"){
    window.alert("特急電車が止まります。");
}