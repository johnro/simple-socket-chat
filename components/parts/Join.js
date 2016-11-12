var React = require('react');
var ReactDOM = require('react-dom');

var Join = React.createClass({
    
    join() {
        var userName = ReactDOM.findDOMNode(this.refs.username).value;
        this.props.emit('join', { username : userName});
    },

    render() {
        return (
            <div>
                <form action="javascript:void(0)" onSubmit={this.join}>
                <label>Username</label>
                <input ref="username"
                        className="form-control" 
                        id="join"
                        placeholder="enter your username..."
                        required/>
                <button className="btn btn-primary">Send</button>
                </form>
            </div>
        );
    }
});

module.exports = Join;

