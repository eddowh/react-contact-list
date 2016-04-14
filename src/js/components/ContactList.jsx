/**
 * Contact List that will dislay the data from Firebase.
 */


var React = require('react');

// Flux elements
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

// Subcomponents
var Contact = require('./Contact.jsx');


var ContactList = React.createClass({

    render: function() {
        return (
            <div className="well">
                <h3 className="text-center">
                    <strong>
                        Contacts
                    </strong>
                </h3>
                <hr/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map(function(contact, index) {
                                return (
                                    <Contact contact={contact} key={index} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

});

module.exports = ContactList;
