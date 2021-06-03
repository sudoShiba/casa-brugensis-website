const arrLang = {
    "en": {
        "headertxt1": "Casa Brugensis is a luxurious holiday house, renovated with all modern comforts for 2-4 persons.",
        "headertxt2": "Our holiday house is uniquely situated in the \"golden triangle\" of Bruges, at the quiet Beguinage and the idyllic Lake of Love.",
        "headertxt3": "Within walking distance of all the sights and museums.",
        "headertxt4": "Shops, restaurants and terraces in the neighbourhood.",
        "interiortitle": "interior",
        "locationheader": "Location",
        "locationsubtxt": "Located in the medieval center of Bruges Casa Brugesnsis is the perfect place to stay.",
        "locationaddrtitle": "Adress",
        "locationaddr1": "Sulferbergstraat 7,",
        "locationaddr2": "8000 Bruges,",
        "locationaddr3": "Belgium",
        "brugestitle": "Things to do in Bruges",
        "calendartitle": "Calendar",
        "contacttitle": "Contact us!",
        "copy": "copy",
        "plug": "Made by Roberto Zunica ",
    },
    "nl": {
        "headertxt1": "Casa Brugensis is volledig verbouwd en gezellig ingericht voor 2-4 personen.",
        "headertxt2": "Onze vakantiewoning is uniek gelegen in de \"gouden driehoek\" van Brugge, bij het rustige Begijnhof en het idyllische Minnewater.",
        "headertxt3": "Op wandelafstand van alle bezienswaardigheden en musea.",
        "headertxt4": "Restaurants, terrasjes en winkels in de onmiddellijke omgeving.",
        "interiortitle": "Interieur",
        "locationheader": "Locatie",
        "locationsubtxt": "Gelegen in het hartje van Brugge is Casa Brugensis de perfecte keuze voor uw verblijf in deze middeleeuwse stad.",
        "locationaddrtitle": "Adress",
        "locationaddr1": "Sulferbergstraat 7,",
        "locationaddr2": "8000 Brugge,",
        "locationaddr3": "België",
        "brugestitle": "Te doen in Brugge",
        "calendartitle": "Kalender",
        "contacttitle": "Contacteer ons!",
        "copy": "kopieer",
        "plug": "Gemaakt door Roberto Zunica ",
    },
    "fr": {
        "headertxt1": "Casa Brugensis est luxueuse et agréablement renovée avec tout le confort moderne pour 2-4 personnes.",
        "headertxt2": "Notre maison de vacances est située dans le \"triangle d'or\" de Bruges, près du Béguinage et le Lac d'Amour.",
        "headertxt3": "Aux environs immédiates des restaurants et terrasses, des magasins, des musées et des curiosités.",
        "headertxt4": "",
        "interiortitle": "Intérieur",
        "locationheader": "Emplacement",
        "locationsubtxt": "Situé dans le centre médiéval de Bruges, la Casa Brugensis est le lieu de séjour idéal.",
        "locationaddrtitle": "Adress",
        "locationaddr1": "Sulferbergstraat 7,",
        "locationaddr2": "8000 Bruges,",
        "locationaddr3": "Belgique",
        "brugestitle": "Choses à faire en Bruges",
        "calendartitle": "Calendrier",
        "contacttitle": "Contactez-nous!",
        "copy": "copie",
        "plug": "Made by Roberto Zunica ",
    },
};
$(document).ready(function() {
    // The default language is English
    var lang = "en";
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});
  
// get/set the selected language
$(".translate").click(function() {
    var lang = $(this).attr("id");
  
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});
