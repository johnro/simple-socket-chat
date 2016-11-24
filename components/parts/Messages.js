var React = require('react');
var Message = require('./Message');


var Messages = React.createClass({
    
    render() {
         if (!this.props.messages) {
            return null;
        }
        var messages = this.props.messages;
        console.log("Messages " + messages);
        return (
            <div className="chatArea">
                <ul className="messages">{messages.map(this.renderMessage)}</ul>
            </div>
        );
    },

    renderMessage(message, index) {
        console.log("Rendermessage : " + message);
        return <Message key={index} user={message.user} message={message.message}/>
    }
});

module.exports = Messages;