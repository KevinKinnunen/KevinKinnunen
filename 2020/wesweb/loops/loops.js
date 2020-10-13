let teachers = ["Niklas", "Victor", "Parvin"] //Orginal ordning av lärarna.
let teachersRev = teachers.reverse() //Omvänd ordning av lärarna som jag senare skriver ut.

for (let index = 1; index < 100; index++) { //For loop.
    if (index > 5 && index < 79) //Om Index = större än 5 och Index mindre än 79, fortsätt:
    {
        if (index % 3==0) //Skriv ut de tal man kan dela på 3 mellan 5 och 79?? :C
        {
            console.log("Alla jämnt delbart med 3: ",index)
        }
    }

    console.log(index); //Nummer ifrån 1 - 100! :D
}

console.log("Jag skriver ut lärarna i omvänd ordning! :P", teachersRev)