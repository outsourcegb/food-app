import { Auth0Provider, User, AppState } from '@auth0/auth0-react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  console.log(domain, clientId, redirectUri);

  if (!domain || !clientId || !redirectUri) {
    throw new Error('Unable to proceed. Try again.');
  }

  const onRedirectCallback = (appStete?: AppState, user?: User) => {
    console.log(user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
