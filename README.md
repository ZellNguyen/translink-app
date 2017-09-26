This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Introduction
Translink App is a web app that pulls live bus locations from Translink API and displays them on the map. The bus locations are updated every 2 minutes (Note that Translink only refreshes their data every 2.5 minutes).

## Dependencies
The project was developed using these open modules: 

### [React Map GL](https://github.com/uber/react-map-gl)
```
npm install --save react-map-gl
```
### [React Redux](https://github.com/reactjs/react-redux)
```
npm install --save react-redux
```
### [React SuperAgent](https://visionmedia.github.io/superagent/)
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

![alt text](eg1.jpg?raw=true)

Alternatively, you can type "all" to display all the buses that are currently active. 

![alt text](eg2.jpg?raw=true)

You can also hover on the bus icon to see the vehicle number.

## Troubleshoot

### Error: Not found

This happens when you search for an invalid route number or a route number that is currently inactive. Please make sure your search is valid.

### Connection Error

Translink API sometimes responds with an empty res.body object. In that case, the app throws a connection error. Just simply refresh the page or try a new search.

### 403 HTTP Response

There may be a case when the app exceeds the restricted amout of requests per day (1000 requests) and result in a 403 HTTP response. In that case, you can either wait until the next day or register a new API key for the app. 

### Register a new API key 
Go to [Translink Open API](https://developer.translink.ca/). Register and you will receive a new API key.

Copy the API key provided. Open _.env_ file in the _translink-app_ folder. Replace the existing API key with your new key:
```
REACT_APP_TRANSLINK=YOUR_NEW_KEY
```

Restart the app.


## Questions 

### What new technologies did you learn to complete this challenge?
* **React-map-gl:** It was a bit challenging at the beginning to integrate the react-map-gl into the app because its documentation is quite poorly written. Some important components like _Marker_ is not even mentioned in the documentation so I had to spend a while to figure out how to add markers into react-map-gl.
* **React-redux:**  No doubt, it is an amazing library for stage management. I have never used it before but it was very helpful to know it.
* **Translink API:** Translink only refreshes their data every 2.5 minutes. Therefore, I decided to update the live locations with the same frequency. There is a bug when pulling data from Translink API: the response body cannot be parsed into valid JSON file when requesting with specific vehicle numbers, e.g. http://api.translink.ca/rttiapi/v1/buses/7196?apikey=[APIKey].

### Was there anything you found specifically challenging or time consuming?
Getting used to react-redux at the beginning was challenging. It took me a couple hours to fully understand its documentation and how to use it appropriately in my app. However, once I got familiar with it, it became very easy and fast to work with. It helps create a simple but very pretty pattern that lets me speed up the state/data management process. 


