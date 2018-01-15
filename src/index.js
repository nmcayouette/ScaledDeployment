const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Home Page'))

app.get('/test', (req, res) => res.send('Test Page'))

app.listen(8888, () => console.log('Scaled Deployment: listening on port 8888'))