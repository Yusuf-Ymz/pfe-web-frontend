const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(dirname + '/dist/pfe-web-frontend'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(dirname + '/dist/pfe-web-frontend/index.html'));
});

app.listen(process.env.PORT || 4200);