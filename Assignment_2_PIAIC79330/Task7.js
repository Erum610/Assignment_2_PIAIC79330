var a = prompt("Enter your first number");
a = parseFloat(a);
var b = prompt("Enter your second number");
b = parseFloat(b);
var c = prompt("What operation do you want to perform?(+,-,/,*,%)" );

if(c== "+"){
document.write("Sum  of your numbers is " + (a+b));
}else if (c==="-"){
    document.write("Difference of your numbers is " + (a-b));
}else if (c==="*"){
    document.write("Product of your numbers is " + (a*b));
}else if (c==="/"){
    document.write("Division of your numbers is " + (a/b));
}else if (c==="%"){
    document.write("Modulus of your numbers is " + (a%b));

}