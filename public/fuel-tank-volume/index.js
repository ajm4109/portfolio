const itm=0.0254;
const ctm=100;

function fuelVolume(diameter,length,dip){

    diameter=document.getElementsByName("diameterIn")[0].value;
    length=document.getElementsByName("lengthIn")[0].value;
    dip=document.getElementsByName("fuelLvLIn")[0].value;

    diameter=diameter*itm
    length=length*itm
    dip=dip/ctm
    r=diameter/2

    /* Length*(Radius^2*ACOS((Radius-Depth)/Radius)-(Radius-Depth)*SQRT(2*Radius*Depth-Depth^2))*1000 */

    let fuelvolumeRemaining_m3 = 
    length*(r**2*Math.acos((r-dip)/r)-(r-dip)*Math.sqrt(2*r*dip-dip**2))
    fuelvolumeRemaining_m3=fuelvolumeRemaining_m3.toFixed(2)

    document.getElementsByClassName("answerText")[0].innerHTML=`According to your measurements, there is ${fuelvolumeRemaining_m3}m³ remaining.`
}

const subutton = document.getElementById('submitButton')
subutton.addEventListener('click',fuelVolume);

const inputNameArr = Array.from(document.getElementsByClassName('formInputs'))
inputNameArr.forEach(item => item.addEventListener('keyup', e =>
    e.code ==='Enter' ? subutton.click() : null))

// console.log(inputNameArr)