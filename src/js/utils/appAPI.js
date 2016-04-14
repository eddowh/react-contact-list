// API libraries
var Firebase = require('firebase');

// Flux elements
var AppActions = require('../actions/AppActions');


// Constants
var FIREBASE_BASE_LINK = 'https://contact-list-dev0.firebaseio.com/';


// list of actions that are available
module.exports = {

    saveContact: function(contact) {
        this.firebaseRef = new Firebase(FIREBASE_BASE_LINK + 'contacts');
        this.firebaseRef.push({
            contact: contact
        });
    }

}
