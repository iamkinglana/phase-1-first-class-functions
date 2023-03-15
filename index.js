//receivers a function
function receivesAFunction (callback){

    callback();
}
//return named function
function returnsANamedFunction (){

    function named (){
    console.log("Foo")
    }
    return named
}

//returns anonymus function
function returnsAnAnonymousFunction(){
    return()=>{console.log("Anonymus")}
    
}

