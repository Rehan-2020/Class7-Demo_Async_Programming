console.log("Before Prepare food");
function prepareFood(callback) {
    setTimeout(()=>{
        console.log("Prepare Food");
        callback("Food is Ready");
    },1000);
}
function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Prepare French Toast");
        callback("French Toast is Ready");
    },1000);
}
function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is Ready");
    },1000);
}
prepareFood(function(value){
    console.log("Food is Ready callback = ", value);
    prepareFrenchToast(function(value){
        console.log("French Toast is Ready callback = ", value);
        prepareCoffee(function(value){
            console.log("coffee is Ready callback = ", value);
        });
    })
});

console.log("After Prepare food dinner is ready");