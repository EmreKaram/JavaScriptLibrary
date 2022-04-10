let value ;

const numbers =[43,45,87,564,54,5121,54,45,54,5151,5151]
// const numbers = new Array(414,54,4,54,544,54,4,54,54,54)



const langs =["Python","Java","C++","javasript"]


const a = ["Merhaba",11,null,undefined,3.14]






value = numbers[0]
value = numbers[2]

value=[numbers.length-1]

//Herhangi bir index değeri değiştirme 

numbers [0]=1000


value=numbers.indexOf(5151);


//Arrayin sonuna değer eklemek isterseniz. =>push
numbers.push(2000)
value=numbers

//Başına değer ekleme 
numbers.unshift(3000)
value=numbers


//Sonunda değer atma pop 

numbers.pop();
value =numbers;


//Başından değer atma 

numbers.shift()
value=numbers;




numbers.splice(0,3)
value=numbers;



numbers.reverse ();
value=numbers;


value=numbers.sort();


//Küçükten büyüğe sırala
value = numbers.sort(function (x,y){

    return x-y;
});


//Büyükten küçüğe sırala
value = numbers.sort(function (x,y){
    return y-x;
})




console.log( value)


