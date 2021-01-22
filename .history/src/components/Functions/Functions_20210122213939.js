export const handleCountryName = (e) =>{
    if(e.target.name==='name'){
      if(e.target.value===''){
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(data => setCountries(data))
      }
      else{
        fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
        .then(response => response.json())
        .then(data => setCountries(data))
      }
    }
   
}