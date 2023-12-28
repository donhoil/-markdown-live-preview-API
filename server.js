const express = require('express');
const bodyParser = require('body-parser');
const markDownConverter = require('./services/markDownConverter')
const cors = require('cors');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/", function(req, res, next) {
    if(typeof req.body.content == 'undefined' || req.body.content == null) {
        res.json(["error", "No data found"]);
    } else {
        text = req.body.content;
        html = markDownConverter.convert(text)
        res.json([html]);
    }
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
  });
