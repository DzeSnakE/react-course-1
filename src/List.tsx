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
        <div><h5>{title}</h5>
            {items.map((currentElement : CardInterface)=><Card id={currentElement.id} title={currentElement.title} description={currentElement.description}/>)}</div>
    )
}

export default List;