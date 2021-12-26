import React, { useState } from 'react'
import todo from '../images/todo.svg'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('');
        }
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((ele, ind) => {
            return ind !== id;
        })
        setItems(updatedItems);
    }

    const removeAll = () => {
        setItems([]);
    }
    return (
        <>
            <div className='main_div'>
                <div className='child-div'>
                    <figure>
                        <img src={todo} alt='todologo' />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type='text' placeholder='✍️ Add Items...'
                            value={inputData}
                            onChange={(e) => {
                                setInputData(e.target.value);
                            }}></input>
                        <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>
                    </div>
                    <div className='showItems'>
                        {
                            items.map((element, index) => {
                                return (
                                    <div className='eachItem' key={index}>
                                        <h3>{element}</h3>
                                        <i className="far fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(index)}></i>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div>
                        <button className='btn effect04' data-sm-link-text='Remove ALl' onClick={removeAll}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
