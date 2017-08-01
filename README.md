# Ionic DreamHouse

This is a sample movie-fetching app created with Node.js, Ionic3 and Angular4. It has a Firebase backend and CRUD capabilities.

## Installation Instructions

Follow these instructions to install the app and run it:

1. **Make sure you have the latest version of Cordova and Ionic:**
    ```
    npm install -g ionic cordova
    ```

1. Clone the repository:
    ```
    git clone https://github.com/Ph3n0m3n0n/bidview
    ```

1. Navigate to the `bidview` directory :
    ```
    cd bidview
    ```

1. Install the dependencies
    ```
    npm install
    ```
  
1. Run the app in the browser
    ```
    ionic serve --lab
    ```

## Using REST Services

Follow these instructions to run it with the REST data services:

1. Replace all references to `property-service-mock` and `broker-service-mock` with `property-service` and `broker-service`
 
1. Install the Node.js implementation of the REST services (see [this repository](https://github.com/dreamhouseapp/dreamhouse-rest-services) for instructions), and run the Node server.
 
1. Adjust the `SERVER_URL` in `providers/config.ts`. The default is http://localhost:5000.

1. Run the app in the browser
    ```
    ionic serve
    ```