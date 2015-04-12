var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var Task = React.createClass({
  // meaning: show the task name, and enter a button. 
  render: function() {
    return <div>Hello I am a task. I should also have the functionality to add time</div>;
  }
});

var Tasklist = React.createClass({
  render: function() {
    return (
      <div>
        Hello I am a tasklist. I should hold tasks.
        <Task />
        <Task />
      </div>        
    );
  }
});

var TaskEditor = React.createClass({
  render: function() {
    return <div>Hello I am used to create Tasks</div>;
  }
});




React.render(<Tasklist />, document.getElementById('container'));
