const api =  {
    key:'19e3572f962d0b559ca4cbbbfdac548c',
    base:"https://api.openweathermap.org/data/2.5/"
}



const Search = document.querySelector('.search')
const Btn = document.querySelector('.btn')
const ErrorC = document.querySelector('.error')
const Place = document.querySelector('.currentPlace')
const Temperature = document.querySelector('.temClass')
const Weather = document.querySelector('.weatherClass')
const TempMax = document.querySelector('.temp-max')
const TempMin = document.querySelector('.temp-min')
const Daydate = document.querySelector('.days-report')

// day functionality

const days = new Date()

let day = days.getDay()
let month = days.getMonth()
let year = days.getFullYear()
console.log('day--->', day , month, year)

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log()

Btn.addEventListener('click', getInput)



function getInput(e){
    e.preventDefault()
    if(e.type == "click"){
        ErrorC.textContent=""
        getData(Search.value)

       
    }
}

async function getData(){
  const data =  await fetch(`${api.base}weather?q=${Search.value}&units=metric&appid=${api.key}`)
     const response = await data.json()
     console.log(response)
    if(response.cod == "404"){
       ErrorC.textContent="please enter a valid city"
       
        Search.value = ""
    }else{
        Place.innerHTML = `${response.name}, ${response.sys.country}`
        Temperature.innerHTML =`${response.main.temp}`
        Weather.innerHTML =`${response.weather[0].main}`
        TempMax.innerHTML =`${response.main.temp_max}`
        TempMin.innerHTML= `${response.main.temp_min}`
        Daydate.innerHTML= `${weekDays[day]}, ${months[day]} ${year}`

        Search.value = ""
        
    }

 

}


