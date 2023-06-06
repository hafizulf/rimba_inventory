require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const itemRoutes = require('./routes/item');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(expressLayouts);

app.use('/items', itemRoutes);

app.use((req, res) => {
  res.status(404).send('<h1> Page Not Found </h1>');
});

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
