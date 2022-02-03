import React from 'react';

export interface CardInterface{
    id: string,
    title: string,
    description: string,
}

const Card = (props: CardInterface) =>{
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