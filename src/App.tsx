import React from 'react';
import List from './List';

const card = {
    id: 0,
    title: 'todo1',
    description: 'todo1',
}
const list = {
    id: 0,
    title: 'Title 1',
    items: [card],
}
const data = [list];

const App = () => {

    return (
        <div>
            { data.map((currentElement) => <List id={currentElement.id} title={currentElement.title} items={currentElement.items} />) }
        </div>
    );
}
export default App;