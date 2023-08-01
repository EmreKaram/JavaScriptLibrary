let value ;
 
const FirstName="Ahmet"
const LastName="Tas"
const Langs = "Java,Python,C++,C"

value= FirstName+LastName;
value=FirstName +" "+LastName


value = "Ümit Saki";
value +=" Vatansever"  //value = value +"vatansever"


value= FirstName.length;

value=FirstName.concat(" ",LastName," ","Test")
value= FirstName.toLowerCase();
value = FirstName.toUpperCase();
value= FirstName[0];
value = FirstName [3]
value = FirstName [2]
value =  FirstName[FirstName.length-1]

//index of 
value  = FirstName.indexOf("L")
value  = FirstName.indexOf("A")
value  = FirstName.indexOf("L") //İÇİNDE Aradığımız değer yok ise -1 döner
 

//char at 
value=FirstName.charAt(FirstName.length-1)


//split 
value = Langs.split(",")


//Replace 
value= Langs.replace("Python","Css")

value=Langs.includes("Java")
console.log(value)