
//  task  1
var num1 = 3;
var num2 = 3;

if (num1==num2){
    console.log("BOOM" , num1 +'='+num1)
}else{
    console.log("TRY AGAIN!". num1 +'<>'+num1)
}

//  task  2
var x = 5;
var y = 6;

var z = x + y; 
console.log("task  2 result is ", x +'+'+y+'='+ z)

//  task  3
var x = 5;
var y = 6;

var z = x * y; 
console.log("task  3 result is ", x +'*'+y+'='+ z)

// task 4 
const dayOfweek = 4

 if (dayOfweek ===1){
    console.log("Good Week !");
 }else if (dayOfweek === 7){
    console.log("Happy weekend !");
 }else{
    console.log("Good Day !")
 }
//task 5 
let dayOFmonth = 4
let dayMonth = 
            (dayOFmonth == 1) ? "Good Month" : 
            (dayOFmonth >= 2  && dayOFmonth < 10 ) ? "Start Work" : 
            (dayOFmonth == 10)  ? "Get Salary" : 
            (dayOFmonth >= 11  && dayOFmonth < 20 ) ? "BE HAPPY" : 
            (dayOFmonth >= 20  && dayOFmonth <= 30 ) ? "The END" : 
            "BOOM BOOM"
console.log(dayMonth); 

//task 6

var name = 'suckot'

switch(name) {
    case 'purim':
        console.log("happy purim !");
      break;
    case 'passover':
        console.log("clean home !");
      break;
    case 'shavoout':
        console.log("eat milk !");
    case 'suckot':
        console.log("build sucka !");
    default:
        console.log("hagim negmeru !");
  }
  


//task 7
var player1_score  = 30
var player2_score  = 20 

var player1_name  = 'John'
var player2_name  = 'Smit'

if(player1_score > 0){
    if(player1_score < player2_score){
        console.log("the winner is :" ,player2_name +"="+player2_score)
    }else if (player1_score > player2_score){
        console.log("the winner is :" ,player1_name +"="+player1_score)
    }
}

//task 8
var oddNum =  8
if ((oddNum % 2) == 0){
    console.log("this ODD number!", oddNum)
}else{
    console.log("this EVEN number!", oddNum)
}


//task 9
 var x1 = 80
 var y2 = 60 

 if( (x1 >= 0) && (x1 <= 99) && (y2 >= 0 && y2 <= 99) )
 {
    if(x1 === y2){
        console.log("Numbers are the same!")
    }else if (x1 > y2){
        console.log("MAX Number is", x1)
    }else{
        console.log("MAX Number is", y2)
    }
 }

//task 10

var num = [2, 10, 9, 6, 12, 3,87]
var totalSum = 0
for(var i in num) {
    totalSum += num[i];
}
var numCnt = num.length
var average = totalSum / numCnt;
console.log("the Average of numbers  :", num, average)

//task 11
var nameRunner = 'Tomer' ; var ageRunner = '32' ; var distanceRunner = '23'

if ((ageRunner >= 30 && ageRunner <= 50) && (distanceRunner >= 30 && distanceRunner <= 50)) {
    console.log("You're in shape ! ", nameRunner,ageRunner,distanceRunner)
}else if ((ageRunner >= 30 && ageRunner <= 50) && (distanceRunner >= 10 && distanceRunner <= 50)) {
    console.log("you are in good shape", nameRunner,ageRunner,distanceRunner)
}else if ((ageRunner >= 30 && ageRunner <= 50) && (distanceRunner >= 0 && distanceRunner <= 10)) {
    console.log("you are Must improve !", nameRunner,ageRunner,distanceRunner)
}else if ((ageRunner >= 18 && ageRunner <= 30) && (distanceRunner >= 25 && distanceRunner <= 50)) {
    console.log("You're in shape ! and Yang", nameRunner,ageRunner,distanceRunner)
}else if ((ageRunner >= 18 && ageRunner <= 30) && (distanceRunner < 25)) {
    console.log("There is mor for improvement", nameRunner,ageRunner,distanceRunner)
}
//task 12
let hour = 6
let happyHour = 
    
            (hour >= 5  && hour <=11 ) ? "  Good Morning" : 
            (hour >= 12  && hour <= 17 ) ? "Good Afternoon BE HAPPY" : 
            (hour >= 18  && hour <= 23 ) ? "Good Evening  The END" : "Its NEW day"
            
console.log(happyHour); 






