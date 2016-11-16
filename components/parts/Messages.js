var React = require('react');

var Messages = React.createClass({
    
    render() {
        return (
            <div className="chatArea">
                <ul className="messages">
                    {this.props.messages}
                </ul>
            </div>
        );
    },
});

module.exports = Messages;