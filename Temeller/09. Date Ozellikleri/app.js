let deger ;
const simdi = new Date() ; // şuanki zaman getirilir. 

const date1 = new Date("9-19-1995 06:15:00");
const date2 = new Date("September 19 1996");
const date3 = new Date("9/19/1993")


deger= date1;
 

//Javascript'de ay gün bilgileri indexlenmeye 0 'dan başladığı için istediğini istediğiniz bilgiye ulaşmak adına bi,r arttırın 

deger= date1.getDate();
deger= date1.getDay();


deger= date1.getHours()
deger= date1.getMinutes()
deger= date1.getMilliseconds()

deger= date1.getMonth()+1;


date1.setMonth(7)
date1.setDate(15)
date1.setFullYear(1990)
date1.setHours(0)
date1.setMinutes(15)
date1.setSeconds(30)

deger=date1


console.log(deger)



///Oku 

// https://stackoverflow.com/questions/18624326/getmonth-in-javascript-gives-previous-month