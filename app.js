const express = require('express')
const app = new express()

const PORT = process.env.PORT

app.get('/hello', (req, res) => {
    res.send(`Hello from server at port ${PORT}`)
})

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))