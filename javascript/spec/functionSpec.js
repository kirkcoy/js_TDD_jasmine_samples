// Create a function that returns a reversed array. For exmaple reverseArray([1,3,5]) should return [5,3,1]. reverseArray([1,8,4,2]) should return [2,4,8,1].
function reverseArray(arr){
    for(var i = 0; i < Math.floor(arr.length/2); i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

b = reverseArray([1,2]);
console.log('b is', b);

describe("reverseArray", function(){

    it("should return [5,3,1] when [1,3,5] is passed", function(){
        expect(reverseArray([1,3,5])).toEqual([5,3,1]);
    });

    it("should return [2,4,8,1] when [1,8,4,2] is passed", function(){
        expect(reverseArray([1,8,4,2])).toEqual([2,4,8,1]);
    });

})