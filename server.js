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
//Home page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./"));
});

//Notes page
app.get("/notes", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//GET saved notes
app.get("/api/notes", function (req, res) {
	fs.readFile("./db/db.json", "utf8", (err, data) => {
		if (err) {
			throw err;
		}
		res.json(JSON.parse(data));
	});
});
//Add a new note
app.post("/api/notes", function (req, res) {
	if (req.body.title && req.body.text) {
		const noteObject = req.body;

		fs.readFile("./db/db.json", "utf8", (err, data) => {
			if (err) {
				throw err;
			}

			const noteArray = JSON.parse(data);
			noteObject.id = noteArray.length + 1;
			noteArray.push(noteObject);

			fs.writeFile("./db/db.json", JSON.stringify(noteArray), (err, data) => {
				if (err) {
					throw err;
				}
			});
			res.json(JSON.parse(data));
		});
	}
});

//Delete a note
app.delete("/api/notes/:id", function (req, res) {
	const id = req.params.id;

	fs.readFile("./db/db.json", "utf8", (err, data) => {
		if (err) {
			throw err;
		}

		const noteArray = JSON.parse(data);

		const newNoteArray = noteArray.filter((item) => {
			return item.id != id;
		});

		fs.writeFile("./db/db.json", JSON.stringify(newNoteArray), (err, data) => {
			if (err) {
				throw err;
			}
		});
		res.json(JSON.parse(data));
	});
});
//Go to home page
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});
