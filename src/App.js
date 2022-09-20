import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}







// function LoadCountries(){
//   const [countries, setCountries] = useState([])

//   useEffect( () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))


//   }, [])
//   return (
//     <div className='countries'>
//       <h1>Visiting Every Countries Of The World !!!!</h1>
      
//       {
//         countries.map(country=> <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div className='country'>
//       <h2>Name: {props.name}</h2>
//       <h3>Population:{props.population}</h3>
//       <img src={props.flags} alt="" />
//     </div>
//   )
// }

export default App;
