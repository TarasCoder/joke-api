Jokes are generated by Chat GPT
This API is created while watching Angela Yu course

Using of API:

1. GET a random joke:
GET http://localhost:3000/random

2. GET a specific joke
GET http://localhost:3000/jokes/JOKE_ID

3. GET a jokes by filtering on the joke type
GET http://localhost:3000/filter/?type=TYPE_OF_JOKE

4. POST a new joke
POST http://localhost:3000/jokes
You need to pass "jokeText", and the "jokeType". The ID will be created automatically

5. PUT a joke
PUT http://localhost:3000/jokes/JOKE_ID
You need to pass "jokeText", and the "jokeType"

6. PATCH a joke
PATCH http://localhost:3000/jokes/JOKE_ID
You need to pass "jokeText", or the "jokeType" (the one you want to update)

7. DELETE Specific joke
DELETE http://localhost:3000/jokes/JOKE_ID

8. DELETE All jokes
DELETE http://localhost:3000/all
Here you need to provide an API key passed as "Query Params"

Please note the API key used in this program is fake!
