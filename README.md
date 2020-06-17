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

1. Change express endpoint from 3000 to 9000 - Inside the API directory, go to bin/www and change the port number on line 15 from 3000 to 9000.
