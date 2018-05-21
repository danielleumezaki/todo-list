import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let todoList = [{ text: 'first todo', status: false, id: 0 },
{ text: 'second todo', status: false, id: 1 }
 
]

ReactDOM.render(<App todoList={todoList} />, document.getElementById('root'));
registerServiceWorker();
