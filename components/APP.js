var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');
var ChatRoom = require('./ChatRoom');

var APP = React.createClass({

    getInitialState() {
        return {
            status: 'disconnected'
        }
    },

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
    },

    disconnect() {
        this.setState({ status: 'disconnected'});
    },

    connect() {
        this.setState({ status: 'connected'});
    },

    render() {
        return (
            <div>
                <Header title="New Header" status={this.state.status}/>
                <ChatRoom/>
            </div>
        )
    }
});

module.exports = APP;