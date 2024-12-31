const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));