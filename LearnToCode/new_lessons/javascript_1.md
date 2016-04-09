
##JavaScript 1
JavaScript is the foundation for web based development. It adds interactivity to your website and is usually partnered with HTML, and CSS. JavaScript can be used with HTML and CSS to make a fully functional webpage. In this tutorial I will go over the basics of the JavaScript language.

**Prerequisites:**

- Advanced Computer Usage 1
- Programming Concepts 1


----------

### Printing Data

To print some data to the browser console, use the `console.log()` function, like this:

    console.log('A message');

You can also print other types of data, which you will learn about in the next section.


###Variables
In JavaScript multiple variables can be created and set at the same time. Also if a variable isn't explicitly set to a certain value, it's value is  `undefined`. Variables are created using the `var` key word, with a comma in between variables if you are defining multiple at once. There is also some criteria for variable names


 - The variable name has to be unique, so It can't be a reserved javascript key word, a data type, or another variable.
 - Also the variable has to be made up of alphanumeric characters, dollar signs, and underscores but it can't start with a number.
 - Variables are case sensitive too, so if you use an upper case letter, you can't try to get the same variable with a lower case instead.
 

####Data types

The data that variables can be set to come in different types. 

####Strings

Strings are created by typing your data in between two quotes. You can also access certain characters by typing

	//creating string
    var myString = 'some text here';
    //accessing nth character in string
    var nthCharacter = myString[n];
    

######**Note:** Both double quotes and single quotes work, but they don't intermix. Programmers usually use single quotes for JavaScript, and double quotes for HTML.

####Numbers
Number are what they sound like, numbers. They can not be made any letters or other characters besides 0-9

    var x = 6;
    x = 7.5

######**Note:** Numbers can also have decimal points in them, so 1.5 would be as valid a number as 1 

#####Booleans

Booleans can only be two values, `true` or `false`. If you convert them to numbers false equals 0 and true equals 1.

    var canLogin = true;

######**Note:** Booleans are not strings and can only be `true` or `false` not anything else

####Arrays
Arrays are like lists, that can hold things in its cells. Arrays are created by typing your data in between square brackets, with a comma between cells

	//creating an array
	var myArray = ['element1', 'element2', 'etc'];
    //accessing the 1st element
    myArray[0]; //Remember that indices start at 0

Arrays can contain any data (strings, numbers, booleans, objects, even other arrays). You can intermix data types in arrays. For example:

    var arr = [5, 'string', {object: true}, false];

 
####Objects

Objects use a key and a value to store and access information.

    //creating an object
    var userData = {
	    name: 'joe',
	    premiumMember: true,
	    age: 23,
	    services: ['apps', 'internet', 'support']
    }
The words on the left side that are not in quotes are the keys, and the data (string, num, bool, arr) on the right side are the values.

You can access the data like this:

    object.key // gets the value

So if we wanted to see if Joe was a premium member, we could write:

    console.log(userData.premiumMember) //would print true

####**Note:** There are other data types in lower level languages, such as C/C++. They will be described in "Programming Concepts 3: Low-level Languages".

####Defining variables
####Example
We are going to create a variable called myVariable and set it to 1, then .

###Operators
####Mathematical operators 



####Assignment operators



####Comparison operators

