import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    const token = localStorage.getItem('token'); // Get token from localStorage

    useEffect(() => {
        if (!token) {
            setError('You need to log in first');
            return;
        }

        // Fetch orders with the JWT token in the header
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://lunch-backend-production.up.railway.app/orders', {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setOrders(response.data);
            } catch (err) {
                setError('Error fetching orders');
            }
        };

        fetchOrders();
    }, [token]);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!error && orders.length === 0 && <p>No orders found</p>}
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        <strong>{order.username}</strong> - {order.orderDay}: {order.foodChoice}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
