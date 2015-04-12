var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var Task = React.createClass({
  /* 
    they should have a props for their time this week, and
    an action to add to it - consequently also a form to do so
  */
  getInitialState: function() {
    return {
      value:'0',
      time: parseFloat(this.props.thisWeeksTime)
    };
  },
  handleChange: function() {
    this.setState({value: event.target.value});
    this.setState({time: parseFloat(this.props.thisWeeksTime) + parseFloat(event.target.value)});
  },
  render: function() {
    var value = this.state.value;
    var time = this.state.time;
    return (
      <div>
        {this.props.name} - {this.state.time} hours this week.
        <input type="text" value={value} onChange={this.handleChange} /> 
      </div>
    );
  }
});

var Tasklist = React.createClass({
  render: function() {
    return (
      <div>
        Hello I am a tasklist. I should hold tasks.
        <Task name="sing" thisWeeksTime="5"/>
        <Task name="dance" thisWeeksTime="1.3"/>
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
