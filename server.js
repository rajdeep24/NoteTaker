//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
//Express Configurations
const app = express();

//Define a PORT
const PORT = process.env.PORT || 3001;
//Middle Ware (optional)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Listener
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
//Routes
app.get("/", function (req, res) {
	res.json(path.join(__dirname, "public/index.html"));
});

//Home page

//Notes page

//GET saved notes

//Add a new note

//Delete a note

//Go to home page
