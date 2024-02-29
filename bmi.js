var niv=document.getElementById('v1')
var div=document.getElementById('v2')
niv.style.display='none';
var display=0;
var rotate=document.getElementById('rotate');
 var feed=document.getElementById('bhonk');
var food=document.getElementById('bol');
function convert(){
    if (display==0){
        div.style.display='block';
        niv.style.display='none';
        display=1;
    }
else{
    niv.style.display='block'
    div.style.display='none'
    display=0;
}
}




function calculateBMI(weight,height){
    var height1 =parseFloat(document.getElementById('foot').value);
    var height2 =parseFloat(document.getElementById('inches').value);
    var weight =parseFloat(document.getElementById('weight').value);
    height=((height1*12)+height2)/39.37;
const bmi1=weight/(height*height);
output.innerHTML=bmi1.toFixed(2);
    

 var w1=parseFloat(document.getElementById('weights').value);
    var m1 =parseFloat(document.getElementById('meter').value);
    const bmi2=w1/(m1*m1);
    outputs.innerHTML=bmi2.toFixed(2)
if(  bmi2<16){
rotate.style.transform='rotate(5deg)'
 feed.innerHTML="Severe Thinness";
}
if(  bmi2>17.5 &&   bmi2>16){
rotate.style.transform='rotate(25deg)';
feed.innerHTML="Moderate Thinness";

}
if(  bmi2>18.5&& bmi2>17.5){
rotate.style.transform='rotate(50deg)';
feed.innerHTML="Mild Thinness";
}
if(bmi2>25&&  bmi2>18.5){
rotate.style.transform='rotate(90deg)';
feed.innerHTML="Normal";
}
if(  bmi2>30&&  bmi2>25){
rotate.style.transform='rotate(110deg)';
feed.innerHTML="Overweight";

}
if(  bmi2>35&&  bmi2>30){
rotate.style.transform='rotate(140deg)';
feed.innerHTML="Obese class 1";
}

if(  bmi2>40&&  bmi2>35){
rotate.style.transform='rotate(160deg)';
feed.innerHTML="Obese class 2";}
if(  bmi2>40){
rotate.style.transform='rotate(180deg)'
feed.innerHTML="Obese class 3";
};


if(bmi1  >18.5&&bmi1  >17.5){
rotate.style.transform='rotate(50deg)';
  food.innerHTML="Mild Thinness";
}
if(bmi1  >25&&bmi1  >18.5){
rotate.style.transform='rotate(90deg)';
  food.innerHTML="Normal";
}
if(bmi1  >30&&bmi1  >25){
rotate.style.transform='rotate(110deg)';
  food.innerHTML="Overweight";

}
if(bmi1  >35&&bmi1  >30){
rotate.style.transform='rotate(140deg)';
  food.innerHTML="Obese class 1";
}

if(bmi1  >40&&bmi1  >35){
rotate.style.transform='rotate(160deg)';
  food.innerHTML="Obese class 2";}
if(bmi1  >40){
rotate.style.transform='rotate(180deg)'
  food.innerHTML="Obese class 3";
}
};
