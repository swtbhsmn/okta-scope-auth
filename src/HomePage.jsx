import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const HomePage = () => {

    return (
        <div>
            <h1>Welcome to My App</h1>

            <div>
                <p>Hello!</p>
                <button >Logout</button>
            </div>

        </div>
    );
};

export default HomePage;
