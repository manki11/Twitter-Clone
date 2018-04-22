# Twitter-Clone #

#### A MERN Stack based CRUD web app ####

Twitter-Clone contains a timeline, with the ability to login/ signup. Logged in users can Create, Read, Update, Delete tweets based on authorization. The front end of the app is built using React while the backend is based on Node JS and Mongo DB.


#### Steps to run project ####

Make sure npm, nodejs, mongodb are installed on your machine.

Start the mongo DB process in background:
```bash
mongod
```
Clone the repository on your local machine.

There will be 2 sub-folders in the main folder:
1. Client - Front end React App
2. Server - Backend NodeJs API

Start with installing the react dependencies:
```bash
cd client/
npm install
```

Then install all the node dependencies:
```bash
cd server/
npm install
```

##### Running the project

###### Running the server:
```bash
node index.js
```

###### Running the client:
```npm
npm start
```

The app will start on http://localhost:3000/
