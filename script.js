
function myfun1(){
    // console.log(event.key);
        if(event.key==='Enter')
    {
        myfun();
    }
}
 async function myfun(){
    let name1=document.querySelector('.cityname');
let name2=document.querySelector('.humidvalue');
let name3=document.querySelector('.windvalue');
let name4=document.querySelector('.citytemp');
let name5=document.querySelector('.images');
// console.log(name2.innerHTML);
// console.log(name3.innerHTML);
    let inp=document.querySelector('.inputfield input').value;
    let apikey='1b1eadfe5262aae671f04a2eb692d6fd';
    let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${apikey}&units=metric`;
    name1.innerHTML=capitalizeFirstLetter(inp);
    const response=await fetch(apiurl);
    let data=await response.json();
    console.log(data);
    // console.log(data.main.temp);
    name4.innerHTML=`${Math.floor(data.main.temp)}°<span>C</span>`;
    name2.innerHTML=`${Math.floor(data.main.humidity)}%`;
    name3.innerHTML=`${Math.floor(data.wind.speed)} km/h`;
    console.log(data.weather[0].main);
    if(data.weather[0].main==='Haze'){
   name5.innerHTML=`<img src="clouds.png" alt="">`
    }
    else if(data.weather[0].main==='Clear'){
        name5.innerHTML=`<img src="clear.png" alt="">`
    }
    else if(data.weather[0].main==='Rain'){
        name5.innerHTML=`<img src="rain.png" alt="">`
    }
    else if(data.weather[0].main==='Mist'){
        name5.innerHTML=`<img src="mist.png" alt="">`
    }
    else if(data.weather[0].main==='Drizzle'){
        name5.innerHTML=`<img src="drizzle.png" alt="">`
    }
    // console.log(data.main.temp);
    // console.log(data.main.humidity);
    // console.log(data.wind.speed);
}
function capitalizeFirstLetter(str){
    return  str.substring(0, 1).toUpperCase() + str.substring(1);
}