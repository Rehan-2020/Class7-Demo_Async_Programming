console.log("Before Prepare food");
function prepareFood(){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Food");
            resolve("Food is Ready");
        },10); 
    });
    return promise
}
function prepareFrenchToast(){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is Ready");
        },20);
    });
    return promise
}
function prepareCoffee(callback){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },30);
    });
    return promise
}
/*
prepareFood(function(value){
    console.log("Food is Ready callback = ", value);
    prepareFrenchToast(function(value){
        console.log("French Toast is Ready callback = ", value);
        prepareCoffee(function(value){
            console.log("coffee is Ready callback = ", value);
        });
    })
});
*/

console.log("After Prepare food dinner is ready");