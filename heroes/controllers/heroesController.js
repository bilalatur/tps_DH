const express = require("express");
const fs = require("fs");
const app = express()
let heroes = JSON.parse(fs.readFileSync(__dirname + "/heroes.json"));

let heroesController = {
    lista: function(req,res) {
        res.send(heroes);
    },
    detalle: function(req,res) {
        let heroe = heroes.find(h => h.id == req.params.id);
	    if (heroe == undefined) { // Cdo uso undifined puedo usar directamente if(heroe) como true.
		res.send("El heroe buscado no existe") // Si NO se encuentra se envía el mensaje de no encontrado
	    } else {
		res.send("Hola mi nombre es " + heroe.nombre + " y soy " + heroe.profesion); // Si se encuentra al héroe se envía el nombre y su profesión
	}
    },
    bio: function(req,res) {
		let heroe = heroes.find(h => h.id == req.params.id);
		if (!heroe){
			res.send("No encontramos un héroe para mostrate su biografía");
		} else {
			if (req.params.ok == "ok"){
				res.send("Hola, mi nombre es " + heroe.nombre + " y mi reseña es: " + heroe.resenia);
			} else {
			res.send("Mi nombre es " + heroe.nombre + " y lamento que no quieras saber más de mi :(");
			}
		}
	}
};

module.exports = heroesController;