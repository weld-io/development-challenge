Dummy REST server to play ball with.
Answering any GET, POST, PUT, DELETE request with 20X responses.

```
app.get('*', (req, res) => res.json({name:'Donald Duck'}));
app.post('*', (req, res) => res.sendStatus(201));
app.put('*', (req, res) => res.sendStatus(204));
app.delete('*', (req, res) => res.sendStatus(204));
```
