This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Introduction
Translink App is a web app that pulls live bus locations from Translink API and displays them on the map. The bus locations are updated every 2 second.

## Dependencies
The project was developed using these open modules: 
* [React Map GL](https://github.com/uber/react-map-gl)
```
npm install --save react-map-gl
```
* [React Redux](https://github.com/reactjs/react-redux)
```
npm install --save react-redux
```
* [React SuperAgent](https://visionmedia.github.io/superagent/)
```
npm install superagent
```

Please make sure you install these modules before running the app.

## Running the app
```
cd /path/to/translink-app
npm start # or yarn start
```
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

## How to use
You can search for active buses on a specific route by searching a specific route number (e.g. 084, 099, 008, 004, etc.). Alternatively, you can type "all" to display all the buses that are currently active. 

