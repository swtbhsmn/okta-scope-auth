export const oktaConfig = {
    clientId: `${import.meta.env.VITE_APP_CLIENT_ID}`,
    issuer: `${import.meta.env.VITE_APP_ISSUER_URL}`,
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: [],
    pkce: true
};