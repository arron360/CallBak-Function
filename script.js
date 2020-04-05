function first (){
    setTimeout (function() {  // задержка на пол секунды
    console.log(1);
    } , 500);
}

function second () { 
    console.log(2);
}

first(); 
second();

function learnJS(lang, callback) {
    console.log("Я учу" + lang)
    callback();
}

function done () {
    console.log ("я прошел третий урок");
}

learnJS("JS", done);