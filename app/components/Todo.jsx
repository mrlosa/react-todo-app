var React = require('react');

var Todo = React.createClass({
  render: function(){
    var {id, text, completed} = this.props;
    return (
      // Warning onClick: Failed form propType: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `Todo`.
      <div onClick={()=> {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    )
  }
});

module.exports = Todo;
