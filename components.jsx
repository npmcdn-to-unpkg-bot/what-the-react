var Root = React.createClass({
  
  getInitialState: function() {
    return ({
      isModalOpen: false,
    });
  },
  
  changeModalOpenStatus: function(data) {
    var newState = !this.state.isModalOpen;
    this.setState({
      isModalOpen: newState,
      ModalContent: data.content
    });
  },
  
  componentReceivedNewProps: function() {
    //
  },
  
  render: function() {
    return (
      <div>
        <Modal open={this.state.isModalOpen} action={this.changeModalOpenStatus}>{this.state.ModalContent}</Modal>
        <Buttons action={this.changeModalOpenStatus} />
        <Content />
        <Mouth />
      </div>
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div id="content">
      <p>I am an app, bitch.</p>
      </div>
    )
  }
});

var Mouth = React.createClass({
  render: function() {
    return (
    <div id="mouth">
    </div>
    )
  }
});

var ExampleModalContent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>I should never show.</h1>
        <p>I told you to stay away!</p>
      </div>
    )
  }
});

var CreateSomething = React.createClass({
  render: function() {
    return (
      <div>
        <h1>You cant create anything haha</h1>
        <p>Nononono.</p>
      </div>
    )
  }
});

var Settings = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Messing around with the settings, hu?</h1>
        <p>Nononono.</p>
      </div>
    )
  }
});

var Modal = React.createClass({
  
  render: function() {
    
    console.log(this);
    
    var Content;
    
    if (!this.props.children) {
      Content = ExampleModalContent;
    } else {
      Content = this.props.children;
    }
    
    console.log('Asking for:');
    console.log(Content);
    
    return (
      <div id="modal" data-open={this.props.open}>
        <Content />
        <a onClick={this.props.action}> Kill me</a>
      </div>
    )
  }
});


var Buttons = React.createClass({
  render: function() {
    
    // Just Add Buttons here
    
    return (
      <div id="buttons">
        <Button icon="plus-circle" action={this.props.action} content={CreateSomething} text="Create Something" />
        <Button icon="cog" action={this.props.action} content={Settings} text="Settings" />
      </div>
    )
  }
});

var Button = React.createClass({
  
  render: function() {
    return (
      <a className="btn" onClick={this.props.action.bind(null, this.props)}><i className={"fa fa-"+this.props.icon}></i>{this.props.text}</a>
    )
  }
});

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);