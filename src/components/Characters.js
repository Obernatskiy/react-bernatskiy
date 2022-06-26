import React from 'react';

function Characters(props) {
    let {id, name, status, species, gender, image} = props;
    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
}

export default Characters;