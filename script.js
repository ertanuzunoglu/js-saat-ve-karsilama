let enter = prompt("İsminizi giriniz:","Örnek:Ertan");
let Name = document.querySelector("#myName");

Name.innerHTML = `${enter}`;

function time(){
    let date = new Date().toLocaleTimeString();
    let gun = new Date();
    let days = [
        "PAZAR",
        "PAZARTESİ",
        "SALI",
        "ÇARŞAMBA",
        "PERŞEMBE",
        "CUMA",
        "CUMARTESİ",
    ];
    document.querySelector("#myClock").innerHTML = `${date} / ${days[gun.getDay()]}`;
}
setInterval(time, 1000);



