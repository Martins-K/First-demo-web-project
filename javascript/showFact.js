function showFact() {
var fakti = [
"Latvijas vecākā pilsēta ir Ludza. Pirmās ziņas hronikā par šo Latgales pilsētu tikušas datētas ar 1177. gadu. Šo skaisto, ezeriem un mežiem bagāto novadu Latvijas rītu pusē Baltijas latgaļu ciltis dzīvošanai izvēlējās jau pirmajā gadu tūkstotī pirms mūsu ēras. Par to liecina 14 apmetnes, vairāk kā 25 pilskalni un aptuveni 70 kapukalni.",
"Rīgas centrālais tirgus ir lielākais Baltijā un ir viens no lielākajiem Eiropā. Tirgus platība sastāda 72 000 kvadrātmetru lielu platību. 1997. gadā tirgus teritorija, veidojot ar vecpilsētu vienu veselumu, iekļāvās UNESCO \"Pasaules mantojuma\" sarakstā.",
"Latvija ierindojas otrajā vietā pasaulē pēc mobilā interneta izmantošanas rādītājiem ar vidēji 8,2 GB mēnesī, liecina OECD 2017. gada ziņojums \"Digital Economy Outlook\".",
"Kuldīgā atrodas Eiropā platākais ūdenskritums - Ventas Rumba. Tas atrodas Kuldīgā un tā platums ir 249 metri. Ūdenskrituma platums ir ap 100–110 metriem, taču palu laikā tā platums sasniedz pat 249 metrus. Ūdenskrituma augstums ir 1,8–2 metri. Šajā vietā strauji mainās upes dziļums – no 50 centimetriem līdz 2 metriem. Kuldīgas iedzīvotāji senatnē ūdenskritumu ir izmantojuši, lai šķērsotu upi.",
"Starptautiskā lidosta \"Rīga\" ir lielākais aviosatiksmes mezgls Baltijas valstīs, apkalpojot 45% Baltijas aviopasažieru. No lidostas \"Rīga\" ziemas sezonā iespējams doties uz 69, bet vasaras sezonā uz 79 galamērķiem, ko nodrošina 20 aviosabiedrība.",
"Latvija ir viena no zaļākajām valstīm pasaulē, jo vairāk nekā 50% valsts teritorijas klāj meži. Latvijā esot apmēram 700 miljoni koku (1 400 koku katram iedzīvotājam!). Nav brīnums, ka liela daļa latviešu ir kaislīgi sēņotāji un ogotāji.",
"Latvijā ir viens no augstākajiem rādītajiem pasaulē modeļu biznesā uz vienu iedzīvotāju.",
"Latvijā notiek vieni no lielākajiem dziesmu un deju svētkiem pasaulē, kurā piedalās vairāk kā 40 000 dalībnieku, kad koru diriģenti un vadītāji ir Latvijas slavenības. Latvijai arī ir viens no lielākajiem tautasdziesmu krājumiem pasaulē, sasniedzot 300 000 tautasdziesmu.",
"Latviešu valda ir viena no senākajām valodām Eiropā, kura ir radusies un veidojusies pēdējos 5 000 gadu, kas ir senā indoeiropiešu valoda."
]
var randomFact = document.getElementById("fakts");
randomFact.innerHTML = fakti[Math.floor(Math.random() * 9)];
}