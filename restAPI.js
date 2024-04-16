const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express()

const PORT = 8000 

// Routes
app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
        </ul>
    `
    res.send(html)
})

// REST api
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})

app.post('/api/users', (req, res) => {
    return res.json({status: 'pending'})
})

app.patch('/api/users/:id', (req, res) => {
    return res.json({status: 'pending'})
})

app.delete('/api/users/:id', (req, res) => {
    return res.json({status: 'pending'})
})

qpp.route('/api/users/:id')
.get(
    (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})
.post((req, res) => {
    return res.json({status: 'pending'})
})
.patch((req, res) => {
    return res.json({status: 'pending'})
})
.delete((req, res) => {
    return res.json({status: 'pending'})
})



app.listen(PORT, () => {
    console.log('Server started')
})




