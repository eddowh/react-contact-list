var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppAPI = require('../utils/appAPI.js');
var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');


var CHANGE_EVENT = 'change';

var _contacts = [];
var _contact_to_edit = '';


var AppStore = assign({}, EventEmitter.prototype, {

    saveContact: function(contact) {
        _contacts.push(contact);
    },

    getContacts: function() {
        return _contacts;
    },

    setContacts: function(contacts) {
        _contacts = contacts
    },

    removeContact: function(contactId) {
        var index = _contacts.findIndex(x => x.id === contactId);
        _contacts.splice(index, 1);
    },

    setContactToEdit: function(contact) {
        _contact_to_edit = contact;
    },

    getContactToEdit: function(contact) {
        return _contact_to_edit;
    },

    updateContact: function(contact) {
        for (var i = 0; i < _contacts.length; i++) {
            if (_contacts[i].id == contact.id) {
                _contacts.splice(i, 1);
                _contacts.push(contact);
            }
        }
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});


AppDispatcher.register(function(payload) {

    var action = payload.action;

    switch (action.actionType) {

        case AppConstants.SAVE_CONTACT:
            console.log('Saving contact...');

            // Store save
            AppStore.saveContact(action.contact);

            // Save to API
            AppAPI.saveContact(action.contact);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_CONTACTS:
            console.log('Receiving contacts...');

            // Store set
            AppStore.setContacts(action.contacts);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.REMOVE_CONTACT:
            console.log('Removing contact...');

            // Store Remove
            AppStore.removeContact(action.contactId);

            // API Remove
            AppAPI.removeContact(action.contactId);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.EDIT_CONTACT:
            console.log('Editing contact...');

            // Store edit
            AppStore.setContactToEdit(action.contact);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.UPDATE_CONTACT:
            console.log('Updating contact...');

            // Store Update
            AppStore.updateContact(action.contact);

            // API Update
            AppAPI.updateContact(action.contact);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

    }

    return true;

});


module.exports = AppStore;
