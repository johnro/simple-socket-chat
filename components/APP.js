var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');
var ChatRoom = require('./ChatRoom');

var APP = React.createClass({

    getInitialState() {
        //username should be returne by server after 'joined' event?
        return {
            status: 'disconnected',
            messages: [],
            user: {}
        }
    },

    //this handles all events coming FROM SERVER
    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('joined', this.joined);
        this.socket.on('new message', this.newMessage);
    },

    disconnect() {
        this.setState({ status: 'disconnected' });
    },

    emit(eventName, payload) {
        this.socket.emit(eventName, payload);
    },

    connect() {
        console.log("connected recived");
        this.setState({ status: 'connected' });
    },

    joined(user) {
        console.log("Joined event > %s joined", user.name);
        this.setState({user: user});   
    },

    newMessage(payload) {
        console.log("Message received : (%s) %s", payload.username, payload.message);
        var newMessage = <li> {payload.username} {payload.message}</li>;
        var m = this.state.messages;
        m.push(newMessage);   
        this.setState( { messages : m } );
    },

    addMessage(data) {
        
    },

    render() {
        return (
            <div>
                <Header title="New Header" status={this.state.status}/>
                <ChatRoom emit={this.emit} {...this.state}/>
            </div>
        )
    }
});

module.exports = APP;