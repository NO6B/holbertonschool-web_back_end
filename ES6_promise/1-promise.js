export default function getFullResponseFromAPI(success){
return new Promise((successCallback, failureCallback) => {
    if (success){
        successCallback({
        status: 200,
        body: 'Success'
        });
    }else{
        failureCallback(throwError("The fake API is not working currently"))
    }
});
}
