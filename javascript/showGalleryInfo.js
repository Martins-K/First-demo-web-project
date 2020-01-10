var description = [
    "Jūrkalnes stāvkrasts ir viena no gleznainākajām jūras piekrastēm Latvijā, kas lepojas ar skaistu smilšu pludmali un augstāko stāvkrastu Latvijā. Senāk dēvēta par Feliksbergu jeb Laimīgo kalnu, Jūrkalne joprojām dara laimīgus gan laiskas atpūtas, gan ūdenssporta cienītājus. Skaistā skata baudīšanai no 20 metru augstās krasta kraujas uz pludmali ved speciāli veidotas kāpnes. Tās vairākkārt ir atjaunotas, jo spēcīgu vētru laikā krasts ievērojami atkāpjas — tieši pie Jūrkalnes novērojama vislielākā krasta erozija Latvijā. Pēc Otrā pasaules kara, Jūrkalnes pludmale un dižais stāvkrasts, kas iezīmēja Padomju Savienības rietumu robežu, bija pieejami tikai ar īpašām atļaujām, bet nu jau pāris gadu desmitus Jūrkalne atkal ir ļoti iemīļots vasaras galamērķis.", 
    "Rundāles pils (vācu: Schloss Ruhental, agrāk saukta arī par Ruhenthal un Ruhendahl) ir nozīmīgākā baroka stila pils Latvijā. Atrodas Rundāles novada Pilsrundālē. Krievijas impērijā strādājošā itāļu arhitekta Frančesko Bartolomeo Rastrelli projektētā pils celta no 1736. līdz 1768. gadam kā Kurzemes un Zemgales hercoga Ernsta Johana Bīrona vasaras rezidence. Rundāles pils ansamblī ietilpst arī saimniecības ēkas un parks. Kopš 1972. gada pilī atrodas Rundāles pils muzejs un notiek pils un parka restaurācija ar mērķi atjaunot to sākotnējo izskatu. Rundāles pils ir iekļauta Latvijas kultūras kanonā.",
    "Brīvības piemineklis ir Latvijas brīvības cīņās kritušo piemiņai celts piemineklis Brīvības laukumā Rīgas centrā. Tas ir Latvijas valstiskuma, latviešu tautas vienotības, neatkarības un brīvības simbols. 1935. gadā atklātais piemineklis ir 42 metrus augsts un veidots no pelēka un sarkana granīta, travertīna, dzelzsbetona un vara. Pieminekļa kompozīciju veido trīspadsmit skulptūras un bareljefi, kuros attēlota Latvijas vēsture un kultūra. Pieminekļa masīvs veidots monolītām četrstūrainām formām, kas izkārtotas viena virs otras. Virzienā uz augšu pieminekļa forma sašaurinās un pāriet 19 metrus augstā obeliskā, kura galotnē atrodas 9 metrus augstais Brīvības tēls — jauna sieviete, kura rokās tur trīs zeltītas zvaigznes."
                ];

	var skaits = 0;
function nextText() {
    skaits++;

    if(skaits >= description.length) {
        skaits = 0;
    }
    switch (skaits) {
        case 0:
            document.getElementById("right-text").innerHTML = description[0];   
        break;
        case 1:
            document.getElementById("right-text").innerHTML = description[1];
        break;
        case 2:
            document.getElementById("right-text").innerHTML = description[2];
        break;
    }
}

function prevText() {
    skaits--;
        if(skaits < 0) {
            skaits = description.length-1;
        }
        switch (skaits) {
            case 0:
                document.getElementById("right-text").innerHTML = description[0];   
            break;
             case 1:
                document.getElementById("right-text").innerHTML = description[1]; 
            break;
            case 2:
                document.getElementById("right-text").innerHTML = description[2]; 
             break;
        }
}