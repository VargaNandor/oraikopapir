
let jatekosPont = 0;
let gepPont = 0;
let nev = "";
let email = "";

// Belépés
//email ellenorzese hianyzik csinald meg (include kell hogy megnezd h van e benne @ es .)
//a nev minim hosszat vidd feljebb
// a nev nincs jol ellenorizve
function belepes() {

    document.getElementById("jatek").style.display = "block";
    email = document.getElementById("email").value;
    nev = document.getElementById("nev").value;

if (nev.trim() === "") {
    document.getElementById("hiba").innerHTML = "A név nem lehet üres!";
    return;
}

if (nev.trim().length < 5) {
    document.getElementById("hiba").innerHTML = "Túl rövid név!";
    return;
}

if (!/^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$/.test(nev.trim())) {
    document.getElementById("hiba").innerHTML = "A név csak betűket tartalmazhat!";
    return;
}

if (
    email.includes("@") == false ||
    email.includes(".") == false ||
    email.indexOf("@") == 0 ||
    email.indexOf(".") == email.length - 1 ||
    email.indexOf("@") > email.lastIndexOf(".") ||
    email.includes("@.") ||
    email.includes(".@") ||
    email.includes(" ")
) {
    document.getElementById("hiba").innerHTML = "Hibás email cím!";
    return;
}

    document.getElementById("jatek").style.display = "block";

    document.getElementById("jatekosNev").innerHTML = "Játékos: " + nev;
}


// Játék
// 1 = kő, 2 = papír, 3 = olló de az ellenőrzés nem jo szovals nezd meg
function jatek(valasztas) {

    if (jatekosPont == 10 || gepPont == 10) {
        return;
    }
//nem lehet js ben random szam merteket beallítani ezért lesz ott a *3 mert az szorozza az 0-1 közötti szamot es flooral le kerekitjuk lefelé és hozzá adunk egyet h 0 ne lehessenS
    let gep = Math.floor(Math.random() * 3) + 1;

    let kepek = ["ko.png", "papir.png", "ollo.png"];

    document.getElementById("gepValasztas").src =
        "kepek/" + kepek[gep - 1];

    if (valasztas == gep) {
        document.getElementById("eredmeny").innerHTML = "Döntetlen!";
    }
//rossz   !!!!!!Már jó!!!!!!!!!!
    else if (
        (valasztas == 1 && gep == 3) ||
        (valasztas == 2 && gep == 1) ||
        (valasztas == 3 && gep == 2)
    ) {
        document.getElementById("eredmeny").innerHTML = "Nyertél!";
        jatekosPont++;
    }

    else {
        document.getElementById("eredmeny").innerHTML = "Vesztettél!";
        gepPont++;
    }

    document.getElementById("jatekosPont").innerHTML = jatekosPont;
    document.getElementById("gepPont").innerHTML = gepPont;

    if (jatekosPont == 10) {
        document.getElementById("vegeredmeny").innerHTML = `Megnyerted a játékot! ${nev}`;
        document.getElementById("ujrakezdes").style.display = "inline";
    }

    if (gepPont == 10) {
        document.getElementById("vegeredmeny").innerHTML = "A gép nyert!";
        document.getElementById("ujrakezdes").style.display = "inline";
    }
}


// Újrakezdés
//csinalj egy kepett arra hogy nem valaszt meg a gep
function ujrakezdes() {

    jatekosPont = 0;
    gepPont = 0;

    document.getElementById("jatekosPont").innerHTML = 0;
    document.getElementById("gepPont").innerHTML = 0;
    document.getElementById("eredmeny").innerHTML = "Válassz!";
    document.getElementById("vegeredmeny").innerHTML = "";
    document.getElementById("gepValasztas").src = "kepek/semmi.png";
    document.getElementById("ujrakezdes").style.display = "none";
}
