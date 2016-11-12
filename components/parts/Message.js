var React = require('react');

var Message = React.createClass({
    
    render() {
        return (
            <li> {this.props.user} -> {this.props.message}</li>
        );
    },
});

module.exports = Message;