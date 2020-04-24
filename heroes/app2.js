const express = require ("express");
const app = express()
let rutasMain = require ("./routes/main");
let rutasHeroes = require ("./routes/heroes");

app.use("/", rutasMain);
app.use("/heroes", rutasHeroes);

app.get('/creditos', (req,res) => {
	res.send('Página hecha por Bilal Atur en honor a los verdaderos heroes');
});

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, estamos en problemas!');
});


app.listen(3030, () => console.log('Server running in 3030 port'));