import { useState } from 'react';
import './todo1.css';

function createInitialTodos() {
  const initialTodos = [];
//   for (let i = 0; i < 50; i++) {
//     initialTodos.push({
//       id: i,
//       text: 'Item ' + (i + 1)
//     });
//   }
  return initialTodos;
}
  export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');
  const todo = {theme:
     {
      backgroundColor: 'black',
      color: 'white'
    }
  };

  const toolbar =() => {
    if(text == '' ){
        alert("Emty...")
    }

     else if(text == 'priyal' ){
        alert("An idiot.")
    }
    else if(text == 'navneet' ){
        alert("Hey bro!!!")
    }

    else{
        setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]); 
    }
  }
  return (
    <>
    <div>
    <center>
    <h1>Todo List</h1>
     <div style={todo.theme}>
       <input value={text}
       placeholder = "Enter Your Items"
        onChange={e => setText(e.target.value)}
      />
      <button onClick={toolbar}>Add</button>
      <ul width="20%">
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
    
    </center>
    </div>
    </>
  );
}