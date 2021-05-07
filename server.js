const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

  app.get("/test", (req, res) => {
    res.json({ message: "Test works" })
  })

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.