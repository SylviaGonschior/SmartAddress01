import ContactApi from './../api/ContactApi';

export const CONTACT_FETCH = 'CONTACT_FETCH';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_FAILURE = 'CONTACT_FAILURE';
export const ADDRESS_TO_CONTACT = 'ADDRESS_TO_CONTACT'


export const fetchContactsFailure = error => ({
    type: CONTACT_FAILURE,
    payload: {error}

    // TODO: do good error handling
    /*
    .catch((error) => {
            console.error('fetch contact failed', error);
        });
     */

});

const getContacts = (contacts) => {
    return contacts.map((contact) => {
        return {
            contactId: contact.contactId,
            first: contact.first,
            last: contact.last,
            phone: contact.phone,
            image: contact.image,
            street: contact.addresses[0].street,
            number: contact.addresses[0].number,
            zipCode: contact.addresses[0].zipCode,
            city: contact.addresses[0].city

        }
    });
};

export const fetchContacts = () => dispatch => {
    console.log('fetchContacts');

    return ContactApi.loadContacts()

        .then((contacts) => getContacts(contacts))
        .then((contacts) => {
            dispatch({
                type: CONTACT_SUCCESS,
                payload: contacts,
            });
        })
        .catch(error => dispatch(fetchContactsFailure(error)));
    // TODO: do good error handling

};

export const addAddressToContact = (contactToAddAddress, newAddressData) => dispatch => {
    console.log('contactToAddAdress', contactToAddAddress);
    console.log('newAdressData', newAddressData);
    // neuen adresses array erstellen und neue Adressinformation in array einfügen

    let newAddressesArray = [newAddressData];
    // Kontakt contactToAddAdress das Array newAdressesArray mit neuen Adressinformation zuweisen. Als neuen addresses key um struktur der anderen Kontakte einzuhalten.
    contactToAddAddress['addresses'] = newAddressesArray;

    return ContactApi.saveAddressToContact(contactToAddAddress)
        .then(() => ContactApi.loadContacts())
        .then((contacts) => getContacts(contacts))
        .then((contacts) => {
            dispatch({
                type: CONTACT_SUCCESS,
                payload: contacts,
            });
        })
        .catch(error => dispatch(fetchContactsFailure(error)));
    // TODO: do good error handling

};
