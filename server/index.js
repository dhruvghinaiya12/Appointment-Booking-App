const express = require('express');
const cors = require("cors");
const session = require("express-session");  
const passport = require("./config/Passport")
const db = require('./config/db');
const router = require('./routes');

require("dotenv").config();

const port = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

app.use(passport.initialize());
app.use(passport.session());


app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    db();
});
