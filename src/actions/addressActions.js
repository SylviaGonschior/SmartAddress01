import {
    RECEIVE_CONTACTS
} from '../../actions/types';

import Contacts from 'react-native-contacts';
import statusMessage from '../../actions/status';



export const getContactsFromLocal = () => dispatch => {
    statusMessage(dispatch, 'refreshing', true);
    return new Promise((resolve, reject) => {
        Contacts.getAll((err, contacts) => {
                if (err) {
                    reject();
                } else {
                    contacts = contacts.sort((a, b) => {
                        if (a.givenName < b.givenName) return -1;
                        if (a.givenName > b.givenName) return 1;
                        return 0;
                    });
                    contacts.map((contact) => {
                        if(contact.phoneNumbers.length > 0) {
                            return contact;
                        }
                    });
                    resolve(dispatch({
                        type: RECEIVE_CONTACTS,
                        payload: contacts
                    }));
                }
                statusMessage(dispatch, 'refreshing', false);
            });
    });
};

