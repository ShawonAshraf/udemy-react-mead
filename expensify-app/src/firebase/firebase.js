import * as firebase from 'firebase';

import config from './config';

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider as googleProvider, database as default };
