import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import List, {ListInterface} from './List';
import {CardInterface} from "./Card";


const card : CardInterface = {
    id: uuid(),
    title: 'todo1',
    description: 'todo number 1',
}

const list : ListInterface = {
    id: uuid(),
    title: 'List 1',
    items: [card],
}
const list2 : ListInterface = {
    id: uuid(),
    title: 'List 2',
    items: [card],
}


const App = () => {
    const [data, setData] = useState<ListInterface[]>([list, list2]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [selectedListId, setSelectedListId] = useState<string>('');

    function handleList(event: React.ChangeEvent<HTMLSelectElement>){
        const newSelectedId = event.target.value;
        setSelectedListId(newSelectedId);
    }

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>){
        const newTitle = e.target.value;
        setTitle(newTitle);
    };


    function handleDescription(e: React.ChangeEvent<HTMLInputElement>){
        const newDescription = e.target.value;
        setDescription(newDescription);
    };

    function handleAdd(){
        const newCard : CardInterface = {
            id: uuid(),
            title: title,
            description: description,
        }
        const newData = [...data];
        const index = newData.findIndex((currentElement : ListInterface) => currentElement.id===selectedListId)
        newData[index].items.push(newCard);
        setData(newData);

        setSelectedListId("");
        setTitle("");
        setDescription("");
    }
    return (
        <div>
            {data.map((currentElement : ListInterface) => <List id={currentElement.id} title={currentElement.title}
                                                items={currentElement.items}/>)}

            <input value={title} onChange={handleTitle}/>
            <input value={description} onChange={handleDescription}/>
            <select name="list" onChange={handleList} value={selectedListId}>
                <option value="">--Please choose an option--</option>
                {data.map((currentElement : ListInterface) =><option value={currentElement.id}>{currentElement.title}</option>)}
            </select>
            <button onClick={handleAdd} disabled={title.length===0 || description.length===0 || selectedListId.length===0}>Add Card</button>
        </div>
    );
}
export default App;