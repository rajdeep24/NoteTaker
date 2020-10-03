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
///////////////////////HTML ROUTES///////////////////////
//Home page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Notes page
app.get("/notes", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/notes.html"));
});
///////////////////////API ROUTES///////////////////////
//GET saved notes ( * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.)
app.get("/api/notes", (req, res) => {
	fs.readFile("./db/db.json", "utf8", (err, data) => {
		if (err) throw err;
		res.json(JSON.parse(data));
	});
});

//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
//Add a new note

//Delete a note

//Go to home page
