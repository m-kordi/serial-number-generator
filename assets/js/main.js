let serdiv = document.querySelector(".serial");
let genbtn = document.querySelector(".generate");
let no = document.getElementById("passlen");
let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");
let num = document.getElementById("numbers");
let speacial = document.getElementById("speacial-characters");

genbtn.onclick = function(){
    let charval = "";
    if(upper.checked==true){
        charval+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } if(lower.checked==true){
        charval+="abcdefghijklmnopqrstuvwxyz";
    } if(num.checked==true){
        charval+="1234567890";
    } if(speacial.checked==true){
        charval+="!@#$%^&*";
    } if(upper.checked==false && lower.checked==false && num.checked==false && speacial.checked==false){
        charval="0";
    }
    let charcount = no.value;
    let randser = "";
    for (let i = 0; i < charcount; i++) {
        randser += charval[Math.floor(Math.random() * charval.length)];

    }
    serdiv.innerHTML= randser;
}