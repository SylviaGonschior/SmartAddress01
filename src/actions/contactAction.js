
const fetchData = () => {
    fetch('https://my-json-server.typicode.com/SylviaGonschior/SmartAddress01/contacts')
        .then((response) => response.json())
        .then((contacts) => {
            this.setState({
                isLoading: false,
                contacts: contacts,
                refreshing: false
            })

        })

        .catch((error) => {
            this.setState({
                isLoading: false,
                error: error,
                refreshing: false
            })
        });


};

export const getContact = () => dispatch => {

    return fetchData()
    .then((data)=> {

        dispatch({
            payload: data,
            type: 'CONTACT_FETCH'
        })
    })


};
