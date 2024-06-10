const express = require("express");
const app = express();

let value = "true"; // Initial value

app.get("/", (req, res) => {
  res.send(value);
});

app.get("/set/:val", (req, res) => {
  const newVal = req.params.val.toLowerCase();
  if (newVal === "true" || newVal === "false") {
    value = newVal;
    res.send(`Value set to ${value}`);
  } else {
    res.send("Invalid value. Use 'true' or 'false'.");
  }
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
