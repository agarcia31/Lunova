
import * as http from 'http'; 

// ------------ Create a class named Luna, with a constructor that just prints "Hello world"

export default class Lunova {
    server
    routes = {}

    constructor() {
        const server = http.createServer((req, res) => {
            // We have a request - let's handle it,
            console.log(req.url)
            // by looking up the route in our routes object
            this.routes[`${req.url}|${req.method}`].callback(req, res);
            // and calling the callback function
          });

        this.server = server;
    }

    storeRoute(path, callback, method) {
        this.routes[`${path}|${method}`] = {
            callback: callback,
            method: method
        };
    }

    get(path, callback) {
        this.storeRoute(path, callback, 'GET');
    }

    post(path, callback) {
        this.storeRoute(path, callback, 'POST');
    }
    
    patch(path, callback,) { 
        this.storeRoute(path, callback, 'PATCH');
    }
    
    put(path, callback) {
        this.storeRoute(path, callback, 'PUT');
    }

    delete(path, callback, req, res) {
        this.storeRoute(path, callback, 'DELETE');
    }

    listen(port, callback) {
        this.server.listen(port, '0.0.0.0', callback()); 
    }
}


  