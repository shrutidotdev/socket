import express from 'express';

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(PORT, () => {
    console.log(`Starting the server at ${PORT}`)
})