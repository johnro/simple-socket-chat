var React = require('react');
var ReactDOM = require('react-dom');

var Join = React.createClass({
    
    join() {
        var userName = ReactDOM.findDOMNode(this.refs.username).value;
        this.props.emit('join', { username : userName});
    },

    render() {
        return (
            <div className="login page">
                <h3 className="title">{this.props.title}</h3>
                <form className="form" action="javascript:void(0)" onSubmit={this.join}>
                <label>Username</label>
                <input ref="username"
                        className="usernameInput" 
                        id="join"
                        placeholder="Type here..."
                        required/>
                </form>
            </div>
        );
    }
});

module.exports = Join;

