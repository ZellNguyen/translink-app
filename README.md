This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Introduction
Translink App is a web app that pulls live bus locations from Translink API and displays them on the map. The bus locations are updated every 2 minutes (Note that Translink only refreshes their data every 2.5 minutes).

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

Please make sure these modules are installed before you run the app.

## Running the app
```
cd /path/to/translink-app
npm start # or yarn start
```
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

## How to use
You can search for active buses on a specific route by searching for a specific route number (e.g. 084, 099, 008, 004, etc.).

Alternatively, you can type "all" to display all the buses that are currently active. 

## Trouble Shoot
* _ERROR: NOT FOUND_

This happens when you search for an invalid route number or a route number that is currently inactive. 

* _Database connection error_

There may be a case when the app exceeds the restricted amout of requests per day (1000 requests) and result in a 403 HTTP response. In that case, you can either wait until the next day or register a new API key for the app. 

### Register a new API key 
Go to [Translink Open API](https://developer.translink.ca/). Register and you will receive a new API key.

Copy the API key provided. Open _.env_ file in the _translink-app_ folder. Replace the existing API key:
```
REACT_APP_TRANSLINK=XXXXXXXXXX
```
with your API key.

Restart the app.
