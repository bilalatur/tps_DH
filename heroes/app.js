// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs");

// Ejecución de Express
const app = express()

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/controllers/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req,res) => {
	let titulo = "Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!."
	res.send(titulo);
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req,res) => {
	res.send(heroes);
});


// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find(h => h.id == req.params.id);
	if (heroe == undefined) { // Cdo uso undifined puedo usar directamente if(heroe) como true.
		res.send("El heroe buscado no existe") // Si NO se encuentra se envía el mensaje de no encontrado
	} else {
		res.send("Hola mi nombre es " + heroe.nombre + " y soy " + heroe.profesion); // Si se encuentra al héroe se envía el nombre y su profesión
	}
});


// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:id/bio/:ok?', (req,res) => {
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
});

// Ruta... ¿Pára qué sirve esto? Maneja las rutas que no están en uso (404) --> sería como el break
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, estamos en problemas!');
});