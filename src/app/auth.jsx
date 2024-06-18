import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {auth,GoogleAuthProvider,GithubAuthProvider} from '@/firebaseConfig'

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [GoogleAuthProvider.PROVIDER_ID, GithubAuthProvider.PROVIDER_ID],
};

const LoginPage = () => {
  return (
    <section id='login'>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </section>
  );
};

export default LoginPage;