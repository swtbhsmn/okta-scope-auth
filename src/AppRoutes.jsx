import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginCallback, Security } from '@okta/okta-react';
import OktaAuth,{ toRelativeUrl } from '@okta/okta-auth-js';
import { oktaConfig } from './oktaConfig';

import HomePage from './HomePage';
import ProtectedRoute from './ProtectedRoute';
import Game from './Game';

const oktaAuth = new OktaAuth(oktaConfig)

export default function AppRoutes(props) {
    const navigate = useNavigate();
    const restoreOriginalUri = (_oktaAuth, originalUri) => {
        navigate(toRelativeUrl(originalUri || "/", window.location.origin));
    };
    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path="/login/callback" element={<LoginCallback />}/>
                <Route path='/protected' element={<ProtectedRoute/>}>
                    <Route path='' element={<Game/>} />
                </Route>
            </Routes>
        </Security>
    )
}
