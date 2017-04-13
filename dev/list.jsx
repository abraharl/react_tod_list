import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class TodoList extends Component {
   constructor(props) {
      super(props);

   	  this.state = {
   	  	items: []
   	  };		
   }

	render() {
		return (
			<div className="todoList">
			  <div className="header">
			    <form onSubmit={(e) => this.addItem(e)}>
			      <input id="newItem" placeholder="enter text"></input>
			      <button type="submit">Add</button>
			    </form>
			  </div>
              <TodoItems entries={this.state.items}/>
			</div>
		);
	}

	addItem(e) 

      var items = this.state.items;

      items.push({
        text: document.getElementById('newItem').value,
        key: Date.now()
      });

      this.setState({
      	items: items
      });

      document.getElementById('newItem').value = '';

      e.preventDefault();
	}
}


class TodoItems extends Component {
	render() {
		var entries = this.props.entries;

        function createTasks(item) {
        	return <li key={item.key}>{item.text}</li>
        }

        var listItems = entries.map(createTasks);

        return (
        	<ul className="itemList">
        	  {listItems}
        	</ul>
        );
	}
}

ReactDOM.render(
  <TodoList/>,
  document.getElementById('main')
);