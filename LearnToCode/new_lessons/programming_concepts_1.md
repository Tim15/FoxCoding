
##Programming concepts

In this tutorial I will go over some basic programming concepts that are commonly used in different coding languages. For examples we will be using Python. Please note that syntax and key words are not the same for every language 
[//]: # (Add link for python to our python tutorial)
###Variables

Variables are useful for storing and changing data. For example if we create a variable named `myVariable` and set it to 1, then we can repeatedly come back to it and use the value. Also usually variables can change, so if we wanted `myVariable`  to double itself, we could then change it to 2. In python this would look like:

    myVariable = 1

This sets our variable called `myVariable` to 1. But if you wanted to change `myVariable`s value you could reassign it, like this:

    myVariable = 2

### Comments
Comments are very useful when you are editing confusing code, and want to document what you have done, or you and a partner are both working on a project, and you want them to be able to look at the comments and know what you have done. For example if you wanted to say what each line of your code does, you would use comments.

    #This sets myVariable to 1
    myVariable = 1
    #This sets myVariable to 2
    myVariable = 2
    
   The comments will not be run when you execute your code, so only the people accessing your code will be able to see the comments.

###Functions

Functions  are useful, if you have large pieces of code, that would be hard to integrate into your code multiple times.  For example if you wanted to add a number that the user picked to `myVariable` then you might write a function.

####Creating Functions

Functions 

    #This sets myVariable to 1
    myVariable = 1
    #This sets myVariable to 2
    myVariable = 2
    
    def myFunction():

#### Arguments

Functions can also take arguments, which are similar to variables, but are specific to the function and only take user input. This will be perfect for getting the users input for the number we are going to add to `myVariable`.  

####Return

####Calling functions


	#This sets myVariable to 1
    myVariable = 1
    #This sets myVariable to 2
    myVariable = 2
    
    def myFunction(number):
	    return myVariable + number
	
	myFunction(3) #this would return 5
	
    