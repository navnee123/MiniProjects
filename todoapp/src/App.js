import logo from './logo.svg';
import './App.css';
import './style.css'
import React, { useState } from 'react';
import Todoinput from './components/todoinput';
//import Todolist from './todolist';

function App() {

  //for adding in the new task
  const [list, setList] = useState([]);

  //function for add new task in list 
  let addTolist = (inputtext) => {
    if (inputtext !== '')
      setList([...list, inputtext]);//spread operater for previous all task and inputtext for new task add in list
  }

  //for delete the list
  const deleteListItem = (key) => {
    let newListTodo = [...list];//create newlist the add all list in newlist then splice the list by key and return the list in the setlist
    newListTodo.splice(key, 1)
    setList([...newListTodo])
  }
  let removeAll=()=>{
    setList([])
  }
  return (
    <div className="App">
      <div className='main-container'>
        <div className='center-container'>
          <Todoinput addtolist={addTolist} remove={removeAll} />
          
          <h1 className='app-heading'>TODO</h1>
          <hr />
          {list.map((listItem, i) => {
            return (
              <li className='list-item' key={i} index={i} >
                {listItem}
                <span className='icons'>
                  <i className="fa-solid fa-trash-can fa-bounce icon-delete"  onClick={e => { deleteListItem(i) }} />
                </span>
              </li>
              //<Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            )
          })}
        </div>

      </div>

    </div>
  );
}

export default App;
