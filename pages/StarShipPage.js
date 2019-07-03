import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipPage.css'

const StarShip = (props) => {
    const starship = props.getStarShip(props.match.params.idx);

    return(
        <div>
            {starship ?
                <div className='StarshipPage-starship'>
                <span>Name:</span>
                <span>{starship.name}</span>
                <span>Model:</span>
                <span>{starship.model}</span>
                <Link to='/'>Return</Link>
                </div>
                :
            <h3>Loading...</h3>    
            }
        </div>
    )
};

export defaut StarShipPage;