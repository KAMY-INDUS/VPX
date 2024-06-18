"use client";
import { useEffect } from 'react';
import { auth } from '../../../firebaseConfig';
import * as firebaseui from 'firebaseui'; 
import firebase from 'firebase/compat/app';
import { Router } from 'react-router-dom';

const LoginPage = () => {
  useEffect(() => {
    import('firebaseui')
      .then((firebaseui) => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', {
          signInSuccessUrl: '/',
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ],
          signInFlow: 'popup',
          callbacks: {
            signInSuccessWithAuthResult: () =>{Router.push('/')},
          },
        });
      })
      .catch((error) => {
        console.error('Error loading FirebaseUI:', error);
      });
  }, []);

  return (
    <section id="login">
        .logincontainer
        <span className='loginhead'>Login to VPX</span>
      <div id="firebaseui-auth-container"></div>
    </section>
  );
};


export default LoginPage;
