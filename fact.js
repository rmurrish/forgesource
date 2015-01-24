//alert(document.URL);
/*jslint browser: true*/
/*global $, jQuery, alert*/
alert("open");
var titles = ["Each bookcase has six shelves, going almost to the ceiling.",
            "Some bookshelves are stacked to the brimwith hardback books: science, maths, history, and everything else.",
            "Othershelves have two layers of paperback science fiction, with the back layer ofbooks propped up on old tissue boxes or lengths of wood, so that you can seethe back layer of books above the books in front.",
            "And it still isn't enough.Books are overflowing onto the tables and the sofas and making little heapsunder the windows.This is the living-room of the house occupied by the eminent Professor MichaelVerres-Evans, and his wife, Mrs.",
            "Petunia Evans-Verres, and their adopted son, Harry James Potter-Evans-Verres. There is a letter lying on the living-room table, and an unstamped envelope ofyellowish parchment, addressed to Mr.",
            "H.",
            "Potter in emerald-green ink. The Professor and his wife are speaking sharply at each other, but they are notshouting."];
var ends = {};
var starts = [];
var wordstats = {};
var backstats = {};

//build the wordstats/backstats dictionaries
var i;
for (i = 0; i < titles.length; i + 1) {
    var words = titles[i].split(' ');
    alert("d");
    ends[words[words.length - 1]] = true;
    alert("e");
    starts.push(words[0]);
    var j;
    for (j = 0; j < words.length - 1; j + 1) {
        //for starting from the end/middle and building backward
        if (backstats.hasOwnProperty(words[j + 1])) {
            backstats[words[j + 1]].push(words[j]);
        } else {
            backstats[words[j + 1]] = [words[j]];
        }
        //for building sentence forward
        if (wordstats.hasOwnProperty(words[j])) {
            wordstats[words[j]].push(words[j + 1]);
        } else {
            wordstats[words[j]] = [words[j + 1]];
        }
    }
}



var choice = function (a) {
    "use strict";
    var i = Math.floor(a.length * Math.random());
    return a[i];
};

var make_title = function (min_length) {
    "use strict";
    var word = choice(['', 'Magic']);
    var title = [word];
    while (wordstats.hasOwnProperty(word)) {
        var next_words = wordstats[word];
        word = choice(next_words);
        title.push(word);
        if (title.length > min_length && ends.hasOwnProperty(word)) {
            break;
        }
    }
    if (title.length < min_length) {
        return make_title(min_length);
    }
    return title.join(' ');
};

/*var make_backward = function (min_length) {
    "use strict";
    //word = choice(terminals);
    var word = "hogwarts";
    var title = [word];
    while (backstats.hasOwnProperty(word)) {
        var next_words = backstats[word];
        word = choice(next_words);
        title.push(word);
        if (title.length > min_length && starts.hasOwnProperty(word)) {
            break;
        }
    }
    if (title.length < min_length) {
        return make_backward(min_length);
    }
    return title.reverse().join(' ');
};*/

$(document).ready(function(){
    alert("hi");
    $('#generate').click(function () {
        "use strict";
        alert('document.URL');
        var title = make_title(4 + Math.floor(8 * Math.random()));
        $('#generated_title').html(title);
        //var back = make_backward(4 + Math.floor(8 * Math.random()));
        $('#back_title').html(back);
        //var nothing = 'hey';
        $('#somevar').html(" <b>wow</b> ");
        
        //JSON.stringify(wordstats);
        //$(".thing").html(".");
        
        $(".myClass").css("border", "3px solid red");
    });
});