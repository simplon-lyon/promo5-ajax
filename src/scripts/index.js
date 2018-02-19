import '../scss/index.scss';
import $ from 'jquery';

$('.btn').on('click', function(){
    $.ajax({
        method: 'POST',
        url: $('.url').val()
    }).then(function(reponse) {
        //fait ça une fois que t'as la réponse
        $('p').text(reponse);
    }).catch(function(error) {
        //fait ça, si la requête a foirée
        console.log('erreur');
    });

})



