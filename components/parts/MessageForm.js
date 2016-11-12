var React = require('react');
var ReactDOM = require('react-dom');

var MessageForm = React.createClass({

    handleSubmit() {
        var msg = ReactDOM.findDOMNode(this.refs.message).value;
        var data = { user: this.props.userName, text: msg};                
        this.props.emit('new message', data);
    },

    render() {
        return (
            <div>
                <form action="javascript:void(0)" onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input ref="message"
                        className="form-control"
                        id="msg"
                        placeholder="write a message here..."
                        required />
                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
        );
    }
});

module.exports = MessageForm;

