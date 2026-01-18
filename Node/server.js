// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors()); // Autoriser le frontend (Vue) à communiquer avec ce serveur


app.get('/', (req, res) => { // Une route simple (exemple)
  res.json({ message: 'Salut depuis le Backend Node.js !' });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur backend tourne sur http://localhost:${port}`);
});