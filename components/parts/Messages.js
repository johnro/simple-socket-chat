var React = require('react');

var Messages = React.createClass({
    
    render() {
        console.log("hello from messages!");
        return (
            <div>
                <ul id="messages">
                    {this.props.messages}
                </ul>
            </div>
        );
    },
});

module.exports = Messages;