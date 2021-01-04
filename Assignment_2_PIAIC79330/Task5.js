var secret_number= Math.floor(Math.random() * 10)+1;
secret_number=parseInt(secret_number);
var guessed_number1= prompt("Enter your guessed number");
guessed_number= parseInt(guessed_number1);
if(guessed_number===secret_number){
    alert("Bingo! Correct answer");
}else if (guessed_number+1 === secret_number ){
    alert("Close enough to the correct answer");
}else {alert("Try again \n"  + "Actual Secret number is " + secret_number)};
