console.log("Before Prepare food");

function prepareFood(callback) {
    setTimeout(()=>{
        console.log("Prepare Fodd");
        callback("Food is Ready");
    },20);
}

function mycallback(value){
    console.log("Value = ", value);
}
prepareFood(mycallback);


console.log("After Prepare food dinner is ready");
