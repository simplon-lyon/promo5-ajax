import $ from 'jquery';

$.ajax({
    url:'http://localhost:8000/persons'
}).then(function(reponse) {
    console.log(reponse);
}).catch(function(error) {
    console.error(error);  
});