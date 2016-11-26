var React = require('react');

var Message = React.createClass({

    render() {
        return (
            <li key={this.props.key} className="message">
                <span className="userName">{this.props.user} </span>
                <span className="text"> {this.props.message}</span>
            </li>
        );
    },

   
    
});

module.exports = Message;