function findItemsOver20 (itemList) {
    let result = [];
    for( let i=0; i<itemList.length; i++){
        if(itemList[i].qty > 20) {
            result.push(itemList[i]); //push the value into the arry//
        }
    }
    return result;
}