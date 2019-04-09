import ContactApi from './../api/ContactApi';

export const CONTACT_FETCH = 'CONTACT_FETCH';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_FAILURE = 'CONTACT_FAILURE';


export const fetchContactsFailure = error => ({
    type: CONTACT_FAILURE,
    payload: {error}
});

const getContacts = (contacts) => {
    return contacts.map((contact) => {
        return {
            contactId: contact.contactId,
            first: contact.first,
            last: contact.last,
            phone: contact.phone,
            image: contact.image
        }
    });
};

export const fetchContacts = () => dispatch => {
    console.log('fetchContacts');

    return ContactApi.loadContacts()

        .then((contacts)=> getContacts(contacts))
        .then((contacts) => {
            dispatch({
                type: CONTACT_SUCCESS,
                payload: contacts,
            });
        })
        .catch(error => dispatch(fetchContactsFailure(error)));

};


/*

    => dispatch => {
    fetch
        .then((response) => response.json())
        .then((contacts) => {
            dispatch({
                type: 'CONTACT_SUCCESS',
                payload: contacts
            })

        })

        .catch((error) => {
            // TODO: do good error handling
            console.error('fetch contact failed', error);
        });
};


export const fetchContacts = () => dispatch => {
    fetchContactsStart();
    return fetch('https://my-json-server.typicode.com/SylviaGonschior/SmartAddress01/contacts')
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
            dispatch(fetchContactsSuccess(json.contacts));
            return json.contacts;
        })
        .then((contacts)=> formatContacts(contacts))
        .catch(error => dispatch(fetchContactsFailure(error)));
};
*/