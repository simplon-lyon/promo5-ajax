import $ from 'jquery';

$.ajax({
    url:'http://localhost:8000/persons'
}).then(function(reponse) {
    console.log(reponse);
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

}