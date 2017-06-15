var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    // check to see if the value is an array if not don't do anything
    if ($.isArray(todos)) {
      // set item two argument -todos and JSON stringify
      // JSON stringify take the array and convert it into an array
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

  },
  getTodos: function () {
    //fetch item from localStorage
    var stringTodos = localStorage.getItem('todos');
    // if we don't have valid data we are return an empty array
    var todos = [];
    // convert JSON string into and array
    // use the try catch to see if this is a valid array
    // if it is the todos var get updated
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    // similar statement as the if statement below
    // If this condition passes return $.isArray(todos)
    // the code right to the ? gets executed
    // If the contiditon fail return $.isArray(todos) we execute the code after the : in this case an empty array []
    return $.isArray(todos) ?  todos : [];

    // Check if what was storage it was an array
    // if it is we return it, if not we return an empty array

    // if($.isArray(todos)) {
    //   return todos;
    // }else {
    //   return [];
    // }

  },
  // Return a subset of the todos arrays
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // Filter by text
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;

    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      // if a is not completed and b is a should come before b
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
