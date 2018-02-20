import $ from 'jquery';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

let persons = [];

$.ajax({
    url:'http://localhost:8000/persons'
}).then(function(reponse) {
    persons = reponse;
    display();
}).catch(function(error) {
    console.error(error);  
});

$('button').on('click',function () {
    let person = {
        'name':'Pawel',
        'birthdate':'2016/01/27',
        'gender':0
    };
    $.ajax({
        method: 'POST',
        url:'http://localhost:8000/persons',
        data: person
    }).then(function(reponse) {
        console.log(reponse);
    }).catch(function(error) {
        console.error(error);  
    });
});

function display() {
    let tbody = $('.table tbody');
    tbody.empty();
    for (const person of persons) {
        // let tr = $('<tr></tr>');
        let tr = $(document.createElement('tr'));
        tr.append(`<td>${person.id}</td>`);
        tr.append(`<td>${person.name}</td>`);
        tr.append(`<td>${person.birthdate}</td>`);
        tr.append(`<td>${person.gender}</td>`);
        tbody.append(tr);
    }
}