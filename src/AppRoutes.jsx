import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginCallback, Security } from '@okta/okta-react';
import OktaAuth from '@okta/okta-auth-js';

import { oktaConfig } from './oktaConfig';
import HomePage from './HomePage';
import { toRelativeUrl } from '@okta/okta-auth-js';
import ProtectedRoute from './ProtectedRoute';

const oktaAuth = new OktaAuth({...oktaConfig})

export default function AppRoutes(props) {
    const navigate = useNavigate();
    const restoreOriginalUri = (_oktaAuth, originalUri) => {
        navigate(toRelativeUrl(originalUri || "/", window.location.origin));
    };

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Routes>
                <Route path='/' element={<ProtectedRoute/>}>
                    <Route index element={<HomePage oktaAuth={oktaAuth}/>} />
                    <Route path='/app' element={<HomePage />} />
                </Route>
                <Route path="/login/callback" element={<LoginCallback />} />
            </Routes>
        </Security>
    )
}
