import actuator = require('express-actuator');
import express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Typescript World!");
  });
app.use(actuator());
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
