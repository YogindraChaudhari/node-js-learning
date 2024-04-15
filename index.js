// const http = require('http')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Hello from home page')
})

app.get('/about', (req, res) => {
    return res.send('Hello from about page ' + 'welcome ' + req.query.name)
})

// const myserver = http.createServer(app)
// myserver.listen(8000, () => console.log('server started'))

app.listen(8000, (() => {console.log('express server started')}))

