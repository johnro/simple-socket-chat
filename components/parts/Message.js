var React = require('react');

var Message = React.createClass({
    
    render() {
        return (
            <li className="message">
            <span className="userName">{this.props.user}</span> 
            <span className="text">{this.props.message}</span>
            </li>
        );
    },
});

module.exports = Message;