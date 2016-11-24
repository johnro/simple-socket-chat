var React = require('react');

var Message = React.createClass({
    
    render() {
        return (
            <li id={this.props.key} className="message">
            <span className="userName"><em>{this.props.user}</em> :</span> 
            <span className="text">{this.props.message}</span>
            </li>
        );
    },
});

module.exports = Message;