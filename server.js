require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('Hello login!')
  })
  app.get('/twitter', (req, res) => {
    res.send('Hello twitter!')
  })
  app.get('/facebook', (req, res) => {
    res.send('Hello facebook!')
  })
  app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        title: "Why did the scarecrow win an award?",
        content: "Because he was outstanding in his field!"
    },
    {
        id: 2,
        title: "Why don't scientists trust atoms?",
        content: "Because they make up everything!"
    },
    {
        id: 3,
        title: "What do you call fake spaghetti?",
        content: "An impasta!"
    },
    {
        id: 4,
        title: "Why did the bicycle fall over?",
        content: "Because it was two-tired!"
    },
    {
        id: 5,
        title: "Did you hear about the claustrophobic astronaut?",
        content: "He needed space!"
    }
    ];
    res.send(jokes)
  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
