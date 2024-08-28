import { Auth0Provider, AppState } from '@auth0/auth0-react';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
// const issuerBaseURL = import.meta.env.VITE_AUTH0_ISSUER_BASE_URL;

if (!domain || !clientId || !redirectUri || !audience) {
  throw new Error(
    'Missing Auth0 environment variables. Please check your configuration.'
  );
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();

  const onRedirectCallback = useCallback(
    (appState?: AppState) => {
      const targetUrl = appState?.returnTo || '/auth-callback';
      navigate(targetUrl);
    },
    [navigate]
  );

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
