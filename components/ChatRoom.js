var React = require('react');
var Display = require('./parts/Display');
var Join = require('./parts/Join');
var Messages = require('./parts/Messages');
var MessageForm = require('./parts/MessageForm');
var Header = require('./parts/Header');

var ChatRoom = React.createClass({
    render() {
        return (
            <div>
                <Display if={this.props.user.name}>
                    <Header title={this.props.title} status={this.props.status} />
                    <Messages messages={this.props.messages} />
                    <MessageForm userName={this.props.user.name}
                        emit={this.props.emit}
                        newMessage={this.props.newMessage} />
                </Display>

                <Display if={!this.props.user.name}>
                    <Join emit={this.props.emit} title={this.props.title} />
                </Display>
            </div>
        );
    }
});

module.exports = ChatRoom;