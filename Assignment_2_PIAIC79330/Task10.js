var stored_password = "PIAIC";
var a= prompt("Enter your password");
if (a=== ""){
    alert("Please enter your password");
     location.reload();
}else if (a===stored_password){
    alert("Correct! The password you entered matches the original password");
}else {
    alert("Incorrect password");

}