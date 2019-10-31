import React from'react';
import './TodoItem.css';


const TodoItems = (props) => {
    const {items} = props;
    const {deleteItem} = props;
    let length = items.length;
    const ListItems = length ? (
        items.map(item => {
            return(
                <div key={item.id} >
                    <span>{item.id}-</span>
                    <span>{item.name}-</span>
                    <span>{item.age}-</span>
                    <span onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p>there is no items</p>
    )
  
    return(
            <div>
                <h2>1 - Items</h2>
                <span>name-</span>
                <span>age-</span>
                <span>action-</span>
                {ListItems}
                <hr/>

            </div>
        );
}


export default TodoItems;
