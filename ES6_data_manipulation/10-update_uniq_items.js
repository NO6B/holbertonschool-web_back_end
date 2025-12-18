export default function groceriesList(array){
    if (!(array instanceof Map)){
    throw new Error("Cannot process");
}
    array.forEach((value, key)=> {
        array.set(key, 100);
    });
}
