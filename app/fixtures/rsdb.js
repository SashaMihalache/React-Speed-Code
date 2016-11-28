const firebase = require('firebase/app');
require('firebase/database');
const config = {
    apiKey: 'AIzaSyDNJGU0nNe5ETkyw9Ryf7qUd3IomJO7sL8',
    authDomain: 'reactspeedcode.firebaseapp.com',
    databaseURL: 'https://reactspeedcode.firebaseio.com/',
    storageBucket: 'gs://reactspeedcode.appspot.com'
};
firebase.initializeApp(config);
const rsdb = firebase.database();
export default rsdb;