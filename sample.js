var foo = "bar";
// Compile time: 
//Hey global scope, I have a declaration 
//for a variable called foo . 

// global scope registers foo


//run time :
//Hey global scope, I have a LHS reference for variable called foo.
//Global scope : yes i have


function bar() {
 var foo = "baz";
 
 //Run time (after line 45 is executed) : Hey bar scope, I have a LHS reference for a variable called foo.
// Global scope : yes i do. 
 
 function baz (foo) {
    foo = "bam";
	// run time : (after line 26)
	//hey scope of baz, I have a LHS reference for a variable called foo
	// baz scope : yes, I do - assignment of bam occurs
	bam = "yay";
	// run time 
	// hey scope of baz, I have a LHS reference for a variable called 
	//bam
	// baz scope : no
	// bar scope :no
	//global scope : yes, I just created it - assignment is done

 }
 baz(); // javascript doesent require you to pass a value
 //Run time : Hey scope of bar, do you have a RHS reference for a variable called baz
 // Bar scope : Yes, it is a function
}

// Compile time: 
//Hey global scope, I have a function declaration 
// called bar . 

// global scope registers bar
// Hey bar scope, I have a variable called foo 
//bar scope registers foo

// hey scope of bar, i have a function declaration called baz
// bar scope registers baz
//hey scope of baz, I have a declaration for a variable called foo
// baz registers foo


bar(); 
//Run time : Hey global scope, I have a RHS reference for a variable called bar.
// Global scope : yes i do. It's a function 
foo;
//Hey global scope, i have a RHS reference for a variable foo
//Global scope : yes
bam;
//Hey global scope, i have a RHS reference for a variable bam
//Global scope : yes
baz();
//Hey global scope, i have a RHS reference for a variable baz
//Global scope : no - results in 

(// for RHS reference, the reference will not be created 