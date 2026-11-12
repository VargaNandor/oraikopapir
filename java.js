let jatekosPont = 0;
let gepPont = 0;

function jatek(jatekosValasztas) {
    const gepValasztas = Math.floor(Math.random() * 3) + 1;
    const kepek = ["ko.png", "papir.png", "ollo.png"];

    document.getElementById("gepValasztas").src =
        "img/" + kepek[gepValasztas - 1];

    let eredmeny;

    if (jatekosValasztas === gepValasztas) {
        eredmeny = "Döntetlen!";
    } else if (
        (jatekosValasztas === 1 && gepValasztas === 3) ||
        (jatekosValasztas === 2 && gepValasztas === 1) ||
        (jatekosValasztas === 3 && gepValasztas === 2)
    ) {
        eredmeny = "Nyertél!";
        jatekosPont++;
    } else {
        eredmeny = "Vesztettél!";
        gepPont++;
    }

    document.getElementById("eredmeny").textContent = eredmeny;
    document.getElementById("jatekosPont").textContent = jatekosPont;
    document.getElementById("gepPont").textContent = gepPont;
}
