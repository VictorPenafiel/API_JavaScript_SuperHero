const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;

app.use("/bootstrap", express.static(__dirname + '/node_modules/bootstrap/dist'));

app.listen(port, () => console.log(`Server is running on port ${port}`));