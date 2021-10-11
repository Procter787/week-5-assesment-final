const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// let id = 4;
// const items = [
//   {
//     id: 1,
//     name: 'banana'
//   },
//   {
//     id: 2,
//     name: 'phone'
//   },
//   {
//     id: 3,
//     name: 'glass'
//   }
// ]

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
                     "Cool shirt!",
                     "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

// app.get('/api/fortune', (req, res) => {
//   const fortunes = [
//     'you will have a good day',
//     'good food is in your future',
//     'that thing you want to happen will happen tomorrow',
//     'you will get a free surprise soon',
//     'try again'
//   ];

//   let randomIndex = Math.floor(Math.random() * fortunes.length);

//   res.status(200).send(fortunes[randomIndex])
// })

app.get('/api/items', (req, res) => {
  res.status(200).send(items)
});

app.post('/api/items', (req, res) => {
  const { item } = req.body;

  items.push({
    id,
    name: item
  });

  id++;

  res.sendStatus(200);
})

app.delete('/api/items/:itemId', (req, res) => {
  const tgtItemId = parseInt(req.params.itemId)

  const tgtIndex = items.findIndex(itemObj => itemObj.id === tgtItemId)

  items.splice(tgtIndex, 1);

  res.status(200).send(items);
})

app.listen(4000, () => console.log("Server running on 4000"));