import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDTZnAJ7ztJi5Q0LPR-8WJ0rwb-2VBD5cU',
  authDomain: 'reactprojectuserdata.firebaseapp.com',
  databaseURL: 'https://reactprojectuserdata-default-rtdb.firebaseio.com',
  projectId: 'reactprojectuserdata',
  storageBucket: 'reactprojectuserdata.appspot.com',
  messagingSenderId: '377803856920',
  appId: '1:377803856920:web:2700aba733019d382fb76d',
  measurementId: 'G-GZRJHC8C0W',
});

var db = firebaseApp.firestore();

export { db };