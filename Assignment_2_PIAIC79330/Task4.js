

// Calculation for total marks
// supposed total marks for each subject = 100
// total 300
var physics_total_marks = prompt("Enter your total marks in physics", 100)
physics_total_marks=parseInt(physics_total_marks);
var chemistry_total_marks = prompt("Enter your total marks in chemistry", 100)
chemistry_total_marks=parseInt(chemistry_total_marks);
var english_total_marks = prompt("Enter your total marks in english", 100)
english_total_marks=parseInt(english_total_marks);
var totalmarks= physics_total_marks+chemistry_total_marks+english_total_marks;
document.write("Total Marks :  " + totalmarks + "<br>");

// calculation for obtained marks
// supposed marks for physics=80, chemistry= 80, for english=59
// total=219

var physics_obtained_marks = prompt("Enter your obtained marks in physics", 80);
physics_obtained_marks= parseInt(physics_obtained_marks);
var chemistry_obtained_marks = prompt("Enter your obtained marks in chemistry", 80);
chemistry_obtained_marks= parseInt(chemistry_obtained_marks);
var english_obtained_marks = prompt("Enter your obtained marks in english", 59);
english_obtained_marks= parseInt(english_obtained_marks);
var obatinedmarks= physics_obtained_marks+chemistry_obtained_marks+english_obtained_marks;
document.write("Marks Obtained :  " + obatinedmarks + "<br>");

// calculation for percentage
// 73%
var percentage = obatinedmarks/totalmarks*100;
document.write("Percentage : " + percentage + "%" + "<br>");

// conditions for grades and remarks
// grade obtained : A and obtained remarks : Good 
if(percentage>=80){
    document.write(" Grade: A-one " + "<br>");
    document.write("Remarks:  Excellent");
}else if (percentage>=70){
    document.write("Grade A " + "<br>");
    document.write ("Reamrks: Good")
}else if (percentage>=60){
    document.write("Grade: B " + "<br>" )
    document.write("Remarks: You need to improve");
}else if (percentage<60){
    document.write("Fail " + "<br>");
    document.write("Remarks: Sorry");

}
