let Kisi 
const programmer ={
    name : "Ümit Vatansever",
    age:26,
    email:"umit.vatansever@bilgeadam.com",
    lang:["Python","c#","Javasciprt"],
    adress:{
        city:"İstanbul",
        street: "13"
    },

    Work:function(){
        console.log("Programcı çalışıyor.........");
    }
}

Kisi =  programmer;


Kisi= programmer.email // c3 alışık olduğumuz kullanım ..
Kisi = programmer["email"];
Kisi= programmer.lang
Kisi=programmer.adress.city;
programmer.Work()
const programmers  =[
{name:"Simge" ,age:25},
{name:"Ahmet",age:45}
]

Kisi= programmers[1].name;

console.log(Kisi)









