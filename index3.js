console.log("Before Prepare food");

function prepareFood(data){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }
    
        },500); 
    });
    
    return promise
}
function prepareFrenchToast(){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is Ready");
        },500);
    });
    return promise
}
function prepareCoffee(){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },500);
    });
    return promise
}

async function startProcess(){
    try {
        let foodValue = await prepareFood(2);
        console.log("Food ", foodValue);
        let frenchToastValue = await prepareFrenchToast();
        console.log("Toast ", frenchToastValue);
        let coffeeValue = await prepareCofee();
        console.log("Coffee ", coffeeValue);
    }
    catch(error) {
        console.log("Error in catch = ", error);
    }
}
startProcess();

console.log("After Prepare food dinner is ready");