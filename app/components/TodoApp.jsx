// TodoApp is going to pass the array (todos) onto TodoList, and TodoList is going to render multiple Todo

var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass ({
  getInitialState: function (){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id:2,
          text: 'Clean the yard'
        }, {
          id:3,
          text: 'Clean the house'
        }
      ]
    }
  },
  // Get the prop value from the input form in AddTodo.jsx
  handleAddTodo: function (text) {
    alert('new test ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        {/* display the input form from the component AddTodo */}
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
