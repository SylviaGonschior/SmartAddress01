const express = require('express');
const app = express();
const contacts = require('./src/mocks/contacts_data');

app.get('/', (req, res) => {
    res.send('Herzlich Willkommmen');
});

app.get('/api/contacts', (req, res) => {
<<<<<<< HEAD
    res.send(contacts);
});

app.listen(8080, () => console.log('Listening to port 8080...'));
=======
    console.log('get request, respond data');
    res.send(contacts);
});

app.listen(8080, () => console.log('Listening to port 8080...'));
>>>>>>> feature/picView
