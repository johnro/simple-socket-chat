var React = require('react');
var ReactDOM = require('react-dom');

var MessageForm = React.createClass({

    handleSubmit() {
        var msg = ReactDOM.findDOMNode(this.refs.message);
        var data = { user: this.props.userName, text: msg.value};                
        this.props.emit('new message', data);
        //clear input message text
        msg.value = '';
    },

    render() {
        return (
            <div className="inputMessage">
                <form className="messageForm" action="javascript:void(0)" onSubmit={this.handleSubmit}>
                    <input ref="message"
                        className="messageInput"
                        id="msg"
                        placeholder="Type here..."
                        />
                </form>
            </div>
        );
    }
});

module.exports = MessageForm;

