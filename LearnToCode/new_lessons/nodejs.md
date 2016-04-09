## Node.js 1
##### JavaScript for the server

Node.js is a fast, scalable server-side language that uses a JavaScript engine, and is very web-focused.

It allows you to build web apps asynchronously (code runs at the same time, uses callbacks).

Prerequisites:

- Programming Concepts 1 & 2
- JavaScript 1

### Installation

Go to [the node website](nodejs.org/en/download) and download the "Stable" build for your platform. Make sure you add it to your PATH (environment variable) so you can run it from the terminal.

### Your first program

Node.js programs are just regular JS files on your system that are run by the `node	` interpreter.

You may have seen this program in Intro to Javascript:

    console.log('Hello world!');

You can do the same in Node. Just save the file as `hello.js` and run `node hello.js` on the terminal in the same directory. The `node` interpreter will run the program passed as the second argument, in this case `hello.js`, and print out `Hello world!` in the terminal.

### Basic Web Interaction

This may seem like a big jump from printing out `Hello world!`, but it is actually quite simple.

We will show you the code, then explain it in detail.

    var http = require('http');
    var server = http.createServer(function(request, response) {
	    request.send('Hello world!');
	}
	server.listen(80);
	console.log('Server listening on port 80');

Let's look at it line by line:

1. `var http = require('http');` This is using the built in `require` function to load the built in module `http` and store that module in a variable we can access. More about this in the next section
2.  `var server = http.createServer(function(request, response) {` This is creating a server and assigning it to the variable server. The callback is called every time the server gets a request with the variables `request` and `response`.
3.  `request.send('Hello world!');` This is using the `send()` function to send the string `'Hello world!'` to the client
4. `server.listen(80);` So far, we have just been writing the function that will be called when we get a request. But now we start the server by `listen()`ing for requests on port 80

### Modules


### Basic I/O