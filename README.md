# Simple REST – Development Challenge

So happy you’re interested in working at [Weld](https://www.weld.io)!

## The Task

Use a JavaScript framework of your choice and build a GUI similar to this prototype: [https://www.weld.io/namechanger/view](www.weld.io/namechanger/view)

Perform REST requests against the server `https://simple-rest-weld.herokuapp.com`, e.g. `https://simple-rest-weld.herokuapp.com/user/1`

## Server API

The server is answering any GET, POST, PUT, DELETE requests with 20X responses:

	app.get('*', (req, res) => res.json({name: 'Donald Duck'}))
	app.post('*', (req, res) => res.sendStatus(201))
	app.put('*', (req, res) => res.sendStatus(204))
	app.delete('*', (req, res) => res.sendStatus(204))
