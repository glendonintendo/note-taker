# Note Taker <!-- omit in toc -->
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation, Usage, and Tests](#installation-usage-and-tests)
- [Demo](#demo)
- [Submission Requirements](#submission-requirements)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Grading Criteria](#grading-criteria)
## Description
The note taker app is a full-stack application for note taking. Users can add and delete notes, and any changes to notes will be stored on the server.
## Technologies Used
- express: express is a back-end js framework run off of node. Express gives the application the ability to create and run a server.
- jest: jest is a js testing framework. This application uses jest to test the http request helper functions.
- uuid: uuid is a node package that can be used to parse and create unique ids. It is used to create unique ids for note objects.
- fs: fs is a native node package that allows for reading and writing files. It is used in this app to write data to our json data file.
- path: path is a native node package that allows for easy file traversal.
## Installation, Usage, and Tests
Run `npm install` while in the root directory of the application to install the required dependencies for the application.

To run on your local machine, enter `npm start` from the command line to start the server. Then navigate to [localhost:3001](http://localhost:3001/) in your browser. The api is available through the `/api/notes` endpoint. You can also view a live version of the application on [Heroku](https://young-sierra-98103.herokuapp.com/).

To execute the full suite of tests, from the root directory enter `npm run test`.
## Demo
The live version of this application can be found [here](https://young-sierra-98103.herokuapp.com/). Hosted by Heroku.
## Submission Requirements
### User Story
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
### Acceptance Criteria
```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
### Grading Criteria
#### Technical Acceptance Criteria - 40% <!-- omit in toc -->
- [x] Presented with a landing page with a link to a notes page on open
- [x] Presented with a notes page when notes page link is clicked
  - [x] Left column has existing notes
  - [x] Right column has room to enter new notes title and text
- [x] Save icon appears when note form has title and text
- [x] Save button allows note to move from form into left column with existing notes
- [x] Existing note appears in right column when clicked from left column
- [x] Fields in note form are cleared when Write icon is clicked
- [x] Front end must connect to an Express.js back end
- [x] Back end must store notes with unique IDs in a JSON file
- [x] Deployed to Heroku
#### Deployment - 35% <!-- omit in toc -->
- [x] Deployed at live URL
- [x] Loads with no errors
- [x] GitHub URL submitted
- [x] GitHub repository contains application code
#### Application Quality - 11% <!-- omit in toc -->
- [x] Console is free of errors
#### Repository Quality - 13% <!-- omit in toc -->
- [x] Has a unique name
- [x] Follows best practices for file structure and naming conventions
- [x] Follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Contains multiple descriptive commit messages
- [x] Contains quality README file with description screenshot, and link to deployed application
#### Bonus - +10 Points <!-- omit in toc -->
- [x] Allows users to delete notes