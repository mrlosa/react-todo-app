var React = require('react');

var AddTodo = React.createClass ({
  handleSubmit: function(e){
    // this is going to prevent reloading, we are going to handle this w react
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    // we don't need any special validation
    // we just need to see if at least one character input
    if (todoText.length > 0) {
      // clear the inpu value
      this.refs.todoText.value='';
      // get the value as props for the text we want to use
      // onAddTodo is the props value that is going to be pass to TodoApp.jsx
      this.props.onAddTodo(todoText);

    }else {
      // if invalid data, put cursor back into the input field automatically
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="type" ref="todoText" placeholder="What do you need to do?"  className="expanded"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
