
function sum(a,b,fn){
    console.log(a);
    console.log(b);
    fn();
    return () => {
        console.log('This is a closure function');
    }
}


sum(1,2,()=>{console.log('This is a callback function')});
sum(1,2,()=>{console.log('This is a callback function')})();


