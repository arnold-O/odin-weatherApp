const api =  {
    key:'19e3572f962d0b559ca4cbbbfdac548c',
    base:"https://api.openweathermap.org/data/2.5/"
}




const Search  =document.querySelector('.search')
const Btn  =document.querySelector('.btn')


Btn.addEventListener('click', getInput)



function getInput(e){
    e.preventDefault()
    if(event.click ==="click"){
        getData(Search.value)
    }
}