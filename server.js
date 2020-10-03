//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
//Express Configurations
const noteApp = express();

//Define a PORT
const PORT = process.env.PORT || 3001;
//Middle Ware (optional)
noteApp.use(express.urlencoded({ extended: true }));
noteApp.use(express.json());
noteApp.use(express.static(path.join(__dirname, "public")));

//Listener
noteApp.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});
///////////////////////HTML ROUTES///////////////////////
//Home page
noteApp.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Notes page
noteApp.get("/notes", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/notes.html"));
});
///////////////////////API ROUTES///////////////////////
//GET saved notes ( * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.)
noteApp.get("/api/notes", (req, res) => {
	fs.readFile("./db/db.json", "utf8", (err, data) => {
		if (err) throw err;
		res.json(JSON.parse(data));
	});
});

//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
//Add a new note
noteApp.post("/api/notes", (req, res) => {
	if (req.body.title && req.body.text) {
		const noteBody = req.body;

		fs.readFile("./db/db.json", "utf8", (err, data) => {
			if (err) throw err;

			const noteArray = JSON.parse(data);
			noteBody.id = noteArray.length + 1;
			noteArray.push(noteBody);

			fs.writeFile("./db/db.json", JSON.stringify(noteArray), (err, data) => {
				if (err) throw err;

				res.json(JSON.parse(data));
			});
		});
	}
});

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete.
//This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file,
//remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
//Delete a note
noteApp.delete("/api/notes/:id", function (req, res) {
	const id = req.params.id;

	//read the file
	fs.readFile("./db/db.json", "utf8", (err, data) => {
		if (err) {
			throw err;
		}
		//Parse the data and assign it a new value
		const noteArray = JSON.parse(data);

		//Filter through the IDs and return the IDS that don't match
		const filteredNoteArray = noteArray.filter((item) => {
			return item.id != id;
		});

		//Write the filteredNoteArray to the file
		fs.writeFile("./db/db.json", JSON.stringify(filteredNoteArray), (err, data) => {
			if (err) {
				throw err;
			}
		});
		res.json(JSON.parse(data));
	});
});
//Go to home page
