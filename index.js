const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('*', (req, res) => res.json({name:'Donald Duck'}));
app.post('*', (req, res) => res.sendStatus(201));
app.put('*', (req, res) => res.sendStatus(204));
app.delete('*', (req, res) => res.sendStatus(204));

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port ' + process.env.PORT || 3000));
