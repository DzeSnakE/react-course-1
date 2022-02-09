import React from 'react';
import Card, {CardInterface} from "./Card";

export interface ListInterface {
    id: string,
    title: string,
    items: CardInterface[],
}

const List = (props: ListInterface) => {
    const {id, title, items} = props;
    console.log(id, title);
    return (
        <div style={{backgroundColor:"darkgray"}}><h3>{title}</h3>
            {items.map((currentElement : CardInterface)=><Card id={currentElement.id} title={currentElement.title} description={currentElement.description} to={currentElement.to} date={currentElement.date}/>)}</div>
    )
}

export default List;