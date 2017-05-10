import React from 'react';
import ReactDOM from 'react-dom'
import ItemList from './AppContainer'
ReactDOM.render(
	  <div>
	    <h1>Todo</h1>
	    <ItemList />
	  </div>,
  document.getElementById('stomp-status')
)