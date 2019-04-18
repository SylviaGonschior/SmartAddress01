class ContactApi {

    constructor() {
        this.contacts = undefined;
    }

    fetch = (url, options, body) => {
        if (this.contacts) {
            console.log('do not reload contacts');
            let promise = new Promise((resolve) => resolve(this.contacts));
            return promise;
        }
        if (body) {
            options = Object.assign(options, {body: body});
        }

        return fetch(url, options)
            .then(res => res.json())
            .then((contacts) => {
                this.contacts = contacts;
                return contacts;
            })

    };

    loadContacts = () => {
        console.log('contactApi');
        let url = 'https://my-json-server.typicode.com/SylviaGonschior/SmartAddress01/contacts';
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        return this.fetch(url, options);
    };

    saveAddressToContact = (contactToSave) => {

       // console.log('contactsToSave in api', contactToSave);
      //  console.log('Zuweisung Kontakt vorher', this.contacts);

        let promise = new Promise((resolve, reject) => {

            try {

                let contactsArray = this.contacts;
                let id = contactToSave.contactId;
                let index = contactsArray.findIndex(item => item.contactId === id);

                contactsArray.splice(index, 1, contactToSave)

                resolve(contactsArray)

            } catch (err) {
                console.log('error reject');
                reject()
            }
        });
       // console.log('Zuweisung Kontakt nachher', this.contacts);
        return promise;

    };

}

export default new ContactApi();

