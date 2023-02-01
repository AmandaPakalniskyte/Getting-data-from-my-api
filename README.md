# GETTING DATA FROM AN API

This project is intended to show how to get data about movies (articles (name of the article and link to the article) from different newspapers) from an API using axios.

# Requirements

1. Download node from https://nodejs.org/en/download/


2. Open your project on Visual Studio Code. Open the Terminal and write this in the command line:

    **npm init**

The command npm init creates a package.json


3.  Write this command in the Terminal

    **npm install axios**

It installs the axios package as a dependency in your project. There will be a new package-lock.json file and a node_modules folder in the project folder.


4. Run the following command in your project’s root directory to install nodemon as a dev dependency.  Nodemon is an excellent local development tool that automatically restarts the Node application whenever it detects a file change in the directory:

    **npm install -D nodemon**


5. Modify "scripts" in your package.json, like this:

"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  
6. Include this scipt tag in tour html file before the head tag 

    **<script src="node_modules/axios/dist/axios.min.js"></script>**
  

7. Run the following command to start your Node application:

    **npm run dev**


8. Install "Live server" extension. In html file click the right mouse button and select "Open with live server".
In your JavaScript file comment this line **const axios = require("axios");**. If you want to see the data in the browser. If you do not comment this file, you will see the data in the Terminal.
