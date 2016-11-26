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

    getUsernameColor(username) {
        var COLORS = [
            '#e21400', '#91580f', '#f8a700', '#f78b00',
            '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
            '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
        ];
        // Compute hash code
        var hash = 7;
        for (var i = 0; i < username.length; i++) {
            hash = username.charCodeAt(i) + (hash << 5) - hash;
        }
        // Calculate color
        var index = Math.abs(hash % COLORS.length);
        return COLORS[index];
    },

    renderMessage(message, index) {
        console.log("Rendermessage : " + message);
        return <Message key={index} user={message.user} message={message.message} />
    }
});

module.exports = Messages;