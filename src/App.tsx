import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import List, {ListInterface} from './List';
import {CardInterface} from "./Card";


const card: CardInterface = {
    id: uuid(),
    title: 'Sortir le chien',
    description: 'Sortir le chien au parc',
    to: 'Pierre-Jean',
    date: '09/02/2022'
}

const list: ListInterface = {
    id: uuid(),
    title: 'Liste 1',
    items: [card],
}
const list2: ListInterface = {
    id: uuid(),
    title: 'Liste 2',
    items: [card],
}
const list3: ListInterface = {
    id: uuid(),
    title: 'Liste 3',
    items: [card],
}


const App = () => {
    const [data, setData] = useState<ListInterface[]>([list, list2, list3]);
    const [dataList, setDataList] = useState<ListInterface>();
    const [title, setTitle] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [selectedListId, setSelectedListId] = useState<string>('');
    const [titleList, setTitleList] = useState<string>('');


    function handleTitleList(e: React.ChangeEvent<HTMLInputElement>) {
        const newTitleList = e.target.value;
        setTitleList(newTitleList);
    };

    function handleList(event: React.ChangeEvent<HTMLSelectElement>) {
        const newSelectedId = event.target.value;
        setSelectedListId(newSelectedId);
    };

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
        const newTitle = e.target.value;
        setTitle(newTitle);
    };

    function handleDescription(e: React.ChangeEvent<HTMLInputElement>) {
        const newDescription = e.target.value;
        setDescription(newDescription);
    };

    function handleTo(event: React.ChangeEvent<HTMLInputElement>) {
        const newTo = event.target.value;
        setTo(newTo);
    };

    function handleDate(event: React.ChangeEvent<HTMLInputElement>) {
        const newDate = event.target.value;
        setDate(newDate);
    };

    function handleAdd() {
        const newCard: CardInterface = {
            id: uuid(),
            title: title,
            description: description,
            to: to,
            date: date
        }
        const newData = [...data];
        //Trouve l'index de la liste sélectionnées
        const index = newData.findIndex((currentElement: ListInterface) => currentElement.id === selectedListId)
        //Push la card dans le liste sélectionnée
        newData[index].items.push(newCard);
        setData(newData);

        setSelectedListId("");
        setTitle("");
        setDescription("");
        setTo("");
        setDate("");
    }

    function addList() {
        const newList: ListInterface = {
            id: uuid(),
            title: titleList,
            items: []
        }
        setDataList(newList);

        setTitleList("");
    }

    return (
        <>
            <div>
                <input value={titleList} onChange={handleTitleList}/>
                <button onClick={addList}>Add Liste</button>
            </div>

            <div style={{textAlign: "center"}}>
                <div style={{display:"flex", textAlign: "center"}}>
                {data.map((currentElement: ListInterface) => <List id={currentElement.id} title={currentElement.title}
                                                                   items={currentElement.items}/>)}
                </div>
                <p>Tâche : <input value={title} onChange={handleTitle}/></p>
                <p>Description : <input value={description} onChange={handleDescription}/></p>
                <p>Pour : <input value={to} onChange={handleTo}/></p>
                <p>Date : <input value={date} onChange={handleDate}/></p>
                <select name="list" onChange={handleList} value={selectedListId}>
                    <option value="">Veuillez choisir une liste</option>
                    {data.map((currentElement: ListInterface) => <option
                        value={currentElement.id}>{currentElement.title}</option>)}
                </select>
                <button onClick={handleAdd}
                        disabled={title.length === 0 || description.length === 0 || selectedListId.length === 0 || to.length === 0 || date.length === 0}>Add
                    Card
                </button>
            </div>
        </>
    );
}
export default App;