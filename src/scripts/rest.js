import $ from 'jquery';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import { Dao } from "./dao";

const dao = new Dao();
//On crée un tableau qui contiendra nos persons
let persons = [];
//On lance un appel ajax qui va chercher les persons sur le serveur
dao.getAll().then(function (reponse) {
    console.log(reponse);
    //On met la réponse de la requête dans notre tableau de persons
    persons = reponse;
    //On lance la fonction d'affichage
    display();
}).catch(function (error) {
    console.error(error);
});

$('form').on('submit', function (event) {
    //On annule le comportment par défaut du formulaire
    event.preventDefault();
    //On fait une requête ajax en post vers le serveur
    dao.add({
        "name": $('#name').val(),
        "birthdate": $("#birthdate").val(),
        "gender": $('#gender').val()

    }).then(function (reponse) {
        //On met la person ajoutée dans notre tableau et on relance l'affichage
        persons.push(reponse);
        display();
    }).catch(function (error) {
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
        tr.append(`<td>${person.birthdate.format('DD/MM/YYYY')}</td>`);
        tr.append(`<td>${person.gender}</td>`);
        //On ajoute le tr au tbody
        tbody.append(tr);
    }
}



//Exemple de chainage de promesse, ici je crée une Promise simpliste qui
//renvoie juste 2
// let promesse = new Promise(function(resolve, reject) {
    
//     resolve(2);
    


// });

//Chaque .then() qu'on fait sur la promesse contiendra la valeur du
//return du then() précédent.
// promesse.then(function(data){
//     console.log('first promise data : '+data);
//     return 'bloup';
// }).then(function(data) {
//     bloup();
//     console.log('second promise data : '+data);
//     return data+' blip';
// }).then(function(data) {
//     console.log('third promise data : '+data);
//     return data.toUpperCase();
// }).catch(function(error){
//     console.log(error);
// });