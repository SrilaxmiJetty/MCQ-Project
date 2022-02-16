function check(){
    // document.write("Never give up!");
    var c=0;
    var q1=document.quiz.Question1.value;
    var q2=document.quiz.Question2.value;
    var q3=document.quiz.Question3.value;
    var q4=document.quiz.Question4.value;
    var q5=document.quiz.Question5.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');

    if (q1 == "Telugu"){c++}
    if(q2 == "Delhi"){c++}
    if(q3 == "Chapathi"){c++}
    if(q4 == "Hockey"){c++}
    if(q5 == "Peacock"){c++}

    // document.write(c);

    quiz.style.display="None";
//     if(c>=4) {
//         result.textContent= `Final result is Yes-${c}`
//     }
//     else 
//     {
//         if(c<=3 && c>=2) 
//         {
//                     result.textContent= `Final result is Maybe- ${c}`
//     }else
       
//         result.textContent= `Final result is No-${c}`
    
// }
if(c>=4) {
    result.textContent=`Your result is ${c}. Final Verdict: Yes-(4 or 5)`
}else{
    if(c<=3 && c>=2) {
        result.textContent=`Your result is ${c}. Final Verdict: Maybe- (2 or 3)`
}else{
    result.textContent=`Your result is ${c}. Final Verdict: No-(1 or 0)`
}
}

    // result.textContent `${c}`;
}