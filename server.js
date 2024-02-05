const express = require("express")
const logger = require("./middleware/logger")
const fs = require("fs")
const app = express()
const port = 8000

app.get("/", (req, res) => {
  fs.readFile('./homepage.html', 'utf-8', (err, data) => {
    err ? res.send(err) : res.send(data)
  })
})
app.get("/contact", (req, res) => {
  fs.readFile('./contact.html', 'utf-8', (err, data) => {
    err ? res.send(err) : res.send(data)
  })
})
app.get("/service", (req, res) => {
  fs.readFile('./service.html','utf-8', (err, data) => {
    err ? res.send(err) : res.send(data)
  })
})

app.listen(port, (err) => err ? console.log(err) : console.log(`app listning on ${port}`));