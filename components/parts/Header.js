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
            <header  className="row">
                <div id="mainHeader" className="col-xs-8">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="col-xs-2">
                    <span className={this.props.status}>{this.props.status}</span>
                    <span id="connection-status" className={this.props.status}></span>
                </div>
            </header>
        ); 
    }
});

module.exports = Header;
