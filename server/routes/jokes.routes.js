const Joke = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", Joke.getAll);
    app.get("/api/jokes/:_id", Joke.getOne);
    app.post("/api/jokes", Joke.create);
    app.put("/api/jokes/:_id", Joke.update);
    app.delete("/app/jokes/:_id", Joke.delete);
}