var text = [
    "The earliest surviving houses in Scotland go back around 9500 years, and the first villages 6000 years; Skara Brae on the Mainland of Orkney is the earliest preserved example in Europe.",
    "Crannogs, or roundhouses, each built on artificial islands, date from the Bronze Age, and stone buildings called Atlantic roundhouses and larger earthwork hill forts from the Iron Age.",
    "After the arrival of the Romans from about 71 AD hey appear to have been largely abandoned..",
    "The Romans build military forts like that at Trimontium, and a continuous fortification between the Firth of Forth and the Firth of Clyde known as the Antonine Wall, built in the second century AD.",
    "Beyond Roman influence, there is evidence of wheelhouses and underground souterrains.",
    "After the departure of the Romans in the third century, there is evidence of the reoccupation of Iron Age forts and of the building of a series of smaller 'nucleated' constructions, sometimes utilising major geographical features, as at Dunadd and Dumbarton."
    ];

var terminalWords = [];
var initialWords = [];
var wordstats = {};
var backstats = {};

for (var i = 0; i < text.length; i++) {
    var words = text[i].split(' ');
    terminalWords.push(words[words.length - 1]);
    initialWords.push(words[0]);
    //fill the dictionary
    for (var j = 0; j < words.length - 1; j++) {
        if (wordstats.hasOwnProperty(words[j])) {
            wordstats[words[j]].push(words[j+1]);
        } else {
            wordstats[words[j]] = words[j+1];
        }
    }
    //create a reverse dictionary
    for (j = 1; j < words.length; j++) {
        if (backstats.hasOwnProperty(words[j])) {
            backstats[words[j]].push(words[j-1]);
        } else {
            backstats[words[j]] = words[j-1];
        }
    }
}
