/**
 * Main application
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Components
var AddForm = require('./AddForm.jsx');
var EditForm = require('./EditForm.jsx');
var ContactList = require('./ContactList.jsx');


function getAppState() {
    return {
        contacts: AppStore.getContacts(),
        contactToEdit: AppStore.getContactToEdit()
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

        if (this.state.contactToEdit == '') {
            var form = <AddForm />
        } else {
            var form = <EditForm contactToEdit={this.state.contactToEdit} />
        }

        console.log(this.state.contactToEdit);
        return (
            <div>
                {form}
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }

});

module.exports = App;
