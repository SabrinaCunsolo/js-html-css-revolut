// L'esercitazione di oggi consiste nel replicare l'header del sito:
// https://www.revolut.com/it-IT
// soprattutto per quanto riguarda il meccanismo del dropdown menu.
// Nel sito, il dropdown si attiva con mouseenter e si disattiva con click al di fuori dell'elemento. Noi semplifichiamo e per chiudere il dropdown menu utilizziamo il mouseleave.
// Nome repo: js-html-css-revolut

$(document).ready(function() {

    // // per far visualizzare il dropdown menu al passaggio del mouse devo agganciarlo alla parola che si trova nel menu, che ha la classe dropdown
    // $('.dropdown').mouseenter(function() {
    //     $('.dropdown-menu').addClass('active');
    // });
    // // per nascondere il dropdown menu dopo il passaggio del mouse devo agganciarlo sempre alla stessa parola
    // $('.dropdown').mouseleave(function() {
    //     $('.dropdown-menu').removeClass('active');
    // });
    //
    // // devo far abbassare menu a tendina uno per volta
    // provo altra soluz con click
    $('.menu').click(function() {

        $('.dropdown-menu').toggleClass('active');
    });
});
