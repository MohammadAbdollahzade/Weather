let citys = ['Tehran','Shiraz','Tabriz','Mashhad','Esfahan']

let citiesData ={ 
    Tehran: {city: 'Tehran', temp: 12 , weather: 'Sunny' , humidity: 23 , windSpeed: 32},
    Shiraz:{city: 'Shiraz', temp: 9 , weather: 'Windy' , humidity: 12 , windSpeed: 14},
    Tabriz:{city: 'Tabriz', temp: 1 , weather: 'Rainy' , humidity: 43 , windSpeed: 12},
    Mashhad:{city: 'Mashhad', temp: 16 , weather: 'Snowy' , humidity: 7 , windSpeed: 24},
    Esfahan:{city: 'Esfahan', temp: 23 , weather: 'Sunny' , humidity: 15 , windSpeed: 18},
}

let $ = document;

let combobox = $.querySelector('.select-city')
let boxSelect = $.querySelector('.box-select')

citys.forEach(function(item){
    let optionnew = $.createElement('option')
    optionnew.setAttribute('class','item')
    optionnew.innerHTML = item
    combobox.append(optionnew);

});

let mainCityDatas = citiesData[combobox.value]
console.log(mainCityDatas)
    $.querySelector('.city').innerHTML = mainCityDatas.city
    $.querySelector('.temp').innerHTML = mainCityDatas.temp
    $.querySelector('.weather').innerHTML = mainCityDatas.weather
    $.querySelector('.humidity').innerHTML = mainCityDatas.humidity
    $.querySelector('.wind-speed').innerHTML = mainCityDatas.windSpeed

combobox.addEventListener('change',()=>{
     mainCityDatas = citiesData[combobox.value]
    console.log(mainCityDatas)
        $.querySelector('.city').innerHTML = mainCityDatas.city
        $.querySelector('.temp').innerHTML = mainCityDatas.temp
        $.querySelector('.weather').innerHTML = mainCityDatas.weather
        $.querySelector('.humidity').innerHTML = mainCityDatas.humidity
        $.querySelector('.wind-speed').innerHTML = mainCityDatas.windSpeed
})

let iconArrow = $.createElement('i')
iconArrow.setAttribute('class','bi bi-caret-down')
boxSelect.append(iconArrow)
 let qty = 0;
boxSelect.addEventListener('click',()=>{
    if(qty % 2 == 0){
        iconArrow.setAttribute('class','bi bi-caret-down-fill') 
    }
    else{
        iconArrow.setAttribute('class','bi bi-caret-down')
    }
    qty++
})

