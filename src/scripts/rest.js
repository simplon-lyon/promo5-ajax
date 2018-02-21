import $ from 'jquery';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

//On crée un tableau qui contiendra nos persons
let persons = [];
//On lance un appel ajax qui va chercher les persons sur le serveur
$.ajax({
    url:'http://localhost:8000/persons'
}).then(function(reponse) {
    //On met la réponse de la requête dans notre tableau de persons
    persons = reponse;
    //On lance la fonction d'affichage
    display();
}).catch(function(error) {
    console.error(error);  
});

$('form').on('submit',function (event) {
    //On annule le comportment par défaut du formulaire
    event.preventDefault();
    //On fait une requête ajax en post vers le serveur
    $.ajax({
        method: 'POST',
        url:'http://localhost:8000/persons',
        //On lui passe en argument un objet représentant une person avec
        //les valeurs qui viennent des inputs du form
        data: { "name" : $('#name').val(), 
                "birthdate" : $("#birthdate").val(),
                "gender": $('#gender').val()
            }
    }).then(function(reponse) {
        //On met la person ajoutée dans notre tableau et on relance l'affichage
        persons.push(reponse);
        display();
    }).catch(function(error) {
        console.error(error);  
    });
});

function display() {
    //On capture le tbody de la table
    let tbody = $('.table tbody');
    //On le vide
    tbody.empty();
    //On fait une boucle sur nos persons
    for (const person of persons) {
        //On crée un tr d'une manière ou d'une autre
        // let tr = $('<tr></tr>');
        let tr = $(document.createElement('tr'));
        //On ajoute 4 td dans ce tr avec les infos de chaque person
        tr.append(`<td>${person.id}</td>`);
        tr.append(`<td>${person.name}</td>`);
        tr.append(`<td>${person.birthdate}</td>`);
        tr.append(`<td>${person.gender}</td>`);
        //On ajoute le tr au tbody
        tbody.append(tr);
    }
}