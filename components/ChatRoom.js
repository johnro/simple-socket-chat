var React = require('react');
var Display = require('./parts/Display');
var Join = require('./parts/Join');
var Messages = require('./parts/Messages');
var MessageForm = require('./parts/MessageForm');


var ChatRoom = React.createClass({
    render() {
        return (
            <div>
                <Display if={this.props.status === 'connected'}>

                    <Display if={this.props.user.name}>
                        <h2>Welcome {this.props.user.name}</h2>
                        <Messages messages={this.props.messages}/>
                        <MessageForm    userName={this.props.user.name} 
                                        emit={this.props.emit}
                                        newMessage={this.props.newMessage}/>
                    </Display>

                    <Display if={!this.props.user.name}>
                        <h1>Join the chat</h1>
                        <Join emit={this.props.emit}/>
                    </Display>

                </Display>
            </div>
        );
    }
});

module.exports = ChatRoom;