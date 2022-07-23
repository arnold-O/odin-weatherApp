const api =  {
    key:'19e3572f962d0b559ca4cbbbfdac548c',
    base:"https://api.openweathermap.org/data/2.5/"
}




const Search = document.querySelector('.search')
const Btn = document.querySelector('.btn')
const ErrorC = document.querySelector('.error')


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
    }

 

}


