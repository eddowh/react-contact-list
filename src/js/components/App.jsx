/**
 * Main application
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Components
var AddForm = require('./AddForm.jsx');


function getAppState() {
    return {
        contacts: AppStore.getContacts()
    };
}


var App = React.createClass({

    getInitialState: function() {
        return getAppState();
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    // Update view state when change is received
    _onChange: function() {
        this.setState(getAppState());
    },

    render: function() {
        console.log(this.state.contacts);
        return (
            <div>
                <AddForm />
            </div>
        );
    }

});

module.exports = App;
