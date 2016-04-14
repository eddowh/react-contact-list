// API libraries
var Firebase = require('firebase');

// Flux elements
var AppActions = require('../actions/AppActions');


// Constants
var FIREBASE_BASE_LINK = 'https://contact-list-dev0.firebaseio.com/';
var FIREBASE_CONTACTS_LINK = FIREBASE_BASE_LINK + 'contacts';


// list of actions that are available
module.exports = {

    saveContact: function(contact) {
        this.firebaseRef = new Firebase(FIREBASE_CONTACTS_LINK);
        this.firebaseRef.push({
            contact: contact
        });
    },

    getContacts: function() {
        this.firebaseRef = new Firebase(FIREBASE_CONTACTS_LINK);

        /* we will have an object returned, but we want it as an array
         * so we will loop/map through the object and then create it an array
         * to send back to out store
         */
        this.firebaseRef.once("value", function(snapshot) {
            var contacts = [];
            snapshot.forEach(function(childSnapshot) {
                var contact = {
                    id: childSnapshot.key(),
                    name: childSnapshot.val().contact.name,
                    phone: childSnapshot.val().contact.phone,
                    email: childSnapshot.val().contact.email
                };
                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            });
        });
    },

    removeContact: function(contactId) {
        this.firebaseRef = new Firebase(FIREBASE_CONTACTS_LINK + '/' + contactId);
        this.firebaseRef.remove();
    }

}
