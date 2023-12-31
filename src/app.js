const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`Runnning Express Server on port - ${port}`)
})

const myRoutes = require('./routes/recipeRoutes')

app.use(express.json())

app.use('/', myRoutes);

