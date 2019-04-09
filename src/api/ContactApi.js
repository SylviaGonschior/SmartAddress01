class ContactApi {


    fetch = (url, options, body) => {
        if (body) {
            options = Object.assign(options, {body: body});
        }

        return fetch(url, options);
    };

    loadContacts = () => {
        console.log('contactApi');
        let url = 'https://my-json-server.typicode.com/SylviaGonschior/SmartAddress01/contacts';
        let options = {
            method: 'GET'
        };

        return this.fetch(url, options)
            .then(res => res.json());
    };

}

export default new ContactApi();

