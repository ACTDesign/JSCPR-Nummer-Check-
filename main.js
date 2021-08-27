let cprnummer = document.getElementById("cpr");

let cprlength = document.getElementById("lengthparagraph");
let peven = document.getElementById("even");
let pdag = document.getElementById("dag");
let pmaaned = document.getElementById("maaned");

cprnummer.addEventListener("input", function(){
    let cprbindestreg = cprnummer.value.replace(/-/g,'');

    let cprvalue = cprnummer.value;

    //console.log(cprbindestreg);
    //console.log("input noted!");
    //cprlength.innerHTML = "cprvalue";

    if(cprbindestreg.length == 10){
        console.log("input er 10");
        cprlength.innerHTML = "Input længde er gyldig!";
        //console.log(cprbindestreg);
    } else{
        console.log("input er ikke 10");
        cprlength.innerHTML = "Input længde er ikke gyldig";
    }

    if(cprnummer.value.length >= 4){
        //console.log(cprnummer.value.slice(cprnummer.value.length - 4));
        let evenodd = cprnummer.value.slice(cprnummer.value.length - 4);
        if(evenodd % 2 == 0){
            console.log("kvinde");
            peven.innerHTML = "Kvinde";
        } else{
            console.log("mand");
            peven.innerHTML = "Mand";
        }
    }

    let dag = cprnummer.value.slice(0,2);
    let maaned = cprnummer.value.slice(2,4);

    //console.log("Dag " + dag);
    //console.log("Måned " + maaned)

    if(dag > 31){
        console.log("Dag ikke gyldig");
    } else{
        pdag.innerHTML = "Dagen er " + dag;
    }

    if(maaned > 12){
        console.log("Måned ikke gyldig");
    } else{
        pmaaned.innerHTML = "Måneden er " + maaned;
    }

})