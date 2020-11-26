### Planering för hur jag ska genomföra arbetet:
1. Jag kommer göra en lista av olika ord med hjälp av en ArrayList.
2. Slumpar en index inom ArrayListen t.ex. med randomized funktionen. 
3. Därefter låter jag spelaren gissa olika bokstäver som är inom ordet som slupades fram. Alla bokstäver kommer jämföras med det orginala ordet som slupades och se ifall en av de bokstävrna spelaren gissade finns eller inte. Man kan använda If/else statements för att kolla ifall det är korrekt eller ej samt kan jag använda charAt för att jämföra ordet med bokstaven som valts ut av användaren.
4. Ifall bokstaven fanns inom ordet så kommer bokstaven sparas och skrivs ut där den ska vara placerad i ordet annars bokstaven sparas som ett fel och en del kommmer skrivas ut på gubben. 
5. Tillslut så kommer gubben hängas och spelaren förlorar eller så vinner spelaren genom att gissa alla bokstäver rätt i ordet.

Jag tänkte också använda mig utav en index som visar alla ord man använt i en slags box, de som man hade rätt på och de som man hade fel på så det är tydligt för spelaren.
Jag tänkte även på att använda ejs för att blanda javascript med html.
Jag kommer använda mig utav olika funktioner som gör jobbet åt mig och som jag kommer kunna använda igen enklare, ett exempel på detta är att slumpa alla ord så att det blir olika varenda gång. 

### Hur funkar spelet?
1. Spelaren får ett ord och hur får veta hur många bokstäver ordet har.
2. Spelaren ska chansa på en bokstav som spelaren tror att ordet består utav.
3. Ifall spelaren har rätt så sparas bokstaven och ifall spelaren har fel så får de 1 mindre försök och det skrivs även ut en del av tekniken som kommer ritas samt så kommer bokstaven som var fel sparas.
4. Ifall spelaren chansar rätt på alla bokstäver utan att gubben hängs så vinner spelaren annars tvärtom. 