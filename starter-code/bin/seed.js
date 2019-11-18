const mongoose = require ('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities';

const celebrities = [{ 
    name: 'Tom Cruise',
    occupation: 'actor', 
    catchPhrase: 'catch phrase',},
{   name: 'Beyonce',
    occupation:  'singer',
    catchPhrase: 'catch phrase2',},
{   name: 'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: 'catch phrase3',}];

mongoose
.connect('mongodb://localhost:27017/celebrities', { useNewUrlParser: true })
.then(() => {
    return Celebrity.create(celebrities);  
})
.then((insertedDocuments)=>{
    console.log('Inserted documents: ', insertedDocuments.length);
    mongoose.connection.close();
})
.catch(err => console.log('Error connecting to MongoDB', err));



