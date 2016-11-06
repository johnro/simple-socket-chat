var React = require('react');

var ChatRoom = React.createClass({
    render() {
        return (
            <div id="messageList">
            <ul id="messages"></ul>
            <form>
                <input id="message"/><button>Send</button>
            </form>
            </div>
            );
    }
});

module.exports = ChatRoom;