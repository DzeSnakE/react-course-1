import React from 'react';
import List from './List';
import Card from "./Card";


const card = {
    id: 1,
    title: 'todo1',
    description: 'todo number 1',
}

const list = {
    id: 0,
    title: 'List 1',
    items: [card],
}

const data = [list];

const App = () => {
    return (
        <div>
            {data.map((currentElement) => <List id={currentElement.id} title={currentElement.title}
                                                items={currentElement.items}/>)}
        </div>
    );
}
export default App;