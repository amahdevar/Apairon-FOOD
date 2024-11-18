import React, { useState, useEffect } from 'react';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Orders from './OrdersComponent';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    return (
        <div>
            <h1>Lunch Ordering System</h1>
            {!token ? (
                <div>
                    <Login setToken={setToken} />
                    <Register setToken={setToken} />
                </div>
            ) : (
                <Orders />
            )}
        </div>
    );
};

export default App;
