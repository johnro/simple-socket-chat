var React = require('react');

var Header = React.createClass({
    
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            status: 'disconnected'
        }
    },
    render() {
        return (
            <div className="mainHeader">
                <h1>{this.props.title}</h1>
                <span className={this.props.status}>{this.props.status}</span>
                <span id="connection-status" className={this.props.status}></span>
            </div>
        ); 
    }
});

module.exports = Header;

