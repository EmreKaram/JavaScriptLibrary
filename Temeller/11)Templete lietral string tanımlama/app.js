const name ="Ümit saki vatansever"
const departmant = "Bilişim";
const sallary = 10000;


// const a="isim : "+name+"\n"+"Departman:"+departmant+"\n"+"Maas:"+sallary

const a=`İsim:${name} \n Deparman:${departmant}\n Maas: ${sallary} `

// const html ="<ul>"+
//             "<li>"+name+"</li>"+
//             "<li>"+departmant+"</li>"+
//             "<li>"+sallary+"</li>"+
//             "</ul>"


function b()
{
    return "merhaba";
}

   
const htmll= `
    
        <ol type='1' start ='50'>
        <li>${name}</li>
        <li>${departmant}</li>
        <li>${sallary}</li>
        <li>${10/4}</li>
        <li>${b()}</li>
        </ol>
        

`

        document.body.innerHTML=htmll
        document.head.title="test"

console.log()
//Tırnak  işaretini için alt+gr basılı tut 2 kere virgül tuşuna bas 
