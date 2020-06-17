# react-express-app
ReactJS (FrontEnd) + Express (Backend) Application


## REACT - client

npx create-react-app client
cd client
npm start

## EXPRESS - api

npx express-generator api
cd api
npm install
DEBUG=api:* npm start

## Steps

...after installation

1. Change express endpoint from 3000 to 9000 - Inside the API directory, go to bin/www and change the port number on line 15 from 3000 to 9000.
2. On api/routes, create a testAPI.js file and paste this code:
```
    var express = require(“express”);
    var router = express.Router();

    router.get(“/”, function(req, res, next) {
        res.send(“API is working properly”);
    });

    module.exports = router;
```
3. On the api/app.js file, insert a new route on line 24:

`app.use("/testAPI", testAPIRouter);`

4. Ok, you are “telling” express to use this route but, you still have to require it. Let’s do that on line 9:

`var testAPIRouter = require("./routes/testAPI");`

5. restart express for the new route to work.