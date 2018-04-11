const express = require('express');
const app = express();

app.get('*', (req, res) => res.json({name:'Donald Duck'}));
app.post('*', (req, res) => res.sendStatus(201));
app.put('*', (req, res) => res.sendStatus(204));
app.delete('*', (req, res) => res.sendStatus(204));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
