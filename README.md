# NoteTaker

## Table of Contents

- [Description](#Description)
- [Tools_Used](#Tools_Used)
- [Links](#Links)
- [Application-Screen-Shots](#Application-Screen-Shots)
- [Credits](#Credits)

## Description

The NoteTaker application is simple to use web application that allows users to gather their thoughts and take notes using a simple UI. Specifically, NoteTaker allows users to write, save, and delete notes NoteTaker will allow users to view or delete previously saved notes.

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Tools Used

- HTML
- CSS
- JavaScript
- Bootstrap
- jQuery
- NPM express
- NPM nodemon

Below are links to the webpage and the github repository for my Work-Day-Scheduler application:

Github Pages URL: <https://rajdeep24.github.io/Work-Day-Scheduler/>

Github Repository: <https://github.com/rajdeep24/Work-Day-Scheduler>

## Usage

Below are is a screen shot of the Work-Day-Scheduler.

### Screenshots

![NoteTaker Home Page](./public/assets/images/hompage_screenshot.PNG)

## Credits

I would like to credit georgia tech's coding bootcamp and the support from my peers.

## Badges

![badmath](https://img.shields.io/website?down_color=yellow&down_message=Ofline&up_color=Blue&up_message=Online&url=https%3A%2F%2Fimg.shields.io%2Fwebsite%2FPROTOCOL%2FURLREST.svg.)

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

- The application frontend has already been created, it's your job to build the backend and connect the two.

- The following HTML routes should be created:

  - GET `/notes` - Should return the `notes.html` file.

  - GET `*` - Should return the `index.html` file

- The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

- The following API routes should be created:

  - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.
