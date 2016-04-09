
## Node.js 1
##### JavaScript for the server

Node.js is a fast, scalable server-side language that uses a JavaScript engine, and is very web-focused.

It allows you to build web apps asynchronously (code runs at the same time, uses callbacks).

**Prerequisites:**

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
Node.js has a very powerful module system, along with a great package manager, `npm` (node package manager), that is widely used all over the web.


#### Installing Modules
You install modules from the terminal, using the `npm` command. You can look at [npm's website](npmjs.com) to search for packages. **Remember:** quite a few modules are built-in, so you don't need to install them.

To install the package `express` (very useful web framework):

    npm install express

This will create a special folder called `node_modules` and install `express` in it. All modules are installed in the special `node_modules` folder that is created in the directory of the current project.

But what if you wanted to install a module so it would be accessible everywhere on your computer? You could use the `-g` option. For example, this will install `yeoman` (project generator):

    npm install -g yeoman

There is a lot more to learn about npm, such as the `package.json` file, creating packages, etc. that will be covered in a later section.

#### Loading Modules
To load a module, you use the `require()` function, like this:

    var myModule = require('someGreatModule');

Node will load the module `someGreatModule` into the variable `myModule` so you can access all it's methods and properties.

*"Creating Modules" will be described in another section.*

### Basic I/O