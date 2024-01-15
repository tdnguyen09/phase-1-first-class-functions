//function spy (){
//   return 'hello';
//}

function receivesAFunction(spy){
    console.log (spy());
}
receivesAFunction(function () {
    return 'this is a callback';
});

function returnsANamedFunction(){
    return function aNamedFunction(){
        console.log('Hello');
    }
}
let fn = returnsANamedFunction()

function returnsAnAnonymousFunction(){
    return function (){
        return `Hello`
    }
}
fn = returnsAnAnonymousFunction()