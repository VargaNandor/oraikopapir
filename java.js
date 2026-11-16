
let jatekosPont = 0;
let gepPont = 0;
let nev = "";
let email = "";

// Belépés
//email ellenorzese hianyzik csinald meg (include kell hogy megnezd h van e benne @ es .)
//a nev minim hosszat vidd feljebb
document.getElementById("belepes").onsubmit = function(event) {

    event.preventDefault();
    email = document.getElementById("email").value;
    nev = document.getElementById("nev").value;

    if (nev.length < 5) {
        document.getElementById("hiba").innerHTML = "Túl rövid név!";
        return;
    }

    if(email.includes("@") == false || email.includes(".") == false)
    {
        document.getElementById("hiba").innerHTML = "Hibás email cím!";
        return;
    }

    document.getElementById("belepes").style.display = "none";
    document.getElementById("jatek").style.display = "block";

    document.getElementById("jatekosNev").innerHTML = "Játékos: " + nev;
};


// Játék
// 1 = kő, 2 = papír, 3 = olló de az ellenőrzés nem jo szovals nezd meg
function jatek(valasztas) {

    if (jatekosPont == 10 || gepPont == 10) {
        return;
    }

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
        document.getElementById("vegeredmeny").innerHTML = "Megnyerted a játékot!";
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
