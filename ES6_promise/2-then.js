export default function handleResponseFromAPI(promise){
return new Promise((successCallback, failureCallback) => {
    if (promise){
        console.log("Got a response from the API")
        successCallback({
        status: 200,
        body: 'success'
        });
    }else{
        console.log("Got a response from the API")
        failureCallback(newError("Error"))
    }
});
}
