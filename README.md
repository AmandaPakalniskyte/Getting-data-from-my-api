
The command npm init creates a package.json

npm init
then enter enter enter


The last command, npm install axios, installs the axios package as a dependency in your project. There will be a new package-lock.json file and a node_modules folder in the project folder.

npm install axios


Run the following command in your project’s root directory to install nodemon as a dev dependency.  Nodemon is an excellent local development tool that automatically restarts the Node application whenever it detects a file change in the directory:

npm install -D nodemon


Modify "scripts" in your package.json, like this:

"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },


  
  Paste this in your html file:
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <script src="node_modules/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <main>
        <h1>Welcome to My Website</h1>  
    </main>
     <script src="index.js"></script>
  </body>
</html>

Download

Run the following command to start your Node application:

  npm run dev