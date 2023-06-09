require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

const itemRoutes = require('./routes/item');
const customerRoutes = require('./routes/customer');
const saleRoutes = require('./routes/sales');

const app = express();

// app.use(express.static(path.join(__dirname, '../public/uploads')));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    cookie: { maxAge: 3000 },
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(expressLayouts);

app.use('/items', itemRoutes);
app.use('/customers', customerRoutes);
app.use('/sales', saleRoutes);

app.use((req, res) => {
  res.status(404).send('<h1> Page Not Found </h1>');
});

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
