var a= 4;
if(++a===5){
    alert("given condition for variable a is true");
 } 
//  alert is dispalyed
var b = 82;
if(b++===83){
    alert("given condition for variable b is true");
} 
// alert is not dispalyed
var c =12;
if(c++===13){
    alert("given condition for variable c is true");
}
// alert is not dispalyed
if (c===13){
    alert("condition 2 is true");
}
// alert is displayed
if(++c<14){
    alert("condition 3 is true");
}
// alert is not dispalyed
if (c===14){
    alert("condition 4 is true");
}
// alert is dispalyed
var material_cost=20000;
var labor_cost=2000;
var total_cost= material_cost+labor_cost;
if(total_cost===labor_cost+material_cost){
    alert("The cost equals"); 
}
// alert is dispalyed
if(true){
    alert("true");
}
// alert is displayed
if(false){
    alert("False");
}
// alert is not dispalyed
if("car"<"cat"){
    alert("car is smaller than cat");
}
// alert is dispalyed