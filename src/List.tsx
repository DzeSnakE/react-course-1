import React from 'react';
import Card from "./Card";

interface List {
    id: number,
    title: string,
    items: any[],
}

const List = (props: List) => {
    const {id, title, items} = props;
    console.log(id, title);
    return (
        <div><h5>{title}</h5>
            {items.map((currentElement)=><Card id={currentElement.id} title={currentElement.title} description={currentElement.description}/>)}</div>
    )
}

export default List;