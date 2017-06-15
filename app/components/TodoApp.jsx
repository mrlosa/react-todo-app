// TodoApp is going to pass the array (todos) onto TodoList, and TodoList is going to render multiple Todo

var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-1 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              {/* display the input form from the component AddTodo */}
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
