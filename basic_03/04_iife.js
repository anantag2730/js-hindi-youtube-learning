// node basic_03/04_iife.js

// iife-> IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();// just like chai() imediatetely invoked to prevent global scope to pollute it 
// semicoln is must as js dont know where to stop there for imp to end explicitly 

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("anant");