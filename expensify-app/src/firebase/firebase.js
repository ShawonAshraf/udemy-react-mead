import * as firebase from 'firebase';

import config from './config';

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
