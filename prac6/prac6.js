"use strict"

function wordget(){
    let word = document.getElementById("word").value;
    let result = document.getElementById("result");
    result.textContent = word;
}

function btnfun(){
    wordget();
    result.style.cssText = null;
}

function btnfun1(){
    wordget();
    result.style.cssText = `font-size: 20px; color: aqua; font-family: "HG正楷書体-PRO";`;
}

function btnfun2(){
    wordget();
    result.style.cssText = `font-size: 20px; color: darksalmon; font-family: "UD デジタル 教科書体 NK-B"`;
}

function btnfun3(){
    wordget();
    result.style.cssText = `font-size: 20px; color: darkolivegreen; font-family: "HG創英角ﾎﾟｯﾌﾟ体";`;
}

function btnfun4(){
    wordget();
    result.style.cssText = `font-size: 20px; color: cadetblue; font-family: "HGP創英ﾌﾟﾚｾﾞﾝｽEB";`;
}