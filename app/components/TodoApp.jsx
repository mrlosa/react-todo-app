// TodoApp is going to pass the array (todos) onto TodoList, and TodoList is going to render multiple Todo

var React = require('react');
var uuid = require('uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass ({
  getInitialState: function (){
    return {
      // set default values
      showCompleted: false,
      searchText: '',
      // Fetch the todos
      todos: TodoAPI.getTodos()
    };
  },
  // Update the todos
  componentDidUpdate : function () {
    TodoAPI.setTodos(this.state.todos);
  },
  // Get the prop value from the input form in AddTodo.jsx
  handleAddTodo: function (text) {
    // alert('new test ' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:  uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        {/* display the input form from the component AddTodo */}
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
