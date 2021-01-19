
```diff
!Planering för hur jag ska genomföra arbetet:
+-+-+
- 1. Jag kommer göra en lista av olika ord med hjälp av en ArrayList.
- 2. Slumpar en index inom ArrayListen t.ex. med randomized funktionen. 
- 3. Därefter låter jag spelaren gissa olika bokstäver som är inom ordet som slupades fram. Alla bokstäver kommer jämföras med det orginala ordet som slupades och se ifall en av de bokstävrna spelaren gissade finns eller inte. Man kan använda If/else statements för att kolla ifall det är korrekt eller ej samt kan jag använda charAt för att jämföra ordet med bokstaven som valts ut av användaren.
- 4. Ifall bokstaven fanns inom ordet så kommer bokstaven sparas och skrivs ut där den ska vara placerad i ordet annars bokstaven sparas som ett fel och en del kommmer skrivas ut på gubben. 
- 5. Tillslut så kommer gubben hängas och spelaren förlorar eller så vinner spelaren genom att gissa alla bokstäver rätt i ordet.

- Jag tänkte också använda mig utav en index som visar alla ord man använt i en slags box, de som man hade rätt på och de som man hade fel på så det är tydligt för spelaren.
- Jag tänkte även på att använda ejs för att blanda javascript med html.
- Jag kommer använda mig utav olika funktioner som gör jobbet åt mig och som jag kommer kunna använda igen enklare, ett exempel på detta är att slumpa alla ord så att det blir olika varenda gång. 
- Svårighetsgraden av hängagubbe kommer bestå av en difficulty parameter som kommer avgöra vilken svårighetsgrad det kommer vara. Desto enklare desto mindre samt vanligare ord.
- Jag la till en array som består utav alla felgissningar som du gör genom att pusha bokstäverna som är fel och därefter när du förlorat tömmer jag arrayn av allt ifrån förra spelet som spelaren spelade.
+-+-+
!Hur funkar spelet?
+-+-+
- 1. Spelaren får ett ord slumpmässigt av en lista (easy eller hard level beroende på vad spelaren väljer). //Klar.
- 2. Spelaren får veta hur många ord det slumpmässiga ordet består utav med hjälp av length. //Klar.
- 3. Spelaren kommer få chansa på bokstäver. 
-    Ifall det är:
-    fel- bokstäven sparas så att spelaren kan se att bokstäven var fel och spelaren kan fortsätta gissa på bokstäver.
-    (1 mindre försök per fel och en "kroppsdel" kommer ritas ut antagligen via en html sida).
-    rätt-  bokstaven sparas och visas i rätt ordning i ordet. //Klar
- 4. Ifall spelaren chansar rätt på alla bokstäver utan att gubben hängs så vinner spelaren annars tvärtom. //Klar. 
+-+-+
!Tydligare svar på frågor angående koden:
+-+-+
- 1. Vilken extra funktionalitet har du tänkt implementera?
-    Jag har redan implementerat en funktion som slumpar orden beroende på vad du valde för nivå (easy / hard).
-    Jag har implanterat en setupGame funktion som startar om spelet samt startar om dina försök. 
-    Jag har även en funktion som ger statusen av spelet, alltså ifall du fått ett bokstav rätt / fel samt hur många försök du har kvar innan du förlorar.
- 2. Vilka variabler behöver du och till vilket syfte? Här vill jag ha med variabelnamn, datatyp och en förklaring på vad variabeln är till för - på varje variabel.
-    Två const variabler för de olika svårighetsgraderna. ¨
-    Tre variabler(RandomWord, word, tries)
-    En RandomWordindex variabel för att räkna ut ifall bokstaven finns i ordet eller inte.
- 3. Vilka olika konstrollstrukturer behövs och till vilket syfte? (Loopar, villkor, etc.) Var så detaljerad som möjligt.
-    Jag använder mig utav vilkor exempel ifall variabel == variabel så ska de göra något osv.
- 4. Vilken funktionalitet kan (och borde) du skapa funktioner av? Här vill jag ha funktionsnamn, returtyp, eventuella parametrar samt vad funktionen ska göra.
-    Jag har redan gjort funktioner som är behövande enligt mig i koden för att förenkla samt göra en bra struktur. 
- 5. Vilka variabler behöver vara åtkomliga inom hela klassen?
-    let RandomWord = "";
-    let word = "";
-    let tries = 7;                                                                         
-    samt behöves funktioner ifrån functions.js så de inkluderas i main
-    const functions = require("./functions"); 
+-+-+
