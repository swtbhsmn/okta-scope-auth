import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from '@mui/material';
import { getAccessToken } from './service/authService';
import CookieCheckSnackbar from './SnackbarCookies';

const HomePage = (props) => {
 const {authState,oktaAuth} = useOktaAuth()
 const [token,setToken] = useState(null)
 const [cookiesEnabled, setCookiesEnabled] = useState(true);  
    return (
        <div>
           <CookieCheckSnackbar cookiesEnabled={cookiesEnabled} setCookiesEnabled={setCookiesEnabled}/>
            <h1>Welcome to Okta App</h1>
                {token ? (JSON.stringify(token)) : null}
            <div>
                <p>Hello!</p>
            </div>
            <Button onClick={()=>{
                getAccessToken(props).then(res=>{
                    console.log(res)
                    setToken(res)
                }).catch(err=>{
                    setCookiesEnabled(false)
                    setToken(null)
                    console.error(err)
                })
                
            }}>Generate Auth Token</Button>
            
        </div>
    );
};

export default HomePage;
