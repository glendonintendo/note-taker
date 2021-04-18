# Note Taker <!-- omit in toc -->
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation, Usage, and Tests](#installation-usage-and-tests)
- [Submission Requirements](#submission-requirements)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Grading Criteria](#grading-criteria)
## Description

## Technologies Used

## Installation, Usage, and Tests

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
- [ ] Presented with a landing page with a link to a notes page on open
- [ ] Presented with a notes page when notes page link is clicked
  - [ ] Left column has existing notes
  - [ ] Right column has room to enter new notes title and text
- [ ] Save icon appears when note form has title and text
- [ ] Save button allows note to move from form into left column with existing notes
- [ ] Existing note appears in right column when clicked from left column
- [ ] Fields in note form are cleared when Write icon is clicked
- [ ] Front end must connect to an Express.js back end
- [ ] Back end must store notes with unique IDs in a JSON file
- [ ] Deployed to Heroku
#### Deployment - 35% <!-- omit in toc -->
- [ ] Deployed at live URL
- [ ] Loads with no errors
- [ ] GitHub URL submitted
- [ ] GitHub repository contains application code
#### Application Quality - 11% <!-- omit in toc -->
- [ ] Console is free of errors
#### Repository Quality - 13% <!-- omit in toc -->
- [ ] Has a unique name
- [ ] Follows best practices for file structure and naming conventions
- [ ] Follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [ ] Contains multiple descriptive commit messages
- [ ] Contains quality README file with description screenshot, and link to deployed application
#### Bonus - +10 Points <!-- omit in toc -->
- [ ] Allows users to delete notes