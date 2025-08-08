
const unitContainer=document.querySelectorAll(".unitContainer");
const options=document.querySelectorAll(".unitItem");
const convert=document.querySelector(".btn");
const temp=document.getElementById("temp");
let object=[{
    container:document.querySelector(".containerFrom"),
    list:document.querySelector(".listFrom"),
    Value:""
},
{
    container:document.querySelector(".containerTo"),
    list:document.querySelector(".listTo"),
    Value:""
}]

unitContainer.forEach(unit=>{
    let selected=false;
    unit.addEventListener("click",()=>{
        let list;
        let arrow;
        if(unit.classList.contains("containerFrom")){
            list=document.querySelector(".listFrom");
            arrow=document.querySelector(".arrowFrom");
        } else if(unit.classList.contains("containerTo")){
            list=document.querySelector(".listTo");
            arrow=document.querySelector(".arrowTo");
        }
        if(!selected){
            list.style.display="block";
            arrow.textContent="arrow_drop_up";
            selected=true;
        } else{
            list.style.display="none";
            arrow.textContent="arrow_drop_down";
            selected=false;
        }
    })
}
)

options.forEach(option=>{
    option.addEventListener("click",()=>{
        if(option.classList.contains("from")){
            object[0].container.querySelector(".unitPlaceholerFrom").textContent=option.dataset.value;
            object[0].Value=option.dataset.value;
        } else{
            object[1].container.querySelector(".unitPlaceholerTo").textContent=option.dataset.value;
            object[1].Value=option.dataset.value;
        }
    })
})


const getValue=()=>{
    let from=object[0].Value;
    let to=object[1].Value;
    let temperature=Number(temp.value);
    if(from==to) document.querySelector(".msg").textContent=`${temperature} in ${from}`
    else if(from=="Fahrenheit" && to=="Celseus") document.querySelector(".msg").textContent=`${temperature} Fahrenheit is ${((temperature-32)*5/9).toFixed(2)} Celseus`;
    else if(from=="Fahrenheit" && to=="Kelvin") document.querySelector(".msg").textContent=`${temperature} Fahrenheit is ${((temperature-32)*5/9+273.15).toFixed(2)} Kelvin`;
    else if(from=="Celseus" && to=="Fahrenheit") document.querySelector(".msg").textContent=`${temperature} Celseus is ${((temperature*9/5)+32).toFixed(2)} Fahrenheit`;
    else if(from=="Celseus" && to=="Kelvin") document.querySelector(".msg").textContent=`${temperature} Celseus is ${(temperature+273.15).toFixed(2)} Kelvin`;
    else if(from=="Kelvin" && to=="Fahrenheit") document.querySelector(".msg").textContent=`${temperature} Kelvin is ${((temperature-273.15)*9/5+32).toFixed(2)} Fahrenheit`;
    else if(from=="Kelvin" && to=="Celseus") document.querySelector(".msg").textContent=`${temperature} Kelvin is ${(temperature - 273.15).toFixed(2)} Celseus`;


    document.querySelector(".msg").style.display="flex"
}

convert.addEventListener("click",()=>{
    if(temp.value!=="" && object[0].Value!=="" && object[1].Value!==""){
        getValue();
        unitContainer.forEach(unit=>{
            unit.click();
        })
    } 
    else{
        document.querySelector(".msg").innerHTML=`<span style="color: red;">Fill all 3 fields</span>`
        document.querySelector(".msg").style.display="flex"
    } 
})
