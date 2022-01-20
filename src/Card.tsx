import React from 'react';

interface Card{
    id: number,
    title: string,
    description: string,
}

const Card = (props: Card) =>{
    const {id, title, description} = props;
    console.log(id, title, description)
    return(
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Card;