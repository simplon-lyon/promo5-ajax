import '../scss/index.scss';
import $ from 'jquery';

/**
 * jQuery permet de faire la même chose que le js natif mais de
 * manière plus concise et parfois plus évidente niveau du code.
 * Toutes les méthode de jQuery se trouve dans l'objet $
 * Le principe de base consiste à sélectionner un ou des élément(s) html
 * en faisant $('selecteur css') puis d'exécuter une des nombreuses 
 * méthodes disponibles via jQuery
 * exemple : $('p').css('color', 'red');
 * Va changer la couleur des textes de tous les paragraphes en rouge.
 */
$('.btn').on('click', function(){
    /**
     * L'AJAX permet au javascript de faire des requêtes HTTP vers des
     * ressources  extérieur disponibles sur un serveur.
     * Il est possible de le faire en natif via l'objet XMLHttpRequest ou
     * bien fetch(). Nous utilisons ici jQuery.ajax()
     * La plupart des API AJAX renvoient un objet Promise sur lequel
     * il faudra exécuter un .then() pour obtenir la réponse. C'est une
     * manière de gérer le code asynchrone.
     */
    $.ajax({
        method: 'GET',
        url: $('.url').val()
    })
    //La fonction donnée en argument au then sera exécutée au moment où
    //la requête aura réussi et la réponse accessible
    .then(function(reponse) {
        //Ici, on met la réponse de la requête dans le paragraphe    
        $('p').text(reponse);
    //La fonction donnée en argument du catch sera exécutée si un 
    //problème survient lors de la requête (mauvaise url, erreur serveur...)
    }).catch(function(error) {
        console.log('erreur');
    });

});



