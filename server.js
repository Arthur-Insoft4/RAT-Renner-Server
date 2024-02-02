const express = require('express')
const app = express()
const port = 6969

app.use(express.static('pages'))


app.get('/', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`Servidor RAT Renner operando no port ${port}`)
})