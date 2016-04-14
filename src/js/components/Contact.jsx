/**
 * Tabulated information of an individual contact.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Subcomponents
var Contact = require('./Contact.jsx');


var ContactList = React.createClass({

    handleEdit: function(i, j) {
        AppActions.editContact(i);
    },

    handleRemove: function(i, j) {
        AppActions.removeContact(i);
    },

    render: function() {
        return (
            <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.email}</td>
                <td>
                    <a className="btn btn-primary" href="#" onClick={this.handleEdit.bind(this, this.props.contact)}>EDIT</a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={this.handleRemove.bind(this, this.props.contact.id)}>REMOVE</a>
                </td>
            </tr>
        );
    }

});

module.exports = ContactList;
