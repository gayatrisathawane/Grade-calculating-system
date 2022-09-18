function calculate(){
     var a = parseInt(document.getElementById('b1').value);
     var b = parseInt(document.getElementById('b2').value);
     var c = parseInt(document.getElementById('b3').value);
     var d = parseInt(document.getElementById('b4').value);
     var e = parseInt(document.getElementById('b5').value);
     var f = parseInt(document.getElementById('b6').value);
     if (a>100|| b>100 || c>100 || d>100 || e>100 || f>100 ){
        alert("please enter the correct value");
     }
     else
     {
         var obtain = a+b+c+d+e+f;
         document.getElementById("obtain").innerHTML=obtain;

         var per=obtain/600*100;
         document.getElementById("%").innerHTML=per;

         if(a>40 && b>40 && c>40 && d>40 && e>40 && f>40)
         {
            document.getElementById("remarks").innerHTML="<span style='color:green'>PASS</span>"

         }
         else
         document.getElementById("remarks").innerHTML="<span style='color:red'>FAIL</span>"

     }
     if (per>=80){
        document.getElementById("grade").textContent="A";
     }
     else if (per>=70){
        document.getElementById("grade").textContent="B";
     }
     else if (per>=50){
        document.getElementById("grade").textContent="C";
     }
     else if (per>=40){
        document.getElementById("grade").textContent="D";
     }
     else if (per>=0){
        document.getElementById("grade").textContent="fail";
     }

}

