// Author: Hendre Leigh O. Sagabaen
var name = "Hendre";
var age = 21;
var isStudent = true;
const date = new Date;
function ageChecker() 
{
    if (isStudent) 
    {
        var studstat = ", and is a student"    
    }
    else {var studstat = ""}
    document.write("<br/> You are " + name + ", age " + age + studstat);
}
function calculateAge() 
{
    var birthyear = prompt("what is your birth year? ");
    var calculatedAge = date.getFullYear() - birthyear ;
    document.write("your age is: " + calculatedAge);
}
function temperatureChecker() 
{
    var temperature = prompt("Input the temperature in celsius:")
    if (temperature > 30) 
    {
        document.write("hot weather " + date.getDay()+"/" + date.getMonth() + "/" + date.getFullYear()+" "+ date.getHours()+":"+ date.getMinutes());
    }
    else
    {
        document.write("moderate weather " + date.getDay()+"/" + date.getMonth() + "/" + date.getFullYear()+" "+ date.getHours()+":"+ date.getMinutes());
    }
}
function greetUser() 
{
    alert("Good morning "+ name +", this is your totally self-aware program greeting you");
}