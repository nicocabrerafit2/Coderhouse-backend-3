import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hello from docker");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server on http://localhost:" + PORT);
});
