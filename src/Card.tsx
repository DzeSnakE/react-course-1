import React from 'react';


export interface CardInterface{
    id: string,
    title: string,
    description: string,
    to : string;
    date : string;
}

const Card = (props: CardInterface) =>{
    const {id, title, description, to, date} = props;
    console.log(id, title, description, to, date)
    return(
        <div style={{backgroundColor:"lightgray", borderStyle:"solid"}}>
            <h5 style={{color: "red"}}>{title}</h5>
            <p>Tâche : {description}</p>
            <p>Par : {to} / Date : {date}</p>
            <p>Complete : <input type="checkbox"/></p>
        </div>
    )
}

export default Card;