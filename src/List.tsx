import React from 'react';

//définition de l'interface en TS
interface List{
    id :number,
    title :string,
    items :any[],
};

//component
const List = (props :List) => {

    //destructuration de props
    const {id, title, items} = props;
    console.log(id, title);

    return (
        <div><h5>{ title }</h5></div>


    )
}

//export
export default List;