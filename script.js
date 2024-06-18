function naplnTabulku() {
    var table = document.createElement("table");

    let tr = document.createElement("tr");

    //vytvoření pole s nazvy dnu v týdnu
    var dny = ["po", "út", "st", "čt", "pá", "so", "ne"];

    //vytvorení prvního řádku pro názvy dnů
    for (var i = 0; i < 7; i++) {
        var bunka = document.createElement("td");
        
        //do bunek vkládám pole s dny
        bunka.textContent = dny[i];
        tr.appendChild(bunka);
        bunka.setAttribute("id", "bunka");
    }
    table.appendChild(tr);
    tr = document.createElement("tr");

    // Vytvoření zbývajících řádků pro kalendářní buňky
    /*for (var i = 0; i < 5; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            let td = document.createElement("td");
            td.textContent=i;
            tr.appendChild(td);
        table.appendChild(tr);
        }
    }*/

    let coChciVidetMesic = 6;
    let coChciVidetRok = 2024;

    //if(coChciVidet > 0 && coChciVidet < 13){  

    let dnes = new Date(coChciVidetRok, coChciVidetMesic - 1);
    console.log(dnes);
    let aktualniMesic = dnes.getMonth();
    let aktualniRok =  dnes.getFullYear();
    let prvniDenVMesici = new Date(aktualniRok, aktualniMesic, 1);

    let pocetDniVMesici = new Date(aktualniRok, aktualniMesic + 1, 0).getDate();

    let den = prvniDenVMesici.getDay();
    let preskocitDniVPrechozimMesici = den - 1;

    let pocetGenerovanychBunek = pocetDniVMesici + preskocitDniVPrechozimMesici;


    if(den == 0){
        den = 7;
    }

    for(var x = 0; x < pocetGenerovanychBunek; x++){
        let td = document.createElement("td");
        if(x >= preskocitDniVPrechozimMesici){
            td.textContent = x - preskocitDniVPrechozimMesici + 1;
        }
            tr.appendChild(td);

            switch ((x + 1) % 7) {
                case 0:
                    td.style.backgroundColor = "green";
                    table.appendChild(tr);
                    tr = document.createElement("tr");
                    break;
                case 6:
                    td.style.backgroundColor = "yellow";
                    break;
                case 5:
                    td.style.backgroundColor = "lightblue";
                    break;
                case 4:
                    td.style.backgroundColor = "blue";
                    break;
                case 3:
                    td.style.backgroundColor = "lightgreen";
                    break;
                case 2:
                    td.style.backgroundColor = "red";
                    break;
                case 1:
                    td.style.backgroundColor = "brown";
                    break;
            }
        }

    table.appendChild(tr);

    return table;

   /* } else{
        return 0;
    }*/  
}

document.addEventListener("DOMContentLoaded", function() {
    // vytvarim div uvnitr html
    var div = document.createElement("div");
    div.setAttribute("id", "divId")
    document.body.appendChild(div);
    var table = naplnTabulku();
    div.appendChild(table);

    //davam table do div

    var input = document.createElement("input");
    input.addEventListener("change",function(){
        var div2 = document.getElementById("divId");
        var table2 = naplnTabulku();
        console.log("a")
        div2.replaceChild(table2, div2.childNodes[0]);
    })
    input.setAttribute("placeholder", "zadej měsíc (1-12)")
    document.body.appendChild(input);
});