// 1. you need to write a function say, getUniqueProductCount which should return
// count of each Product(as an object) present in the given list of Products considering
// Product Name as Key.

// Sample Output for the given list will be :
// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

const list = [{
    name: "TV",
    quantity: 10,
    description: "television"
},{
    name: "AC",
    quantity: 5,
    description: "air conditioner"
},{
    name: "TV",
    quantity: 10,
    description: "television"
},{
    name: "AC",
    quantity: 5,
    description: "air conditioner"
},{
    name: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}];
function getUniqueProductCount(list){
    var N=list.length;
    var obj=new Object;//creating object
    var previous=1;
    for(var i=0; i<N; i++){//iteating over list of products
        if(obj[list[i].name]==null){//checking product in new obj
            obj[list[i].name]=previous;// adding product  
        }else{
            obj[list[i].name]=obj[list[i].name]+previous;//if existing product already then increase
        }
    } return obj;//return
    } var obj=getUniqueProductCount(list);
    console.log(obj);
    console.log("----------------------------------------------------------------");

    
//__________________________________________________________________________________________________________________________________________________ */

// 2. you need to write a function say, getUniquePrducts which should return an array
// of objects by grouping the products based on the name and summing up the quantity
// for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :
// [{
//     name: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     name: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     name: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]
function Check(newArray,prodct){
    var i=newArray.findIndex(ele=>ele.name==prodct.name);
    // console.log('i:', i)
    if (i==-1){
        newArray.push(prodct);
        // console.log('newArray:', newArray)
    } else {
        newArray[i].quantity=newArray[i].quantity+prodct.quantity;
    } return newArray;
    }
function getUniquePrducts(list){
    var array=new Array;
    // console.log('array:', array)
    var N=list.length;
    for (var i=0; i<N; i++){
        Check(array,list[i]);
    } console.log(array);
    console.log("----------------------------------------------------------------");
    } getUniquePrducts(list);
//__________________________________________________________________________________________________________________________________________________ */
