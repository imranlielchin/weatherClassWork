let form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let inp = document.querySelector('input');
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=f960bcba87999b57e43f2a3354fc3584`);
    let result = await response.json()

    
    
    document.querySelector('.div').innerHTML = `desk : ${result.weather[0].description} temp :${result.main.temp}`;

})

