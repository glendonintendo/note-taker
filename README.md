# Note Taker <!-- omit in toc -->

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation, Usage, and Tests](#installation-usage-and-tests)
- [Demo](#demo)

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
