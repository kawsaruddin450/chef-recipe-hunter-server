const express = require('express')
const app = express()
const port = process.env.PORT ||  3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Chef recipe hunter server is running on server: ${port}`)
})

