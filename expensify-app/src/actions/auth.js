import { firebase, googleProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider);
  };
};


export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
