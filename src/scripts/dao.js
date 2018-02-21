import $ from "jquery";
import moment from 'moment';
/**
 * La classe Dao va contenir tous les appels AJAX vers l'API REST,
 * histoire de centraliser toutes les requêtes serveur au même endroit
 */
export class Dao {
    constructor() {
        this.url = "http://localhost:8000/persons";
    }

    getAll() {
        return $.ajax({
            url: this.url
        }).then(function(reponse) {
            for(let pers of reponse) {
                pers.birthdate = moment(pers.birthdate, 'YYYY-MM-DD');

            }
            return reponse;
            //La méthode Array.map() va appliquer une transformation 
            //sur chacune des valeurs du tableau sur laquelle on l'exécute
            // return reponse.map(function(pers) {
            //     pers.birthdate = moment(pers.birthdate, 'YYYY-MM-DD');
            //     return pers; 
            // });
        });
    }

    add(person) {
        return $.ajax({
            method: "POST",
            url: this.url,
            data: person
        }).then(function(reponse) {
            //On remplace la string birthdate de la person par un objet Date plus versatile
            reponse.birthdate = moment(reponse.birthdate, 'YYYY-MM-DD');
            return reponse;  
        });
    }
}