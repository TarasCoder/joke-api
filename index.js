import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const masterKey = "7VGP1DN-6EWM0XJ-N2EGRYV-Z1PR8TM";

app.use(bodyParser.urlencoded({ extended: true }));

//1. GET a random joke

app.get("/random", (req, res) => {
  let randomNr = Math.floor(Math.random() * jokes.length);
  res.send(jokes[randomNr]);
});

//2. GET a specific joke

app.get("/jokes/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let findJoke = jokes.find((joke) => joke.id === id);
  res.json(findJoke);
});

//3. GET a jokes by filtering on the joke type

app.get("/filter", (req, res) => {
  let typeOfJoke = req.query.type;
  let filteredOptions = jokes.filter((joke) => joke.jokeType === typeOfJoke);
  res.json(filteredOptions);
});

//4. POST a new joke

app.post("/jokes", (req, res) => {
  let newJoke = {
    id: jokes.length + 1,
    jokeText: req.body.jokeText,
    jokeType: req.body.jokeType,
  };
  jokes.push(newJoke);
  res.send(newJoke);
});

//5. PUT a joke

app.put("/jokes/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let updatedJoke = {
    id: id,
    jokeText: req.body.jokeText,
    jokeType: req.body.jokeType,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = updatedJoke;
  res.json(updatedJoke);
});

//6. PATCH a joke

app.patch("/jokes/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let existingJoke = jokes.find((joke) => joke.id === id);
  let updatedJoke = {
    id: id,
    jokeText: req.body.jokeText || existingJoke.jokeText,
    jokeType: req.body.jokeType || existingJoke.jokeType,
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = updatedJoke;
  res.json(updatedJoke);
});

//7. DELETE Specific joke

app.delete("/jokes/:id", (req, res) => {
  let id = parseInt(req.params.id);
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  if (id >= -1 && id <= jokes.length) {
    jokes.splice(searchIndex, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

//8. DELETE All jokes

app.delete("/all", (req, res) => {
  if (req.query.key === masterKey) {
    jokes = [];
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}...`);
});

let jokes = [
  {
    id: 1,
    jokeText:
      "Why don't scientists trust atoms? Because they make up everything!",
    jokeType: "Pun",
  },
  {
    id: 2,
    jokeText:
      "Why did the computer keep its drink on top of the monitor? It wanted a higher refresh rate!",
    jokeType: "Tech Joke",
  },
  {
    id: 3,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
    jokeType: "One-liner",
  },
  {
    id: 4,
    jokeText: "I only know 25 letters of the alphabet. I don't know y.",
    jokeType: "Dad Joke",
  },
  {
    id: 5,
    jokeText:
      "Why did the blonde stare at the can of orange juice for hours? Because it said 'concentrate'!",
    jokeType: "Blonde Joke",
  },
  {
    id: 6,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Pun",
  },
  {
    id: 7,
    jokeText: "Why did the bicycle fall over? It was two-tired!",
    jokeType: "Pun",
  },
  {
    id: 8,
    jokeText: "What did one hat say to another? Stay here, I'm going on ahead!",
    jokeType: "One-liner",
  },
  {
    id: 9,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "One-liner",
  },
  {
    id: 10,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Dad Joke",
  },
  {
    id: 11,
    jokeText: "Why don't skeletons fight each other? They don't have the guts!",
    jokeType: "Pun",
  },
  {
    id: 12,
    jokeText: "Why did the coffee file a police report? It got mugged!",
    jokeType: "One-liner",
  },
  {
    id: 13,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Pun",
  },
  {
    id: 14,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "One-liner",
  },
  {
    id: 15,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "Dad Joke",
  },
  {
    id: 16,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "One-liner",
  },
  {
    id: 17,
    jokeText:
      "Why did the math book look sad? Because it had too many problems.",
    jokeType: "One-liner",
  },
  {
    id: 18,
    jokeText:
      "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
    jokeType: "Dad Joke",
  },
  {
    id: 19,
    jokeText:
      "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    jokeType: "One-liner",
  },
  {
    id: 20,
    jokeText: "I only know three 5-letter words: sugar, louse, and spouse.",
    jokeType: "Dad Joke",
  },
  {
    id: 21,
    jokeText:
      "Why was the belt arrested? Because it was holding up a pair of pants!",
    jokeType: "Pun",
  },
  {
    id: 22,
    jokeText: "What do you call a fish wearing a crown? A kingfish!",
    jokeType: "Pun",
  },
  {
    id: 23,
    jokeText: "Why did the chicken join a band? Because it had the drumsticks!",
    jokeType: "One-liner",
  },
  {
    id: 24,
    jokeText: "I used to be a baker because I kneaded dough.",
    jokeType: "Dad Joke",
  },
  {
    id: 25,
    jokeText:
      "Why don't scientists trust atoms? Because they make up everything!",
    jokeType: "Pun",
  },
  {
    id: 26,
    jokeText:
      "What did one plate say to another plate? Tonight, dinner's on me!",
    jokeType: "One-liner",
  },
  {
    id: 27,
    jokeText:
      "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
    jokeType: "One-liner",
  },
  {
    id: 28,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "One-liner",
  },
  {
    id: 29,
    jokeText: "How does a penguin build its house? Igloos it together!",
    jokeType: "Pun",
  },
  {
    id: 30,
    jokeText:
      "What did one wall say to the other wall? 'I'll meet you at the corner.'",
    jokeType: "One-liner",
  },
  {
    id: 31,
    jokeText: "Why did the bicycle fall over? It was two-tired!",
    jokeType: "Pun",
  },
  {
    id: 32,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Dad Joke",
  },
  {
    id: 33,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Pun",
  },
  {
    id: 34,
    jokeText:
      "Why did the math book look sad? Because it had too many problems.",
    jokeType: "One-liner",
  },
  {
    id: 35,
    jokeText: "I used to play piano by ear, but now I use my hands.",
    jokeType: "Dad Joke",
  },
  {
    id: 36,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "One-liner",
  },
  {
    id: 37,
    jokeText: "Why did the coffee file a police report? It got mugged!",
    jokeType: "One-liner",
  },
  {
    id: 38,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Pun",
  },
  {
    id: 39,
    jokeText: "What did one hat say to another? Stay here, I'm going on ahead!",
    jokeType: "One-liner",
  },
  {
    id: 40,
    jokeText: "I only know 25 letters of the alphabet. I don't know y.",
    jokeType: "Dad Joke",
  },
  {
    id: 41,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
    jokeType: "One-liner",
  },
  {
    id: 42,
    jokeText:
      "What did one plate say to another plate? Tonight, dinner's on me!",
    jokeType: "One-liner",
  },
  {
    id: 43,
    jokeText:
      "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
    jokeType: "One-liner",
  },
  {
    id: 44,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "One-liner",
  },
  {
    id: 45,
    jokeText: "How does a penguin build its house? Igloos it together!",
    jokeType: "Pun",
  },
  {
    id: 46,
    jokeText:
      "What did one wall say to the other wall? 'I'll meet you at the corner.'",
    jokeType: "One-liner",
  },
  {
    id: 47,
    jokeText: "Why did the bicycle fall over? It was two-tired!",
    jokeType: "Pun",
  },
  {
    id: 48,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Dad Joke",
  },
  {
    id: 49,
    jokeText:
      "Why don't scientists trust atoms? Because they make up everything!",
    jokeType: "Pun",
  },
  {
    id: 50,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "One-liner",
  },
];
