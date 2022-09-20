import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {name, flags, capital, population, area, region} = props.country
    return (
        <div className='country'>
            <img className='img' src={flags.png} alt="" />
            <h1>Country name: {name.common}</h1>
            <h2>Capital: {capital}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;